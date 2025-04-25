import type React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <Section id="hero" className="relative text-black overflow-hidden h-screen">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Megapack_Hero_D.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Subtle white overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-brightness-95" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-4 pb-16 sm:pb-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-1">Megapack</h1>
          <p className="text-sm sm:text-base md:text-lg mb-10">Massive Energy Storage</p>

          {/* Info Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 font-medium text-center">
            <div>
              <div className="text-lg sm:text-xl font-semibold">10+ GWh</div>
              <div className="text-gray-800">Deployed</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-semibold">∞</div>
              <div className="text-gray-800">Infinitely Scalable</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-semibold">3.9 MWh</div>
              <div className="text-gray-800">Per Unit</div>
            </div>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
