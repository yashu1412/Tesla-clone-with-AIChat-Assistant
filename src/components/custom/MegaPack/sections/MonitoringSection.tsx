import type React from 'react';
import Section from '../layout/Section';
import FeatureCard from '../ui/FeatureCard';

const MonitoringSection: React.FC = () => {
  return (
    <Section id="monitoring" className="bg-black text-white py-32 min-h-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium mb-8">
              Grid Goes Down, Lights Stay On
            </h2>
            <p className="text-neutral-400 mb-12 text-lg leading-relaxed">
              Solar panels generate energy from sunlight for you to use in your home.
              When paired with a Powerwall home battery, you can store your excess energy
              for use whenever you want. As severe weather becomes more common and the grid
              less reliable, Powerwall can keep your lights on when outages occur.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 opacity-10 blur-lg rounded-lg" />
            <img
              src="https://ext.same-assets.com/1368744740/2601238470.jpeg"
              alt="Tesla app for energy products"
              className="w-full rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-4">
            24/7 Monitoring, Maximum Control
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-neutral-400 leading-relaxed">
            When you install solar with Powerwall, the Tesla app gives you control over
            all the products in your Tesla ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl">
            <FeatureCard
              title="Customize Preferences"
              description="Decide if you want to optimize your generated energy for savings, backup protection—or both."
            />
            <FeatureCard
              title="Monitor Energy Flow"
              description="See how much energy your system is generating, how it's being used and how much it's helping you save."
            />
            <FeatureCard
              title="Get Urgent Alerts"
              description="Receive updates on your system status and get alerts about grid outages or severe weather."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MonitoringSection;
