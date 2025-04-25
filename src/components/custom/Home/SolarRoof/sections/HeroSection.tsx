import type React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <Section id="hero" className="relative text-white overflow-hidden h-screen">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Solar-Roof-Hero-Desktop-new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col h-full justify-between pt-32 pb-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6">Solar Roof</h1>
        </div>

        {/* Features Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm md:text-base translate-y-72">
          <div className="flex flex-col text-3xl font-medium items-center">
            <span>🌞</span>
            <span>Beautiful</span>
            <span>Solar</span>
          </div>
          <div className="flex flex-col items-center text-3xl font-medium">
            <span>🏠</span>
            <span>25-Year</span>
            <span>Tile Warranty</span>
          </div>
          <div className="flex flex-col items-center text-3xl font-medium">
            <span>🛡️</span>
            <span>24/7</span>
            <span>Outage Protection</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Button variant="outline" className="min-w-[240px] text-white border-white">
            Order Now
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
