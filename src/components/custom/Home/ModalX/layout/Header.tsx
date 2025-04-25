import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-transparent">
      <div className="flex items-center justify-between">
        {/* Tesla Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <svg className="h-6 w-32" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
            </svg>
          </a>
        </div>

        {/* Main Navigation - Desktop */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm font-medium text-tesla-black px-4 py-1 hover:bg-black/5 rounded-full transition">Vehicles</a>
          <a href="#" className="text-sm font-medium text-tesla-black px-4 py-1 hover:bg-black/5 rounded-full transition">Energy</a>
          <a href="#" className="text-sm font-medium text-tesla-black px-4 py-1 hover:bg-black/5 rounded-full transition">Charging</a>
          <a href="#" className="text-sm font-medium text-tesla-black px-4 py-1 hover:bg-black/5 rounded-full transition">Discover</a>
          <a href="#" className="text-sm font-medium text-tesla-black px-4 py-1 hover:bg-black/5 rounded-full transition">Shop</a>
        </nav>

        {/* Secondary Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm p-2 rounded-full hover:bg-black/5 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12 11a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M11 7a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="text-sm p-2 rounded-full hover:bg-black/5 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2a5 5 0 00-5 5v1H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 6V7a3 3 0 10-6 0v1h6zm-6 4h2v5a1 1 0 102 0v-5h2v5a3 3 0 11-6 0v-5z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" className="text-sm p-2 rounded-full hover:bg-black/5 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 7h-2.3l-1.7-2.6c-.2-.3-.5-.4-.8-.4H9.8c-.3 0-.6.1-.8.4L7.3 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-7 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="currentColor" />
            </svg>
          </a>
          <button
            className="text-sm p-2 rounded-full hover:bg-black/5 transition"
            onClick={toggleMobileMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-black/5 transition"
          onClick={toggleMobileMenu}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 w-80 bg-white shadow-lg rounded-lg p-6 mt-2 mr-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Vehicles</a>
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Energy</a>
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Charging</a>
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Discover</a>
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Shop</a>
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Support</a>
            <a href="#" className="text-sm font-medium text-tesla-black py-2 px-4 hover:bg-black/5 rounded-full transition">Account</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
