import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Building2, Megaphone, Landmark } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Reveal from '../components/Reveal.jsx';
import ScrollScrubbedVideoBackground from '../components/ScrollScrubbedVideoBackground.jsx';
import { APPROACH, BODY_FONT } from '../data.js';

const VIDEOS = [
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4',
    label: 'Golden Standard',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4',
    label: 'Still Focus',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4',
    label: 'Deep Roots',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4',
    label: 'Quiet Ambition',
  },
];

const PILLARS = [
  {
    number: '01',
    title: 'Evaluation',
    icon: Compass,
    description:
      'We back the places and journeys genuinely worth building — sites, concepts and operators that can earn their place over time.',
  },
  {
    number: '02',
    title: 'Management',
    icon: Building2,
    description:
      'We run hospitality to a standard: service, craft and operating discipline that hold up every day, not just on the brochure.',
  },
  {
    number: '03',
    title: 'Marketplace',
    icon: Megaphone,
    description:
      'We bring the right guests to the right places — honest storytelling over discount noise, the long view over the quick win.',
  },
  {
    number: '04',
    title: 'Investment',
    icon: Landmark,
    description:
      'We put capital behind the hospitality businesses that earn it, and stay involved in the building, not just the funding.',
  },
];

const OVERLAY_PNG =
  'https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png';

