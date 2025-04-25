import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <Section id="cta" className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/powering-on-desktop"
        alt="Solar Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Install Solar Panels
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-10">
          Design your solar system or schedule a virtual consultation with a Tesla Advisor to learn more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button>Order Now</Button>
          <Button variant="outline">Schedule a Consultation</Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
