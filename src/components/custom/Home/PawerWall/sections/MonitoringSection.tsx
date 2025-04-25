import type React from 'react';
import Section from '../layout/Section';

const MonitoringSection: React.FC = () => {
  return (
    <Section id="monitoring" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-1 gap-20 items-center">
        {/* Image Section */}
        <div className="flex justify-center relative">
          {/* Phone 1 */}
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/max-efficiency-lower-cost-desktop" // Replace with correct path
            alt="Tesla Powerwall Settings"
            className="w-full rounded-xl shadow-xl z-20"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Maximum Efficiency, Lower Cost
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-4">
            Powerwall can power your entire home with one unit, making whole-home backup protection
            more affordable. Each unit is self-contained with an integrated solar inverter for added efficiency,
            resulting in fewer parts and faster installation. This helps make multi-unit systems more affordable
            and system expansions easier in the future.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default MonitoringSection;
