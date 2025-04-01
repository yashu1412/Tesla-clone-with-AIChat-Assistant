
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent py-8 text-center text-gray-600 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link to="/about" className="hover:text-gray-900">Tesla © {new Date().getFullYear()}</Link>
          <Link to="/privacy" className="hover:text-gray-900">Privacy & Legal</Link>
          <Link to="/recalls" className="hover:text-gray-900">Vehicle Recalls</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          <Link to="/news" className="hover:text-gray-900">News</Link>
          <Link to="/locations" className="hover:text-gray-900">Locations</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
