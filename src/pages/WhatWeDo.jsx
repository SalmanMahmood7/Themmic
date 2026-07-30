import { useParams, Navigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Reveal from '../components/Reveal.jsx';
import { WHAT_WE_DO, BODY_FONT } from '../data.js';

function WhatWeDo() {
  const { slug } = useParams();
  const index = WHAT_WE_DO.findIndex((item) => item.slug === slug);

  if (index === -1) {
    return <Navigate to="/what-we-do" replace />;
  }

  const topic = WHAT_WE_DO[index];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[var(--pine)]">
        <img
          src={topic.image}
          alt={topic.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,39,31,0.78) 0%, rgba(34,39,31,0.45) 55%, rgba(34,39,31,0.92) 100%)',
          }}
        />

        <Nav dark={false} />

        <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
          <h1 className="max-w-3xl text-4xl leading-[1.1] font-normal text-[var(--cream)] sm:text-5xl md:text-6xl">
            {topic.title}
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--cream)]/70 sm:text-lg"
            style={BODY_FONT}
          >
            {topic.summary}
          </p>
        </div>
      </section>

      {/* Editorial intro — same treatment as About's "Who we are" block */}
      <section className="w-full bg-[var(--cream)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal as="span" className="text-xs uppercase tracking-[0.2em] text-[var(--ink)]/40" style={BODY_FONT}>
            Overview
          </Reveal>
          <Reveal as="p" delay={80} className="mt-5 max-w-3xl text-2xl leading-[1.35] font-normal text-[var(--ink)] italic sm:text-3xl">
            "{topic.intro}"
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--ink)]/10 bg-[var(--ink)]/10 sm:grid-cols-3">
            {topic.facts.map((fact, i) => (
              <Reveal key={fact} delay={160 + i * 80} className="bg-[var(--cream)] px-6 py-5">
                <span
                  className="text-xs uppercase tracking-[0.1em] text-[var(--ink)]/50"
                  style={BODY_FONT}
                >
                  {fact}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Part 1 — the process, white cards */}
      <section className="w-full bg-white px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal as="span" className="text-xs uppercase tracking-[0.2em] text-[var(--gold-ink)]" style={BODY_FONT}>
            How it works
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-5 max-w-xl text-3xl leading-[1.1] font-medium text-[var(--ink)] sm:text-4xl">
            {topic.title} in practice.
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {topic.sections.slice(0, 3).map((section, i) => (
              <Reveal
                key={section.heading}
                delay={i * 80}
                className="group rounded-2xl border border-[var(--ink)]/10 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                <h3 className="text-lg text-[var(--ink)]">{section.heading}</h3>
                <p
                  className="mt-2 text-[15px] leading-relaxed text-[var(--ink)]/65"
                  style={BODY_FONT}
                >
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2 — the outcome, dark statement layout */}
      <section className="w-full bg-[var(--pine)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal as="span" className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]" style={BODY_FONT}>
            Where it lands
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-5 max-w-xl text-3xl leading-[1.1] font-medium text-[var(--cream)] sm:text-4xl">
            What it means in the end.
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-14">
            {topic.sections.slice(3, 5).map((section, i) => (
              <Reveal
                key={section.heading}
                delay={i * 80}
                className="border-l-2 border-[var(--gold)]/40 pl-6"
              >
                <h3 className="text-xl text-[var(--cream)]">{section.heading}</h3>
                <p
                  className="mt-3 text-base leading-relaxed text-[var(--cream)]/60"
                  style={BODY_FONT}
                >
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
