import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, Globe, User, Menu, X, LayoutDashboard } from "lucide-react";
import NavDropdown from "../custom/Navbar/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAuth } from "../custom/Auth/AuthContext";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModel3LearnMorePage, setIsModel3LearnMorePage] = useState(false);
  const navigate = useNavigate();
  const { token, user } = useSelector((state: RootState) => state.auth);
  const { logout } = useAuth();

  console.log('Token state:', token); // Debug log
  console.log('User state:', user); // Debug log

  const vehicleLinks = [
    { 
      title: "Model S", 
      path: "/models",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
      hasLearnOrder: true
    },
    { 
      title: "Model 3", 
      path: "/model3",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png",
      hasLearnOrder: true
    },
    { 
      title: "New Model Y", 
      path: "/modely",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
      hasLearnOrder: true
    },
    { 
      title: "Model X", 
      path: "/modelx",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
      hasLearnOrder: true
    },
    { 
      title: "Cybertruck", 
      path: "/cybertruck",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
      hasLearnOrder: true
    }
  ];

  const vehiclesResourceLinks = [
    { title: "Help Me Choose", path: "/help-me-choose" },
    { title: "Demo Drive", path: "/demo-drive" },
    { title: "Trade-In", path: "/trade-in" },
    { title: "Compare", path: "/compare" },
    { title: "Help Me Charge", path: "/help-me-charge" },
    { title: "Fleet", path: "/fleet" },
    { title: "Semi", path: "/semi" },
    { title: "Roadster", path: "/roadster" },
    { title: "Federal Tax Credit", path: "/tax-credit" },
    { title: "We, Robot", path: "/we-robot" },
  ];

  const energyLinks = [
    { 
      title: "Solar Panels", 
      path: "/solar-panels",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png",
      hasLearnOrder: true
    },
    { 
      title: "Solar Roof", 
      path: "/solarroof",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png",
      hasLearnOrder: true
    },
    { 
      title: "Powerwall", 
      path: "/powerwall",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png",
      hasLearnOrder: true
    },
    { 
      title: "Megapack", 
      path: "/megapack",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png",
      hasLearnOrder: true
    }
  ];

  const energyResourceLinks = [
    { title: "Schedule a Consultation", path: "/energy/consultation" },
    { title: "Why Solar", path: "/energy/why-solar" },
    { title: "Incentives", path: "/energy/incentives" },
    { title: "Support", path: "/energy/support" },
    { title: "Partner with Tesla", path: "/energy/partner" },
    { title: "Commercial", path: "/energy/commercial" },
    { title: "Utilities", path: "/energy/utilities" },
  ];

  const chargingLinks = [
    { 
      title: "Charging", 
      path: "/charging",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png",
      hasLearnOrder: true
    },
    { 
      title: "Home Charging", 
      path: "/home-charging",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png",
    },
    { 
      title: "Supercharging", 
      path: "/supercharging",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-APAC.png",
    }
  ];

  const chargingResourceLinks = [
    { title: "Help Me Charge", path: "/help-me-charge" },
    { title: "Charging Calculator", path: "/charging-calculator" },
    { title: "Charging With NACS", path: "/charging-with-nacs" },
    { title: "Supercharger Voting", path: "/supercharger-voting" },
    { title: "Host a Supercharger", path: "/host-supercharger" },
    { title: "Commercial Charging", path: "/commercial-charging" },
    { title: "Host Wall Connectors", path: "/host-wall-connectors" },
  ];

  const discoverSidebarLinks = [
    {
      title: "Resources",
      links: [
        { title: "Demo Drive", path: "/test-drive" },
        { title: "Help Me", path: "/help-me" },
        { title: "Chat with Us", path: "/chat" },
        { title: "About", path: "/about" }
      ]
    }
  ];

  const shopLinks = [
    { 
      title: "Charging", 
      path: "/shop/charging",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png",
    },
    { 
      title: "Vehicle Accessories", 
      path: "/shop/vehicle-accessories",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png",
    },
    { 
      title: "Apparel", 
      path: "/shop/apparel",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png",
    },
    { 
      title: "Lifestyle", 
      path: "/shop/lifestyle",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png",
    }
  ];
  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsModel3LearnMorePage(window.location.pathname.includes("model3/learn-more"));
  }, []);

  // Add effect to handle navigation based on auth status
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (token && currentPath === '/login') {
      navigate('/dashboard');
    } else if (!token && currentPath === '/dashboard') {
      navigate('/login');
    }
  }, [token, navigate]);

  if (isModel3LearnMorePage && isScrolled) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/model3" className="text-white text-xl font-medium">
            Model 3
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/model3/learn-more" className="text-sm font-medium text-white hover:text-gray-300">
              Experience Model 3
            </Link>
            <Link to="/model3/compare" className="text-sm font-medium text-white hover:text-gray-300">
              Compare
            </Link>
            <Link to="/trade-in" className="text-sm font-medium text-white hover:text-gray-300">
              Trade In
            </Link>
            <Link to="/model3" className="text-sm font-medium text-white hover:text-gray-300">
              Order Now
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    );
  }

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-black/20 backdrop-blur-md text-white z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to={token ? "/dashboard" : "/"} className="tracking-widest">
            <svg className="h-3 w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
          <div 
            className="relative py-2 hover:bg-black/5 px-4 rounded-md transition-colors"
            onMouseEnter={() => handleMouseEnter('vehicles')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer">Vehicles</button>
            <NavDropdown 
              isActive={activeDropdown === 'vehicles'} 
              links={vehicleLinks} 
              resourceLinks={vehiclesResourceLinks}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          </div>

          {/* Energy Dropdown */}
          <div 
            className="relative py-2 hover:bg-black/5 px-4 rounded-md transition-colors"
            onMouseEnter={() => handleMouseEnter('energy')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer">Energy</button>
            <NavDropdown 
              isActive={activeDropdown === 'energy'} 
              links={energyLinks} 
              resourceLinks={energyResourceLinks}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          </div>

          {/* Charging Dropdown */}
          <div 
            className="relative py-2 hover:bg-black/5 px-4 rounded-md transition-colors"
            onMouseEnter={() => handleMouseEnter('charging')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer">Charging</button>
            <NavDropdown 
              isActive={activeDropdown === 'charging'} 
              links={chargingLinks} 
              resourceLinks={chargingResourceLinks}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          </div>

          {/* Discover Dropdown */}
          <div 
            className="relative py-2 hover:bg-black/5 px-4 rounded-md transition-colors"
            onMouseEnter={() => handleMouseEnter('discover')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="cursor-pointer">Discover</button>
            <NavDropdown 
              isActive={activeDropdown === 'discover'} 
              links={discoverSidebarLinks.flatMap(category => category.links)}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          </div>

{/* Shop Dropdown */}
<div 
  className="relative py-2 hover:bg-black/5 px-4 rounded-md transition-colors"
  onMouseEnter={() => handleMouseEnter('shop')}
  onMouseLeave={handleMouseLeave}
>
  <button
    className="cursor-pointer"
    onClick={() => navigate('/tesla-shop')}
  >
    Shop
  </button>

  <NavDropdown 
    isActive={activeDropdown === 'shop'} 
    links={shopLinks}
    onMouseEnter={handleDropdownMouseEnter}
    onMouseLeave={handleDropdownMouseLeave}
  />
</div>

        </div>

{/* Right Icons */}
<div className="flex items-center gap-1 lg:gap-3 text-base">
  <button 
    onClick={() => navigate('/help-me')}
    className="p-2 rounded-full hover:bg-black/5 transition-colors"
  >
    <HelpCircle size={20} />
  </button>
  <button 
  onClick={() => navigate('/tesla-chat-bot')}
  className="p-2 rounded-full hover:bg-black/5 transition-colors">
    <Globe size={20} />
  </button>
  {token ? (
    <div className="flex items-center gap-2">
      {/* <button 
        onClick={() => navigate('/dashboard')}
        className="p-2 rounded-full hover:bg-black/5 transition-colors"
        title="Dashboard"
      >
        <LayoutDashboard size={20} />
      </button> */}
      <button 
        onClick={() => navigate('/dashboard')}
        className="p-2 rounded-full hover:bg-black/5 transition-colors"
        title="Profile"
      >
        <User size={20} />
      </button>
      <button 
        onClick={() => {
          logout();
          navigate('/login');
        }}
        className="p-2 rounded-full hover:bg-black/5 transition-colors"
        title="Logout"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      </button>
    </div>
  ) : (
    <button 
      onClick={() => navigate('/login')}
      className="p-2 rounded-full hover:bg-black/5 transition-colors"
      title="Login"
    >
      <User size={20} />
    </button>
  )}
  <button 
    className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
    onClick={toggleMobileMenu}
  >
    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-white p-4 overflow-y-auto md:hidden">
          <div className="flex flex-col space-y-4">
            <Link to="/vehicles" className="py-2 px-4 text-lg border-b">Vehicles</Link>
            <Link to="/energy" className="py-2 px-4 text-lg border-b">Energy</Link>
            <Link to="/charging" className="py-2 px-4 text-lg border-b">Charging</Link>
            <Link to="/discover" className="py-2 px-4 text-lg border-b">Discover</Link>
            <Link to="/shop" className="py-2 px-4 text-lg border-b">Shop</Link>
            {token ? (
              <Link to="/dashboard/profile" className="py-2 px-4 text-lg border-b">
                Profile
              </Link>
            ) : (
              <>
                <Link to="/login" className="py-2 px-4 text-lg border-b">
                  Login
                </Link>
                <Link to="/signup" className="py-2 px-4 text-lg border-b">
                  Sign Up
                </Link>
              </>
            )}
            
            <div className="py-4">
              <h3 className="text-lg font-medium mb-2">Vehicles</h3>
              <div className="grid grid-cols-2 gap-4">
                {vehicleLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className="flex flex-col items-center"
                  >
                    {link.image && (
                      <div className="mb-2">
                        <img 
                          src={link.image} 
                          alt={link.title} 
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <span className="text-center">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
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
    </div>
  );
};

export default Navbar;