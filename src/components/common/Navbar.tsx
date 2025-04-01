
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <svg className="h-6 w-24" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" 
                fill={isScrolled ? "white" : "white"} />
          </svg>
        </Link>

        {/* Center Navigation - Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/models" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Model S</Link>
          <Link to="/model3" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Model 3</Link>
          <Link to="/modelx" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Model X</Link>
          <Link to="/modely" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Model Y</Link>
          <Link to="/cybertruck" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Cybertruck</Link>
          <Link to="/powerwall" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Powerwall</Link>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link to="/shop" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Shop</Link>
          <Link to="/account" className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Account</Link>
          <button onClick={() => setIsOpen(true)} className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2">Menu</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden text-white z-50"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 overflow-auto">
            <div className="flex justify-end p-6">
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 px-8 py-4">
              <Link to="/models" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Model S</Link>
              <Link to="/model3" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Model 3</Link>
              <Link to="/modelx" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Model X</Link>
              <Link to="/modely" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Model Y</Link>
              <Link to="/cybertruck" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Cybertruck</Link>
              <Link to="/powerwall" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Powerwall</Link>
              <Link to="/shop" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link to="/account" className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700" onClick={() => setIsOpen(false)}>Account</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
