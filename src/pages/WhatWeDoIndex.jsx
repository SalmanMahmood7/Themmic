import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Reveal from '../components/Reveal.jsx';
import { WHAT_WE_DO, BODY_FONT } from '../data.js';

function WhatWeDoIndex() {
  return (
    <>
      <section className="w-full bg-[var(--pine)] pb-24 sm:pb-32">
        <Nav dark={false} />
        <div className="mx-auto max-w-4xl px-4 pt-28 sm:px-8 sm:pt-36">
          <span
            className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]"
            style={BODY_FONT}
          >
            What we do
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-normal text-[var(--cream)] sm:text-5xl md:text-6xl">
            Four disciplines, one standard of care.
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--cream)]/70 sm:text-lg"
            style={BODY_FONT}
          >
            Evaluate, manage, market and invest — the chassis THEMMIC shares
            with the wider AmanorX family, expressed for hospitality.
          </p>
        </div>
      </section>

      <section className="w-full bg-[var(--cream)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {WHAT_WE_DO.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.slug}
                as={Link}
                to={`/what-we-do/${item.slug}`}
                delay={i * 100}
                className="group rounded-2xl border border-[var(--pine)]/10 bg-[var(--cream-panel)] p-8 transition-colors hover:border-[var(--pine)]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ink)]/10">
                  <Icon className="h-5 w-5 text-[var(--ink)]" />
                </div>
                <span
                  className="mt-6 block text-sm italic text-[var(--ink)]/40"
                  style={BODY_FONT}
                >
                  {item.number}
                </span>
                <h2 className="mt-2 text-2xl text-[var(--ink)]">{item.title}</h2>
                <p
                  className="mt-3 text-base leading-relaxed text-[var(--ink)]/65"
                  style={BODY_FONT}
                >
                  {item.summary}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] transition-transform group-hover:translate-x-0.5"
                  style={BODY_FONT}
                >
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default WhatWeDoIndex;
