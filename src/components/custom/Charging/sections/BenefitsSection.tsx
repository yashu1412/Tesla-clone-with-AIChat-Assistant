import type React from 'react';
import Section from '../layout/Section';
import FeatureCard from '../ui/FeatureCard';

const BenefitsSection: React.FC = () => {
  return (
    <Section id="benefits" className="bg-black text-white py-20 min-h-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium text-center mb-12">
          Save On Electricity Bills
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-neutral-400">
          Generate your own clean energy from the sun for free with solar. Add Powerwall to store your energy for use anytime you need it.
          Tax incentives and flexible financing options may be available to help you get the best price for your solar system.
          By installing solar panels, you can also reduce your reliance on traditional energy sources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Sustainable Energy"
            description="Power your home with emissions-free, renewable energy directly from the sun."
          />
          <FeatureCard
            title="Tax Incentives"
            description="You may qualify for federal, state and local tax incentives that can help cut your installation costs."
          />
          <FeatureCard
            title="Monthly Bill Savings"
            description="Generating solar energy is free—using it to power your home can help protect you from rising energy costs."
          />
        </div>
      </div>
    </Section>
  );
};

export default BenefitsSection;
