import Nav from '../components/Nav.jsx';
import Reveal from '../components/Reveal.jsx';
import { BODY_FONT } from '../data.js';

const FEATURES = [
  {
    title: 'Destination dining',
    description: 'Halal, alcohol-free, made with intent.',
  },
  {
    title: 'Intimate stays',
    description: 'Small, considered luxury in the hills.',
  },
  {
    title: 'Destination weddings',
    description: 'Quiet, personal celebrations.',
  },
  {
    title: 'Executive retreats',
    description: 'Space to step back and think.',
  },
];

function Projects() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[var(--pine)]">
        <img
          src="/images/projects-hero.jpg"
          alt="A warm, lantern-lit lodge tucked among trees at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,39,31,0.8) 0%, rgba(34,39,31,0.5) 55%, rgba(34,39,31,0.94) 100%)',
          }}
        />

        <Nav dark={false} />

        <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
          <span
            className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]"
            style={BODY_FONT}
          >
            Our projects
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-normal text-[var(--cream)] sm:text-5xl md:text-6xl">
            A real anchor, and a careful next step.
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--cream)]/70 sm:text-lg"
            style={BODY_FONT}
          >
            We'd rather show one place run well than a portfolio that isn't
            there. Here's what's live, what's coming, and what we're holding
            until it's real.
          </p>
        </div>
      </section>

      <section className="w-full bg-[var(--cream)] px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal as="article" className="relative overflow-hidden rounded-[28px]">
            <img
              src="/images/contact-hero.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(160deg, rgba(36,54,74,0.92), rgba(30,58,47,0.88))',
              }}
            />
            <div className="relative p-8 sm:p-12">
              <p
                className="mb-2.5 text-[11px] font-semibold tracking-[0.18em] text-[var(--gold)] uppercase"
                style={BODY_FONT}
              >
                Flagship · Boutique hill resort · Bhurban
              </p>
              <h2 className="mb-4 text-3xl font-semibold text-[var(--cream)] sm:text-4xl">
                Serenade Bhurban
              </h2>
              <p
                className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[#F3EEE4]/84 sm:text-base"
                style={BODY_FONT}
              >
                An intimate property in the Bhurban hills, built around warmth
                and craft rather than scale. It carries its own brand and its
                own story — THEMMIC frames it here and sends you onward to
                experience it directly.
              </p>

              <div className="grid gap-6 border-t border-[var(--cream)]/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {FEATURES.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="text-lg text-[var(--cream)]">{feature.title}</h3>
                    <p
                      className="mt-2 text-sm leading-relaxed text-[#F3EEE4]/65"
                      style={BODY_FONT}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.instagram.com/serenadebhurban/"
                target="_blank"
                rel="noopener"
                className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-transform hover:scale-[1.02]"
                style={BODY_FONT}
              >
                Explore Serenade on Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal
            as="article"
            delay={120}
            className="relative mt-6 flex flex-col overflow-hidden rounded-[22px] p-7 sm:p-9"
          >
            <img
              src="/images/travelick-vr.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(160deg, rgba(15,26,21,0.35), rgba(15,26,21,0.82))',
              }}
            />
            <div className="relative">
              <span
                className="text-[11px] font-semibold tracking-[0.18em] text-[var(--gold)] uppercase"
                style={BODY_FONT}
              >
                Travel venture · In progress
              </span>
              <h3 className="mt-4 mb-3 text-2xl font-semibold text-[var(--cream)] sm:text-3xl">
                Its Travelick
              </h3>
              <p
                className="max-w-2xl text-[15px] leading-relaxed text-[var(--cream)]/80"
                style={BODY_FONT}
              >
                A travel venture within the THEMMIC world. It has its own home
                at travelick.com, and we're keeping the story light here until
                it's ready to be told properly — no half-formed promises. More
                to share soon.
              </p>
              <div className="mt-6 flex items-center gap-3">
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
      </section>

      <section className="w-full bg-[var(--pine)] px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal as="h2" className="text-2xl leading-[1.2] font-normal text-[var(--cream)] sm:text-3xl">
            More to come — when it's real.
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mt-4 text-base leading-relaxed text-[var(--cream)]/65 sm:text-lg"
            style={BODY_FONT}
          >
            Other names exist in the group, but their place in the THEMMIC
            world isn't settled yet. We'll add them here as they firm up —
            never before.
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Projects;
