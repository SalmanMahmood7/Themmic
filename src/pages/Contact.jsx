import { useState } from 'react';
import { Mail, MapPin, AtSign } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Reveal from '../components/Reveal.jsx';
import { BODY_FONT } from '../data.js';

const REASONS = ['Guest / traveller', 'Partnership', 'Investor', 'Just curious'];

const inputClasses =
  'w-full rounded-xl border border-[var(--pine)]/15 bg-[var(--cream)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink)]/40 focus:border-[var(--pine)]/40';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[var(--pine)]">
        <img
          src="/images/contact-hero.jpg"
          alt="The stone pathway and lodges at Serenade Bhurban, with the sign at the entrance"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34,39,31,0.82) 0%, rgba(34,39,31,0.55) 55%, rgba(34,39,31,0.94) 100%)',
          }}
        />

        <Nav dark={false} />

        <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
          <span
            className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]"
            style={BODY_FONT}
          >
            Contact
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-normal text-[var(--cream)] sm:text-5xl md:text-6xl">
            Start a conversation.
          </h1>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--cream)]/70 sm:text-lg"
            style={BODY_FONT}
          >
            Whether you're planning a stay, exploring a partnership, or just
            curious about what we're building — we read every note.
          </p>
        </div>
      </section>

      <section className="w-full bg-[var(--cream)] px-4 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="left">
            <h2 className="text-2xl font-normal text-[var(--ink)] sm:text-3xl">
              Reach us directly
            </h2>
            <p
              className="mt-3 max-w-md text-base leading-relaxed text-[var(--ink)]/70"
              style={BODY_FONT}
            >
              Prefer email? Write to us and we'll route your note to the right
              person.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--pine)]/8">
                  <Mail className="h-5 w-5 text-[var(--ink)]" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] text-[var(--ink)]/50 uppercase"
                    style={BODY_FONT}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hello@themmic.com"
                    className="mt-1 block text-base text-[var(--ink)] hover:underline"
                    style={BODY_FONT}
                  >
                    hello@themmic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--pine)]/8">
                  <MapPin className="h-5 w-5 text-[var(--ink)]" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] text-[var(--ink)]/50 uppercase"
                    style={BODY_FONT}
                  >
                    Base
                  </p>
                  <p className="mt-1 text-base text-[var(--ink)]" style={BODY_FONT}>
                    Bhurban · Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--pine)]/8">
                  <AtSign className="h-5 w-5 text-[var(--ink)]" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] text-[var(--ink)]/50 uppercase"
                    style={BODY_FONT}
                  >
                    Serenade Bhurban
                  </p>
                  <a
                    href="https://www.instagram.com/serenadebhurban/"
                    target="_blank"
                    rel="noopener"
                    className="mt-1 inline-flex items-center gap-1 text-base text-[var(--ink)] hover:underline"
                    style={BODY_FONT}
                  >
                    @serenadebhurban <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <p
              className="mt-10 max-w-md text-sm leading-relaxed text-[var(--ink)]/55"
              style={BODY_FONT}
            >
              Planning a stay at Serenade Bhurban? Bookings live on Serenade's
              own channels — this form is for THEMMIC enquiries.
            </p>
          </Reveal>

          <Reveal
            direction="right"
            delay={120}
            className="rounded-[22px] border border-[var(--pine)]/10 bg-[var(--cream-panel)] p-7 sm:p-10"
          >
            <h2 className="text-2xl font-normal text-[var(--ink)] sm:text-3xl">
              Send us a note
            </h2>
            <p
              className="mt-3 text-base leading-relaxed text-[var(--ink)]/70"
              style={BODY_FONT}
            >
              Tell us who you are and what you have in mind. We'll be in
              touch.
            </p>

            {submitted ? (
              <p
                className="mt-8 text-base text-[var(--ink)]"
                style={BODY_FONT}
              >
                Thanks — your note is in. We'll be in touch soon.
              </p>
            ) : (
              <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold tracking-[0.1em] text-[var(--ink)]/60 uppercase"
                    style={BODY_FONT}
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    className={inputClasses}
                    style={BODY_FONT}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold tracking-[0.1em] text-[var(--ink)]/60 uppercase"
                    style={BODY_FONT}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClasses}
                    style={BODY_FONT}
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold tracking-[0.1em] text-[var(--ink)]/60 uppercase"
                    style={BODY_FONT}
                  >
                    I'm reaching out as a
                  </label>
                  <select name="reason" className={inputClasses} style={BODY_FONT}>
                    {REASONS.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold tracking-[0.1em] text-[var(--ink)]/60 uppercase"
                    style={BODY_FONT}
                  >
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us a little about what you have in mind."
                    className={`${inputClasses} resize-none`}
                    style={BODY_FONT}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-full bg-[var(--pine)] px-6 py-3 text-sm font-medium text-[var(--cream)] transition-transform hover:scale-[1.02]"
                  style={BODY_FONT}
                >
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
