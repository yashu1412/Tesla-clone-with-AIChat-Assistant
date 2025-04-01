
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProductSection from "../components/products/ProductSection";

// Using placeholder images for now
import {
  Model3Image,
  ModelYImage,
  CyberTruckImage,
  ModelXImage,
  ModelSImage,
  SolarPanelImage,
  SolarRoofImage,
  PowerWallImage,
  AccessoriesImage,
  TeslaVideo,
  CyberTruckLogo
} from "../Assets/placeholder";

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('.snap-center');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          // We could add animations or state changes here
          console.log(`Visible section: ${index}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="scroll-smooth overflow-x-hidden"
    >
      <Navbar />

      <div className="w-full snap-y snap-mandatory">
        {/* Model 3 Section */}
        <ProductSection
          title="Model 3"
          subtitle="Lease starting at $329/mo*"
          backgroundImage={Model3Image}
          primaryButtonText="Order Now"
          secondaryButtonText="Demo Drive"
          primaryButtonLink="/model3"
          secondaryButtonLink="/model3/learn-more"
          isFirst={true}
        />

        {/* Model Y Section */}
        <ProductSection
          title="Model Y"
          subtitle="Lease starting at $399/mo*"
          backgroundImage={ModelYImage}
          backgroundVideo={TeslaVideo}
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/modely"
          secondaryButtonLink="/modely"
        />

        {/* Cybertruck Section */}
        <ProductSection
          title="Cybertruck"
          backgroundImage={CyberTruckImage}
          logoImage={CyberTruckLogo}
          buttonType="dark"
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/cybertruck"
          secondaryButtonLink="/cybertruck"
        />

        {/* Model S Section */}
        <ProductSection
          title="Model S"
          subtitle="From $71,090*"
          backgroundImage={ModelSImage}
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/models"
          secondaryButtonLink="/models"
        />

        {/* Model X Section */}
        <ProductSection
          title="Model X"
          subtitle="From $68,590*"
          backgroundImage={ModelXImage}
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/modelx"
          secondaryButtonLink="/modelx"
        />

        {/* Solar Panels Section */}
        <ProductSection
          title="Solar Panels"
          subtitle="Lowest Cost Solar Panels in America"
          backgroundImage={SolarPanelImage}
          buttonType="dark"
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/solar-panels"
          secondaryButtonLink="/solar-panels"
        />

        {/* Solar Roof Section */}
        <ProductSection
          title="Solar Roof"
          subtitle="Produce Clean Energy From Your Roof"
          backgroundImage={SolarRoofImage}
          buttonType="dark"
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/solar-roof"
          secondaryButtonLink="/solar-roof"
        />

        {/* Powerwall Section */}
        <ProductSection
          title="Powerwall"
          backgroundImage={PowerWallImage}
          buttonType="dark"
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
          primaryButtonLink="/powerwall"
          secondaryButtonLink="/powerwall"
        />

        {/* Accessories Section */}
        <ProductSection
          title="Accessories"
          backgroundImage={AccessoriesImage}
          buttonType="dark"
          primaryButtonText="Shop Now"
          secondaryButtonText={undefined}
          primaryButtonLink="/shop"
          secondaryButtonLink="/"
        />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
