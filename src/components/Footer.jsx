import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { BODY_FONT } from '../data.js';

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'What We Do', to: '/what-we-do' },
      { label: 'Projects', to: '/projects' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Our Places',
    links: [
      {
        label: 'Serenade Bhurban',
        to: 'https://www.instagram.com/serenadebhurban?igsh=Mmxoemkxdjdrb2dl',
        external: true,
      },
      { label: 'Its Travelick — Coming soon', to: '/projects' },
    ],
  },
];

function FooterLink({ to, external, children }) {
  const className =
    'text-[10px] text-white/50 transition-colors duration-200 hover:text-white/80 sm:text-xs';
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener" className={className} style={BODY_FONT}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} style={BODY_FONT}>
      {children}
    </Link>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[var(--pine)] px-4 pt-10 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:px-12 lg:px-16">
      <img
        src="/images/about-hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(34,39,31,0.88) 0%, rgba(34,39,31,0.75) 40%, rgba(34,39,31,0.94) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-2xl text-center sm:mb-20 sm:mx-auto">
          <h2 className="text-3xl leading-[1.15] font-normal text-[var(--cream)] sm:text-4xl md:text-5xl">
            Want to build with us, or stay with us?
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-[var(--cream)]/70 sm:text-lg"
            style={BODY_FONT}
          >
            Whether you're an operator, an investor, or a guest — we'd like
            to hear from you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition-transform hover:scale-[1.02]"
            style={BODY_FONT}
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mb-12 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link to="/" className="text-2xl italic text-white">
              Themmic
            </Link>
            <p className="mt-2 max-w-xs text-sm text-white/50" style={BODY_FONT}>
              Tourism &amp; hospitality, done with care. An AmanorX Holdings
              company.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3
                className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white uppercase sm:mb-4 sm:text-xs"
                style={BODY_FONT}
              >
                {col.title}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to} external={link.external}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2">
            <h3
              className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white uppercase sm:mb-4 sm:text-xs"
              style={BODY_FONT}
            >
              Stay In The Loop
            </h3>
            <div className="liquid-glass flex w-full max-w-sm items-center rounded-full p-1.5">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder-white/50 outline-none"
                style={BODY_FONT}
              />
              <button
                className="flex-shrink-0 whitespace-nowrap rounded-full bg-[var(--gold)] px-4 py-2.5 text-sm font-medium text-[var(--ink)]"
                style={BODY_FONT}
              >
                Stay Updated
              </button>
            </div>

            <h3
              className="mt-5 mb-3 text-[10px] font-bold tracking-[0.15em] text-white uppercase sm:mt-6"
              style={BODY_FONT}
            >
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/serenadebhurban?igsh=Mmxoemkxdjdrb2dl"
                target="_blank"
                rel="noopener"
                aria-label="Serenade Bhurban on Instagram"
                className="text-white/50 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center sm:mt-16">
          <span className="text-[10px] text-white/50 sm:text-xs" style={BODY_FONT}>
            © {year} THEMMIC · An AmanorX Holdings Company
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
