import { useEffect, useRef, useState } from 'react';

const FADE_DISTANCE_RATIO = 0.6; // fraction of viewport height used to fade the video in
const SEEK_EPSILON = 0.03; // seconds; skip redundant seeks smaller than this

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Fixed, full-viewport video whose currentTime is driven by scroll position
 * instead of playing normally. Scroll progress is measured from the top of
 * `startRef`'s element (0%) to the bottom of the document (100%) and mapped
 * onto the video's full duration, so the footage finishes exactly as the
 * user reaches the bottom of the page.
 *
 * Seeks are queued rather than fired on every scroll/rAF tick: the browser's
 * video decoder can only honor one `currentTime` change at a time, and
 * blindly writing to it faster than it can seek causes the picture to lag
 * or freeze on a stale frame. Instead we track the latest desired time and
 * only issue the next seek once the previous one's `seeked` event has
 * fired, so playback always catches up to (and never falls permanently
 * behind) the real scroll position.
 *
 * Never autoplays. On prefers-reduced-motion or small/mobile viewports it
 * renders a static poster instead of driving playback at all.
 */
function ScrollScrubbedVideoBackground({ videoSrc, posterSrc, startRef, className = '' }) {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const isReadyRef = useRef(false);
  const durationRef = useRef(0);

  const [useStaticFallback, setUseStaticFallback] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const updateFallback = () => {
      setUseStaticFallback(reducedMotionQuery.matches || mobileQuery.matches);
    };
    updateFallback();

    reducedMotionQuery.addEventListener('change', updateFallback);
    mobileQuery.addEventListener('change', updateFallback);
    return () => {
      reducedMotionQuery.removeEventListener('change', updateFallback);
      mobileQuery.removeEventListener('change', updateFallback);
    };
  }, []);

  // Static (no-JS-scrub) fallback: just fade the poster in once the start
  // marker enters view, via IntersectionObserver -- no scroll listener, no
  // video decoding at all.
  useEffect(() => {
    if (!useStaticFallback) return undefined;
    const wrapper = wrapperRef.current;
    const marker = startRef?.current;
    if (!wrapper || !marker) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        wrapper.style.opacity = entry.boundingClientRect.top <= window.innerHeight ? '1' : '0';
      },
      { threshold: 0 },
    );
    observer.observe(marker);
    return () => observer.disconnect();
  }, [useStaticFallback, startRef]);

  useEffect(() => {
    if (useStaticFallback) return undefined;

    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return undefined;

    const applyPendingSeek = () => {
      if (!isReadyRef.current || isSeekingRef.current) return;
      const duration = durationRef.current;
      if (!(duration > 0)) return;

      const desired = clamp(targetTimeRef.current, 0, duration);
      if (Math.abs(video.currentTime - desired) < SEEK_EPSILON) return;

      isSeekingRef.current = true;
      video.currentTime = desired;
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      applyPendingSeek();
    };

    const markReady = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        durationRef.current = video.duration;
      }
      if (isReadyRef.current) return;
      isReadyRef.current = true;

      // Some browsers keep showing the `poster` image forever -- even while
      // currentTime is being seeked -- until the video has actually decoded
      // a frame via play(). A muted play() immediately followed by pause()
      // forces that first real frame in without visible playback, then we
      // hand off to the normal seek queue.
      const playResult = video.play();
      const afterKickstart = () => {
        video.pause();
        applyPendingSeek();
      };
      if (playResult?.then) {
        playResult.then(afterKickstart).catch(applyPendingSeek);
      } else {
        afterKickstart();
      }
    };

    video.addEventListener('loadeddata', markReady);
    video.addEventListener('durationchange', markReady);
    video.addEventListener('seeked', handleSeeked);

    const updateTarget = () => {
      const marker = startRef?.current;
      const start = marker ? marker.getBoundingClientRect().top + window.scrollY : 0;
      const end = Math.max(document.documentElement.scrollHeight - window.innerHeight, start + 1);

      const progress = clamp((window.scrollY - start) / (end - start), 0, 1);
      targetTimeRef.current = progress * (durationRef.current || 0);

      const fadeDistance = window.innerHeight * FADE_DISTANCE_RATIO;
      const opacity = clamp((window.scrollY - (start - fadeDistance)) / fadeDistance, 0, 1);
      wrapper.style.opacity = String(opacity);

      applyPendingSeek();
    };

    updateTarget();
    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget);

    return () => {
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('durationchange', markReady);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
    };
  }, [useStaticFallback, startRef]);

  return (
    <div
      ref={wrapperRef}
      className={`pointer-events-none fixed inset-0 -z-10 opacity-0 ${className}`}
    >
      {useStaticFallback ? (
        <img src={posterSrc} alt="" className="h-full w-full object-cover" />
      ) : (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster={posterSrc}
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default ScrollScrubbedVideoBackground;
