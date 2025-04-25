import type React from 'react';
import Section from '../layout/Section';

const HeroSection: React.FC = () => {
  return (
    <Section
      id="hero"
      className="relative text-white overflow-hidden h-screen"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Charging-Hero-Desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-2">Charging</h1>
        <p className="text-lg md:text-xl text-white/80">Go Anywhere, Charge Everywhere</p>
      </div>
    </Section>
  );
};

export default HeroSection;