function Home() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cooldownRef = useRef(null);
  const thesisRef = useRef(null);

  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    };
  }, []);

  const handleVideoSwitch = (index) => {
    if (index === activeVideo || isTransitioning) return;
    setActiveVideo(index);
    setIsTransitioning(true);
    cooldownRef.current = setTimeout(() => setIsTransitioning(false), 1000);
  };

  const isDark = activeVideo === 2;
  const heroText = isDark ? 'text-[#182C41]' : 'text-white';

  return (
    <>
      <Nav dark={isDark} />

      <ScrollScrubbedVideoBackground
        videoSrc="/videos/drone-journey.mp4"
        posterSrc="/videos/drone-journey-poster.jpg"
        startRef={thesisRef}
      />

      <section className="relative w-full h-screen overflow-hidden bg-black">
        {VIDEOS.map((video, i) => (
          <video
            key={video.url}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              activeVideo === i ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={video.url} type="video/mp4" />
          </video>
        ))}

        <img
          src={OVERLAY_PNG}
          alt=""
          className="absolute inset-0 z-[1] h-full w-full object-cover pointer-events-none animate-train-bob"
        />

        <div className="relative z-[2] flex h-full w-full flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
            <div className="liquid-glass inline-flex items-center rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
              <span
                className={`text-xs transition-colors duration-700 sm:text-sm ${
                  isDark ? 'text-[#182C41]/90' : 'text-white/90'
                }`}
                style={BODY_FONT}
              >
                Tourism &amp; Hospitality · An AmanorX Holdings Company
              </span>
            </div>

            <h1
              className={`mt-6 max-w-4xl text-4xl leading-[1.1] font-normal transition-colors duration-700 sm:text-5xl md:text-7xl lg:text-[5.5rem] ${heroText}`}
            >
              Showing Pakistan
              <br />
              at its best.
            </h1>

            <p
              className={`mt-6 max-w-xl text-sm leading-relaxed transition-colors duration-700 sm:text-base ${
                isDark ? 'text-[#182C41]/70' : 'text-white/70'
              }`}
              style={BODY_FONT}
            >
              We build, back and scale the places and journeys that do this
              country justice — quietly, with care, for the long term.
            </p>

            <Link
              to="/contact"
              className="mt-8 flex-shrink-0 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
              style={BODY_FONT}
            >
              Get Early Access
            </Link>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {VIDEOS.map((video, i) => {
                const active = activeVideo === i;
                return (
                  <button
                    key={video.label}
                    onClick={() => handleVideoSwitch(i)}
                    className={`border-b-2 pb-1 text-xs transition-all duration-700 sm:text-sm ${heroText} ${
                      active
                        ? `opacity-100 ${isDark ? 'border-[#182C41]' : 'border-white'}`
                        : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                    style={BODY_FONT}
                  >
                    {video.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={thesisRef}
        className="relative w-full px-4 py-24 sm:px-8 sm:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <span
              className="text-xs uppercase tracking-[0.2em] text-[#182C41]/50"
              style={BODY_FONT}
            >
              The thesis
            </span>
          </Reveal>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal delay={80}>
              <h2 className="text-3xl leading-[1.15] font-normal text-[#182C41] sm:text-4xl md:text-5xl">
                One of the world's great under-told destinations — with room to
                build places done right.
              </h2>
            </Reveal>

            <Reveal delay={160} className="flex flex-col gap-6 md:pt-2">
              <p
                className="text-base leading-relaxed text-[#182C41]/70 sm:text-lg"
                style={BODY_FONT}
              >
                Pakistan's mountains, valleys and hospitality rank among the
                most remarkable anywhere — and among the least seen. The
                opportunity is not louder marketing. It is care: places run to
                a real standard, journeys planned with intent.
              </p>
              <p
                className="text-base leading-relaxed text-[#182C41]/70 sm:text-lg"
                style={BODY_FONT}
              >
                THEMMIC is the tourism &amp; hospitality company of AmanorX
                Holdings. We evaluate, manage, market and invest — building the
                destinations and the trust that let people experience this
                country at its best.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden px-4 py-24 sm:px-8 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <span
              className="text-xs uppercase tracking-[0.2em] text-[#182C41]/50"
              style={BODY_FONT}
            >
              The EMMIC model
            </span>
          </Reveal>

          <Reveal
            delay={80}
            className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <h2 className="max-w-2xl text-3xl leading-[1.15] font-normal text-[#182C41] sm:text-4xl md:text-5xl">
              Four disciplines, one standard of care.
            </h2>
            <p
              className="max-w-md text-base leading-relaxed text-[#182C41]/60 sm:text-lg"
              style={BODY_FONT}
            >
              Evaluate, Manage, Market, Invest — the chassis THEMMIC shares
              with the wider AmanorX family, expressed for hospitality.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#182C41]/10 bg-[#182C41]/10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.number}
                  as="div"
                  delay={i * 90}
                  className="flex flex-col bg-[var(--cream)] p-8 sm:p-9"
                >
                  <span
                    className="text-sm text-[#182C41]/30 italic"
                    style={BODY_FONT}
                  >
                    {pillar.number}
                  </span>
                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#182C41]/10">
                    <Icon className="h-5 w-5 text-[#182C41]" />
                  </div>
                  <h3 className="mt-6 text-xl text-[#182C41] sm:text-2xl">{pillar.title}</h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-[#182C41]/60 sm:text-base"
                    style={BODY_FONT}
                  >
                    {pillar.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 py-24 sm:px-8 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal
            as="div"
            className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-16"
          >
            <div>
              <p
                className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--ink)] uppercase"
                style={BODY_FONT}
              >
                Our projects
              </p>
              <h2 className="max-w-[20ch] text-3xl leading-[1.06] font-medium text-[var(--ink)] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                A real anchor — and what comes next.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 border-b border-[var(--pine)]/30 pb-0.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--pine)]"
              style={BODY_FONT}
            >
              All projects →
            </Link>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-stretch">
            <Reveal
              as="article"
              delay={80}
              className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[22px] sm:min-h-[420px] lg:min-h-[480px]"
            >
              <img
                src="/images/contact-hero.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(rgba(20,33,27,0.25) 30%, rgba(15,26,21,0.9) 100%)',
                }}
              />
              <div className="relative p-7 sm:p-10">
                <p
                  className="mb-2.5 text-[11px] font-semibold tracking-[0.18em] text-[var(--gold)] uppercase"
                  style={BODY_FONT}
                >
                  Flagship · Bhurban
                </p>
                <h3 className="mb-3 text-3xl font-semibold text-[var(--cream)] sm:text-4xl">
                  Serenade Bhurban
                </h3>
                <p
                  className="mb-5 max-w-[46ch] text-[15px] leading-relaxed text-[#F3EEE4]/84"
                  style={BODY_FONT}
                >
                  A boutique hill resort built around destination dining,
                  intimate luxury stays, small destination weddings and
                  executive retreats. Its own brand, its own world — we frame
                  it and point the way.
                </p>
                <a
                  href="https://www.instagram.com/serenadebhurban/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:scale-[1.02]"
                  style={BODY_FONT}
                >
                  Explore Serenade <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>

            <Reveal
              as="article"
              delay={160}
              className="relative flex flex-col overflow-hidden rounded-[22px] p-7 sm:p-9"
            >
              <img
                src="/images/travelick-vr.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(15,26,21,0.4), rgba(15,26,21,0.86))',
                }}
              />
              <div className="relative flex h-full flex-col">
                <span
                  className="text-[11px] font-semibold tracking-[0.18em] text-[var(--gold)] uppercase"
                  style={BODY_FONT}
                >
                  Travel · In progress
                </span>
                <h3 className="mt-4 mb-3 text-2xl font-semibold text-[var(--cream)] sm:text-3xl">
                  Its Travelick
                </h3>
                <p
                  className="text-[15px] leading-relaxed text-[var(--cream)]/80"
                  style={BODY_FONT}
                >
                  A travel venture within the THEMMIC world, with its own home at
                  travelick.com. We're keeping it light until it's ready — more
                  to share soon.
                </p>
                <div className="mt-auto flex items-center gap-3 pt-6">
                  <a
                    href="http://travelick.com/"
                    target="_blank"
                    rel="noopener"
                    className="text-[13px] font-semibold text-[var(--cream)]/85 underline decoration-[var(--gold)]/50 underline-offset-4 transition-colors hover:text-[var(--cream)]"
                    style={BODY_FONT}
                  >
                    travelick.com
                  </a>
                  <span
                    className="rounded-full border border-[var(--gold)]/40 px-2.5 py-1 text-[10.5px] tracking-[0.1em] text-[var(--gold)] uppercase"
                    style={BODY_FONT}
                  >
                    Coming soon
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 py-24 sm:px-8 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-white/60" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal as="span" className="mb-4 block text-xs font-semibold tracking-[0.2em] text-[var(--gold-ink)] uppercase" style={BODY_FONT}>
            Our approach
          </Reveal>
          <Reveal as="h2" delay={80} className="max-w-2xl text-3xl leading-[1.1] font-medium text-[var(--ink)] sm:text-4xl md:text-5xl">
            How we hold the standard.
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="border-t border-[var(--ink)]/15 pt-6"
              >
                <h3 className="text-xl text-[var(--ink)]">{item.title}</h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-[var(--ink)]/65"
                  style={BODY_FONT}
                >
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
