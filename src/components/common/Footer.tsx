import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-24 bg-gray-50 text-gray-800 border-t">
      <div className="container mx-auto flex items-center justify-center text-sm space-x-4">
        <p className="text-gray-800 text-sm translate-y-[3px] font-medium  ">Tesla © {new Date().getFullYear()}</p>
        <ul className="flex flex-wrap justify-center gap-4 mt-2 text-sm font-medium">
          <li>
            <Link to="/privacy" className="hover:underline text-gray-800">
              Privacy & Legal
            </Link>
          </li>
          <li>
            <Link to="/recalls" className="hover:underline text-gray-800">
              Vehicle Recalls
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline text-gray-800">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:underline text-gray-800">
              News
            </Link>
          </li>
          <li>
            <Link to="/updates" className="hover:underline text-gray-800">
              Get Updates
            </Link>
          </li>
          <li>
            <Link to="/locations" className="hover:underline text-gray-800">
              Locations
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
