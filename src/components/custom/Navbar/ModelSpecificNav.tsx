
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface ModelSpecificNavProps {
  modelName: string;
  modelPath: string;
  links: Array<{
    title: string;
    path: string;
    isButton?: boolean;
  }>;
  bgClass?: string;
  setMobileMenuOpen: (value: boolean) => void;
}

const ModelSpecificNav: React.FC<ModelSpecificNavProps> = ({
  modelName,
  modelPath,
  links,
  bgClass = "bg-black/20",
  setMobileMenuOpen
}) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${bgClass} backdrop-blur-md`}>
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={modelPath} className="text-white text-xl font-medium">
          {modelName}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            link.isButton ? (
              <Link key={index} to={link.path}>
                <button className="bg-black text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-900">
                  {link.title}
                </button>
              </Link>
            ) : (
              <Link key={index} to={link.path} className="text-sm font-medium text-white hover:text-gray-300">
                {link.title}
              </Link>
            )
          ))}
        </div>

        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default ModelSpecificNav;