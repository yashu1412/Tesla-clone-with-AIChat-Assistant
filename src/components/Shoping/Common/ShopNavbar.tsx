import React, { useState, useRef , useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, ChevronDown, X } from "lucide-react";
import { useCart } from '../Custom/Cart/CartContext';

const TeslaNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const { totalItems } = useCart();
  
  // Add token from localStorage or context if available
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  
  const handleMouseEnter = (menu: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 3000);
  };

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu:", !mobileMenuOpen); // Add logging
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Add a useEffect to log when the state changes
  useEffect(() => {
    console.log("Mobile menu state:", mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md text-black py-3 px-6 font-medium text-sm z-50">
      <div className="mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold flex items-center">
            <Link to="/" className="tracking-widest flex items-center">
              <svg className="h-3 w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
              </svg>
            </Link>
          </div>
          <div className="border-l border-gray-300 h-4 mx-2"></div>
          <NavLink to="/tesla-shop" className="hover:text-gray-500">Shop</NavLink>
        </div>

        {/* Center Section */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Charging */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('charging')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center hover:text-gray-500">
              Charging <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            {activeDropdown === 'charging' && (
              <div className="fixed top-[56px] left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
                <div className="max-w-[1440px] mx-auto px-10 py-6 flex justify-between items-start">
                  <div className="grid grid-cols-3 gap-12 w-2/3">
                    {[
                      { title: 'Chargers', path: '/charging/chargers' },
                      { title: 'Adapters', path: '/charging/adapters' },
                      { title: 'Parts', path: '/charging/parts' }
                    ].map((item, idx) => (
                      <div key={idx}>
                        <NavLink to={item.path} className="text-sm font-semibold border-b border-gray-300 pb-1 inline-block mb-2 hover:text-gray-500">
                          {item.title}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                  <div className="w-1/3">
                    <img 
                      src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/1457768-02-G_WC_F8_FeaturedNav_696x482.png" 
                      alt="Wall Connector" 
                      className="w-full max-w-xs mx-auto" 
                    />
                    <p className="text-center text-sm font-medium mt-2">Wall Connector</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accessories */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('accessories')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center hover:text-gray-500">
              Vehicle Accessories <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            {activeDropdown === 'accessories' && (
              <div className="fixed top-[56px] left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
                <div className="max-w-[1440px] mx-auto px-10 py-6 grid grid-cols-5 gap-8">
                  {[
                    { name: 'Cybertruck', links: ['Featured Products', 'Floor Mats', 'Interior', 'Exterior', 'Bed', 'Wheels and Tires', 'Parts', 'Keys'] },
                    { name: 'Model S', links: ['Best Sellers', 'Floor Mats', 'Interior', 'Exterior', 'Wheels and Tires', 'Parts', 'Keys'] },
                    { name: 'Model 3', links: ['Best Sellers', 'Floor Mats', 'Interior', 'Exterior', 'Wheels and Tires', 'Parts', 'Keys'] },
                    { name: 'Model X', links: ['Best Sellers', 'Floor Mats', 'Interior', 'Exterior', 'Wheels and Tires', 'Parts', 'Keys'] },
                    { name: 'Model Y', links: ['Best Sellers', 'Floor Mats', 'Interior', 'Exterior', 'Wheels and Tires', 'Parts', 'Keys'] },
                  ].map((model, idx) => (
                    <div key={idx}>
                      <NavLink 
                        to={`/accessories/${model.name.toLowerCase().replace(' ', '-')}`} 
                        className="text-sm font-semibold border-b border-gray-300 pb-1 mb-2 block hover:text-gray-500"
                      >
                        {model.name}
                      </NavLink>
                      {model.links.map((label, i) => (
                        <NavLink 
                          key={i}
                          to={`/accessories/${model.name.toLowerCase().replace(' ', '-')}/${label.toLowerCase().replace(/ /g, '-')}`}
                          className="block text-sm text-gray-700 py-[6px] hover:text-gray-500"
                        >
                          {label}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Apparel */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('apparel')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center hover:text-gray-500">
              Apparel <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            {activeDropdown === 'apparel' && (
              <div className="fixed top-[56px] left-0 right-0 bg-white shadow-md animate-fade-in z-50">
                <div className="mx-auto px-10 py-4 flex justify-between">
                  <div className="grid grid-cols-3 gap-6 w-3/4">
                    <div>
                      <NavLink to="/apparel/men" className="font-medium pb-2 border-b border-gray-300 block hover:text-gray-500">Men</NavLink>
                      <NavLink to="/apparel/men/best-sellers" className="block py-1 hover:text-gray-500">Best Sellers</NavLink>
                      <NavLink to="/apparel/men/tees" className="block py-1 hover:text-gray-500">Tees</NavLink>
                      <NavLink to="/apparel/men/sweatshirts" className="block py-1 hover:text-gray-500">Sweatshirts and Hoodies</NavLink>
                      <NavLink to="/apparel/men/outerwear" className="block py-1 hover:text-gray-500">Outerwear</NavLink>
                      <NavLink to="/apparel/men/hats" className="block py-1 hover:text-gray-500">Hats</NavLink>
                    </div>
                    <div>
                      <NavLink to="/apparel/women" className="font-medium pb-2 border-b border-gray-300 block hover:text-gray-500">Women</NavLink>
                      <NavLink to="/apparel/women/sweatshirts" className="block py-1 hover:text-gray-500">Sweatshirts and Hoodies</NavLink>
                      <NavLink to="/apparel/women/hats" className="block py-1 hover:text-gray-500">Hats</NavLink>
                    </div>
                    <div>
                      <NavLink to="/apparel/kids" className="font-medium pb-2 border-b border-gray-300 block hover:text-gray-500">Kids</NavLink>
                      <NavLink to="/apparel/kids/best-sellers" className="block py-1 hover:text-gray-500">Best Sellers</NavLink>
                      <NavLink to="/apparel/kids/tees" className="block py-1 hover:text-gray-500">Tees</NavLink>
                      <NavLink to="/apparel/kids/onesies" className="block py-1 hover:text-gray-500">Onesies</NavLink>
                      <NavLink to="/apparel/kids/outerwear" className="block py-1 hover:text-gray-500">Outerwear</NavLink>
                      <NavLink to="/apparel/kids/hats" className="block py-1 hover:text-gray-500">Hats</NavLink>
                    </div>
                  </div>
                  <div className="w-1/4 pl-6 flex flex-col items-center text-center">
                    <img 
                      src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/2065978-00-A_BuiltForAnyPlanet_FeaturedNav.png"
                      alt="Built for Any Planet Hoodie" 
                      className="w-full object-cover"
                    />
                    <p className="mt-2 text-sm text-gray-700">Built for Any Planet Hoodie</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Lifestyle */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('lifestyle')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center hover:text-gray-500">
              Lifestyle <ChevronDown className="ml-1 h-3 w-3" />
            </button>
            {activeDropdown === 'lifestyle' && (
              <div className="fixed top-[56px] left-0 right-0 bg-white shadow-md animate-fade-in z-50">
                <div className="max-w-[1440px] mx-auto px-10 py-6 flex justify-between">
                  <div className="grid grid-cols-3 gap-12 w-3/4">
                    <div>
                      <NavLink to="/lifestyle/best-sellers" className="block font-medium pb-1 border-b border-gray-300 hover:text-gray-500">Best Sellers</NavLink>
                      <NavLink to="/lifestyle/gift-card" className="block font-medium pt-3 pb-1 border-b border-gray-300 hover:text-gray-500">Gift Card</NavLink>
                    </div>
                    <div>
                      <NavLink to="/lifestyle/bags" className="block font-medium pb-1 border-b border-gray-300 hover:text-gray-500">Bags</NavLink>
                    </div>
                    <div>
                      <NavLink to="/lifestyle/drinkware" className="block font-medium pb-1 border-b border-gray-300 hover:text-gray-500">Drinkware</NavLink>
                      <NavLink to="/lifestyle/mini-teslas" className="block font-medium pt-3 pb-1 border-b border-gray-300 hover:text-gray-500">Mini Teslas</NavLink>
                      <NavLink to="/lifestyle/outdoor-tech" className="block font-medium pt-3 pb-1 border-b border-gray-300 hover:text-gray-500">Outdoor & Tech</NavLink>
                    </div>
                  </div>
                  <div className="w-1/4 pl-6 flex flex-col items-center text-center">
                    <img 
                      src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/2080682-00-A_flyout_nav.png"
                      alt="Tesla Bot Action Figure" 
                      className="w-full h-auto object-contain"
                    />
                    <p className="mt-2 text-sm text-gray-800 font-medium">Tesla Bot Action Figure</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <NavLink to="/search">
            <Search className="h-4 w-4 cursor-pointer hover:text-gray-500" />
          </NavLink>
          <NavLink to="/cart" className="relative">
            <ShoppingCart className="h-4 w-4 cursor-pointer hover:text-gray-500" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
          <button onClick={toggleMobileMenu} className="cursor-pointer hover:text-gray-500">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full Screen Menu - Now works on all screen sizes */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-[999] bg-white text-black p-4 overflow-y-auto h-screen">
          <div className="max-w-7xl mx-auto flex flex-col space-y-4">
            {token ? (
              <Link to="/dashboard" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Profile
              </Link>
            ) : (
              <>
                <Link to="/login" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                  </svg>
                  Login
                </Link>
                <Link to="/signup" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Sign Up
                </Link>
              </>
            )}
            
            <Link to="/shopcharging" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7.586 5H7a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8a3 3 0 00-3-3h-.586l1.293-1.293A1 1 0 0013 2H7zm0 2h6v.414l-1.293 1.293a1 1 0 01-.707.293H7a1 1 0 01-.707-.293L5 4.414V4h2z" clipRule="evenodd" />
              </svg>
              Charging
            </Link>
            <Link to="/accessories" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              Vehicle Accessories
            </Link>
            <Link to="/apparel" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Apparel
            </Link>
            <Link to="/lifestyle" className="py-3 px-4 text-lg border-b flex items-center hover:text-gray-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              Lifestyle
            </Link>
          
          </div>
        </div>
      )}

      {/* Backdrop */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </nav>
  );
};

export default TeslaNavbar;
