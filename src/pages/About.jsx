import { Compass, Building2, Megaphone, Landmark } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Reveal from '../components/Reveal.jsx';
import { APPROACH, BODY_FONT } from '../data.js';

const EMMIC = [
  {
    number: '01',
    title: 'Evaluate',
    icon: Compass,
    description: 'Back the places and journeys genuinely worth building.',
  },
  {
    number: '02',
    title: 'Manage',
    icon: Building2,
    description: 'Run hospitality to a standard — service, craft, discipline.',
  },
  {
    number: '03',
    title: 'Market',
    icon: Megaphone,
    description: 'Bring the right guests to the right places, honestly.',
  },
  {
    number: '04',
    title: 'Invest',
    icon: Landmark,
    description: 'Put capital behind the businesses that earn it.',
  },
];

function About() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[var(--pine)]">
        <img
          src="/images/about-hero.jpg"
          alt="Mountain valley in northern Pakistan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,39,31,0.75) 0%, rgba(34,39,31,0.4) 55%, rgba(34,39,31,0.92) 100%)',
          }}
        />

        <Nav dark={false} />

        <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-36">
          <span
            className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]"
            style={BODY_FONT}
          >
            About THEMMIC
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-normal text-[var(--cream)] sm:text-6xl md:text-7xl">
            People who understand hospitality — and place.
          </h1>
        </div>
      </section>

      {/* Editorial block 01 — image left, statement right */}
      <section className="w-full bg-[var(--cream)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-8">
          <Reveal as="figure" direction="left" className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-editorial-1.jpg"
                alt="Misty pine valley in the hills near Bhurban"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <figcaption
              className="mt-3 text-xs text-[var(--ink)]/40"
              style={BODY_FONT}
            >
              The hills above Bhurban — our anchor's backyard.
            </figcaption>
          </Reveal>

          <Reveal
            direction="right"
            delay={120}
            className="md:col-span-6 md:col-start-7 md:pt-6"
          >
            <span
              className="text-xs uppercase tracking-[0.2em] text-[var(--ink)]/40"
              style={BODY_FONT}
            >
              Who we are
            </span>
            <p className="mt-5 text-2xl leading-[1.35] font-normal text-[var(--ink)] italic sm:text-3xl">
              "Not a single hotel, and not a holding shell — a sector lens
              that sits above hospitality, travel and destination ventures."
            </p>
            <p
              className="mt-8 max-w-md text-base leading-relaxed text-[var(--ink)]/65"
              style={BODY_FONT}
            >
              THEMMIC frames the ventures, holds the standard, and links out
              to each brand's own world. Our anchor is Serenade Bhurban, a
              live, revenue-ready boutique hill resort — and around it we
              evaluate, manage, market and invest, the same disciplines
              applied with care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial block 02 — statement left, image right, offset */}
      <section className="w-full bg-[var(--cream-panel)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-8">
          <Reveal direction="left" className="md:col-span-6 md:pt-10">
            <span
              className="text-xs uppercase tracking-[0.2em] text-[var(--ink)]/40"
              style={BODY_FONT}
            >
              Where we stand
            </span>
            <h2 className="mt-5 max-w-lg text-3xl leading-[1.15] font-normal text-[var(--ink)] sm:text-4xl">
              Building — with a real anchor under us.
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-lg text-[var(--gold-ink)]" style={BODY_FONT}>
                  Today
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed text-[var(--ink)]/65"
                  style={BODY_FONT}
                >
                  A focused, live set: Serenade Bhurban operating as a real
                  property, and Its Travelick taking shape. We sell the
                  thesis and the one strong anchor — not a portfolio of
                  resorts that doesn't exist yet.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-[var(--gold-ink)]" style={BODY_FONT}>
                  The long arc
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed text-[var(--ink)]/65"
                  style={BODY_FONT}
                >
                  THEMMIC is one part of AmanorX Holdings' wider EMMIC
                  architecture — the direction of travel, held distinct from
                  today's reality, built one well-run place at a time.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            as="figure"
            direction="right"
            delay={120}
            className="md:col-span-5 md:col-start-8 md:mt-16"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-editorial-2.jpg"
                alt="A highland road through green mountains"
                className="h-[280px] w-full object-cover sm:h-[380px]"
              />
            </div>
            <figcaption
              className="mt-3 text-xs text-[var(--ink)]/40"
              style={BODY_FONT}
            >
              The long road north — where the next places will be.
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* EMMIC model — pull-quote heading + asymmetric card grid */}
      <section className="w-full bg-[var(--ink)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal as="span" className="text-xs uppercase tracking-[0.2em] text-white/40" style={BODY_FONT}>
            The EMMIC model
          </Reveal>
          <Reveal as="p" delay={80} className="mt-5 max-w-3xl text-2xl leading-[1.35] font-normal text-white italic sm:text-3xl">
            "Four disciplines, one standard of care — the same chassis
            THEMMIC shares with the wider AmanorX family."
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EMMIC.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.number}
                  delay={i * 90}
                  className={`rounded-2xl border border-white/10 p-7 ${i % 2 === 1 ? 'sm:mt-8' : ''}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span
                    className="mt-6 block text-sm italic text-white/40"
                    style={BODY_FONT}
                  >
                    {item.number}
                  </span>
                  <h3 className="mt-2 text-xl text-white">{item.title}</h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-white/60"
                    style={BODY_FONT}
                  >
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach part 1 — featured pair, oversized cards on white */}
      <section className="w-full bg-white px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal as="span" className="text-xs uppercase tracking-[0.2em] text-[var(--gold-ink)]" style={BODY_FONT}>
            Our approach
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-5 max-w-xl text-3xl leading-[1.1] font-medium text-[var(--ink)] sm:text-4xl">
            What we hold to.
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {APPROACH.slice(0, 2).map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="group rounded-2xl border border-[var(--ink)]/10 bg-white p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                <span
                  className="text-5xl text-[var(--ink)]/15 italic transition-colors group-hover:text-[var(--gold)]/40"
                  style={BODY_FONT}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-2xl text-[var(--ink)]">{item.title}</h3>
                <p
                  className="mt-3 max-w-sm text-base leading-relaxed text-[var(--ink)]/65"
                  style={BODY_FONT}
                >
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach part 2 — remaining pair, dark side-by-side statement layout */}
      <section className="w-full bg-[var(--pine)] px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal as="span" className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]" style={BODY_FONT}>
            And what follows
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-5 max-w-xl text-3xl leading-[1.1] font-medium text-[var(--cream)] sm:text-4xl">
            Built to endure.
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-14">
            {APPROACH.slice(2, 4).map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="border-l-2 border-[var(--gold)]/40 pl-6"
              >
                <span
                  className="text-xs text-[var(--cream)]/40"
                  style={BODY_FONT}
                >
                  {String(i + 3).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-2xl text-[var(--cream)]">{item.title}</h3>
                <p
                  className="mt-3 max-w-sm text-base leading-relaxed text-[var(--cream)]/60"
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

export default About;
