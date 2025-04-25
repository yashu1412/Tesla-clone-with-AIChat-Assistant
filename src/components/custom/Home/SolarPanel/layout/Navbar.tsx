import type React from 'react';
import { useState, useEffect } from 'react';
import type { NavItemProps } from '../../types';

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => {
  return (
    <li className="px-2">
      <a
        href={href}
        className={`text-sm font-medium px-2 py-1 hover:text-white hover:bg-white/10 rounded transition-colors ${
          isActive ? 'text-white' : 'text-neutral-400'
        }`}
      >
        {label}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-medium uppercase tracking-wider">
              <svg className="h-6 w-24" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              <NavItem href="/" label="Model S" />
              <NavItem href="/" label="Model 3" />
              <NavItem href="/" label="Model X" />
              <NavItem href="/" label="Model Y" />
              <NavItem href="/" label="Solar Roof" />
              <NavItem href="/" label="Solar Panels" isActive />
              <NavItem href="/" label="Powerwall" />
            </ul>
          </nav>

          {/* Right Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItem href="/" label="Shop" />
            <NavItem href="/" label="Account" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-2 py-1 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded"
            >
              Menu
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1 hover:bg-white/10 rounded"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Model S
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Model 3
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Model X
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Model Y
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Solar Roof
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium bg-neutral-800 text-white rounded-md"
            >
              Solar Panels
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Powerwall
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Shop
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800 rounded-md"
            >
              Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
