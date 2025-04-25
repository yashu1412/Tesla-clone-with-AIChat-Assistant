import type React from 'react';

const FooterLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <li className="mb-2">
      <a
        href={href}
        className="text-base text-neutral-500 hover:text-neutral-300 transition-colors"
      >
        {label}
      </a>
    </li>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <ul className="flex flex-wrap justify-center gap-4">
            <FooterLink href="/" label="Tesla © 2025" />
            <FooterLink href="/legal" label="Privacy & Legal" />
            <FooterLink href="/recalls" label="Vehicle Recalls" />
            <FooterLink href="/contact" label="Contact" />
            <FooterLink href="/blog" label="News" />
            <FooterLink href="/updates" label="Get Updates" />
            <FooterLink href="/locations" label="Locations" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
