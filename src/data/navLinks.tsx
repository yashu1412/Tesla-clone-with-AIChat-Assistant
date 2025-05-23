export interface NavLink {
    title: string;
    path: string;
    image?: string;
    hasLearnOrder?: boolean;
  }
  
  export interface NavCategory {
    title: string;
    links: NavLink[];
  }
  
  export const vehicleLinks: NavLink[] = [
    { 
      title: "Model S", 
      path: "/model-s",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
      hasLearnOrder: true
    },
    { 
      title: "Model 3", 
      path: "/model-3",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-LHD.png",
      hasLearnOrder: true
    },
    { 
      title: "New Model Y", 
      path: "/model-y",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
      hasLearnOrder: true
    },
    { 
      title: "Model X", 
      path: "/model-x",
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
  
  export const vehiclesResourceLinks: NavLink[] = [
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
  
  export const energyLinks: NavLink[] = [
    { 
      title: "Solar Panels", 
      path: "/solar-panels",
      image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png",
      hasLearnOrder: true
    },
    { 
      title: "Solar Roof", 
      path: "/solar-roof",
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
  
  export const energyResourceLinks: NavLink[] = [
    { title: "Schedule a Consultation", path: "/energy/consultation" },
    { title: "Why Solar", path: "/energy/why-solar" },
    { title: "Incentives", path: "/energy/incentives" },
    { title: "Support", path: "/energy/support" },
    { title: "Partner with Tesla", path: "/energy/partner" },
    { title: "Commercial", path: "/energy/commercial" },
    { title: "Utilities", path: "/energy/utilities" },
  ];
  
  export const chargingLinks: NavLink[] = [
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
  
  export const chargingResourceLinks: NavLink[] = [
    { title: "Help Me Charge", path: "/help-me-charge" },
    { title: "Charging Calculator", path: "/charging-calculator" },
    { title: "Charging With NACS", path: "/charging-with-nacs" },
    { title: "Supercharger Voting", path: "/supercharger-voting" },
    { title: "Host a Supercharger", path: "/host-supercharger" },
    { title: "Commercial Charging", path: "/commercial-charging" },
    { title: "Host Wall Connectors", path: "/host-wall-connectors" },
  ];
  
  export const discoverSidebarLinks: NavCategory[] = [
    {
      title: "Resources",
      links: [
        { title: "Demo Drive", path: "/demo-drive" },
        { title: "Insurance", path: "/insurance" },
        { title: "Military Purchase Program", path: "/military-program" },
        { title: "Video Guides", path: "/video-guides" },
        { title: "Customer Stories", path: "/customer-stories" },
        { title: "Events", path: "/events" },
      ]
    },
    {
      title: "Location Services",
      links: [
        { title: "Find Us", path: "/find-us" },
        { title: "Find a Collision Center", path: "/collision-center" },
        { title: "Find a Certified Installer", path: "/certified-installer" },
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About", path: "/about" },
        { title: "Careers", path: "/careers" },
        { title: "Investor Relations", path: "/investor-relations" },
      ]
    }
  ];
  
  export const shopLinks: NavLink[] = [
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
  
  export const navMenus = {
    vehicles: {
      title: "Vehicles",
      links: vehicleLinks,
      resourceLinks: vehiclesResourceLinks
    },
    energy: {
      title: "Energy",
      links: energyLinks,
      resourceLinks: energyResourceLinks
    },
    charging: {
      title: "Charging",
      links: chargingLinks,
      resourceLinks: chargingResourceLinks
    },
    discover: {
      title: "Discover",
      links: discoverSidebarLinks.flatMap(category => category.links),
      categories: discoverSidebarLinks
    },
    shop: {
      title: "Shop",
      links: shopLinks
    }
  };
  