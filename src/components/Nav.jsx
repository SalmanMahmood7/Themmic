import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, BODY_FONT } from '../data.js';

function NavLink({ to, className, style, onClick, children }) {
  if (to.startsWith('/')) {
    return (
      <Link to={to} className={className} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  );
}

function Nav({ dark = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const dropdownTriggerRef = useRef(null);
  const dropdownCloseTimer = useRef(null);

  const openDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    const rect = dropdownTriggerRef.current?.getBoundingClientRect();
    if (rect) {
      setDropdownPos({ top: rect.bottom + 12, left: rect.left + rect.width / 2 });
    }
    setDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    dropdownCloseTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDarkText = scrolled || dark;
  const textColor = isDarkText ? 'text-[#182C41]' : 'text-white';
  const linkColor = isDarkText
    ? 'text-[#182C41]/80 hover:text-[#182C41]'
    : 'text-white/90 hover:text-white';

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-4 py-4 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'bg-[var(--cream)]/80 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          className={`text-xl italic transition-colors duration-700 sm:text-2xl ${textColor}`}
        >
          Themmic
        </Link>

        <div
          className={`hidden items-center gap-6 rounded-full px-6 py-2.5 md:flex ${
            scrolled ? '' : 'liquid-glass'
          }`}
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                ref={dropdownTriggerRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleCloseDropdown}
              >
                <NavLink
                  to={link.to}
                  className={`flex items-center gap-1 text-sm transition-colors duration-300 ${linkColor}`}
                  style={BODY_FONT}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={`text-sm transition-colors duration-300 ${linkColor}`}
                style={BODY_FONT}
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
            style={BODY_FONT}
          >
            Get Started
          </Link>
        </div>

        {(() => {
          const dropdownLink = NAV_LINKS.find((link) => link.children);
          if (!dropdownLink) return null;
          return (
            <div
              style={{ position: 'fixed', top: dropdownPos.top, left: dropdownPos.left }}
              className={`z-[110] w-48 -translate-x-1/2 rounded-2xl border border-[var(--pine)]/10 bg-[var(--cream)] p-2 shadow-lg transition-[opacity,transform] duration-150 ${
                dropdownOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-1 opacity-0'
              }`}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleCloseDropdown}
            >
              {dropdownLink.children.map((child) => (
                <Link
                  key={child.to}
                  to={child.to}
                  className="block rounded-lg px-3 py-2 text-sm text-[var(--ink)]/75 transition-colors hover:bg-[var(--ink)]/5 hover:text-[var(--ink)]"
                  style={BODY_FONT}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          );
        })()}

        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="liquid-glass relative flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${textColor} ${
              mobileMenuOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${textColor} ${
              mobileMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[90] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <div key={link.label} className="flex flex-col items-center gap-3">
              <NavLink
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl text-white transition-all"
                style={{
                  transitionDuration: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                  transitionDelay: `${100 + i * 50}ms`,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(1rem)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </NavLink>
              {link.children && (
                <div className="flex flex-col items-center gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base text-white/60 transition-all hover:text-white"
                      style={{
                        ...BODY_FONT,
                        transitionDuration: '500ms',
                        transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                        transitionDelay: `${100 + i * 50}ms`,
                        transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(1rem)',
                        opacity: mobileMenuOpen ? 1 : 0,
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 rounded-full bg-white px-8 py-3 text-lg font-medium text-black transition-all"
            style={{
              fontFamily: 'system-ui, sans-serif',
              transitionDuration: '500ms',
              transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
              transitionDelay: `${100 + NAV_LINKS.length * 50}ms`,
              transform: mobileMenuOpen ? 'scale(1)' : 'scale(0.9)',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
