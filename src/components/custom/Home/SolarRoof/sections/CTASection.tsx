import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <Section id="cta" className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png"
        alt="Solar Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Transform Your Roof
        </h2>
        <div className="flex flex-col gap-2">
          <Button variant="outline">Order Now</Button>
          <Button>Schedule a Virtual Consultation</Button>
          <a href="#" className="text-sm underline text-white hover:text-gray-300">
            Get Updates
          </a>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
