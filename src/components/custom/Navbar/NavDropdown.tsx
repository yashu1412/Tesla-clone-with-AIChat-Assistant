import React from "react";
import { Link } from "react-router-dom";

interface NavLink {
  title: string;
  path: string;
  image?: string;
  hasLearnOrder?: boolean;
}

interface CategoryLink {
  title: string;
  links: NavLink[];
}

interface NavDropdownProps {
  isActive: boolean;
  links: NavLink[] | CategoryLink[];
  resourceLinks?: NavLink[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  isActive,
  links,
  resourceLinks,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!isActive) return null;

  return (
    <div 
      className="fixed top-[56px] left-0 right-0 bg-white shadow-md animate-fade-in z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Links */}
        <div className="grid grid-cols-4 col-span-3 gap-5">
          {(links as NavLink[]).map((link, index) => (
            <div key={index} className="group">
              <Link
                to={link.path}
                className="block hover:bg-gray-100 p-4 rounded-lg transition-colors"
                style={{ color: "#333" }}
              >
                {link.image && (
                  <img
                    src={link.image}
                    alt={link.title}
                    className="w-full h-auto mb-4"
                  />
                )}
                <div className="font-medium text-black">{link.title}</div>
                {link.hasLearnOrder && (
                  <div className="mt-2">
                    <button className="text-gray-700 text-sm font-semibold hover:underline">
                      Learn
                    </button>
                    <button className="ml-4 text-gray-700 text-sm font-semibold hover:underline">
                      Order
                    </button>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Resource Links */}
        {resourceLinks && (
          <div className="border-l pl-8">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">
              Resources
            </h3>
            <div className="space-y-4">
              {resourceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block hover:text-blue-600 transition-colors"
                  style={{ color: "#555" }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavDropdown;