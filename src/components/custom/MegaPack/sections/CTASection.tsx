import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <Section id="cta" className="bg-black text-white py-32 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Build a Cleaner Grid
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mb-8">
          Contact us for more information.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            variant="outline"
            className="w-56 border-white text-white hover:bg-white hover:text-black"
          >
            Order Now
          </Button>
          <Button className="w-56 bg-neutral-800 text-white hover:bg-neutral-700">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
