import { useEffect, useRef, useState } from 'react';

const DIRECTIONS = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
};

function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${DIRECTIONS[direction]}`} ${className}`}
      style={{
        transitionDuration: '700ms',
        transitionDelay: visible ? `${delay}ms` : '0ms',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
