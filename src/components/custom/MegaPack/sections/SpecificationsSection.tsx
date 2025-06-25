import type React from 'react';
import Section from './Section';

const applications = [
  {
    title: 'Renewable Smoothing',
    description:
      'Balance the flow of renewables to the grid by storing and discharging energy',
  },
  {
    title: 'Demand Support',
    description:
      'Discharge energy during peak demand to support distribution infrastructure',
  },
  {
    title: 'Infrastructure Investment',
    description:
      'Postpone costly grid infrastructure upgrades by storing power at a single location',
  },
  {
    title: 'Voltage & Frequency Regulation',
    description:
      'Stabilize voltage levels by absorbing reactive power and adjusting output',
  },
  {
    title: 'Market Participation',
    description:
      'Provide energy support to the grid in response to system operator alerts',
  },
  {
    title: 'Microgrid',
    description:
      'Build a localized grid that can disconnect from the main power grid',
  },
];

const SpecificationsSection: React.FC = () => {
  return (
    <Section id="applications" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Left side image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Megapack_Apps_D" // Update path if necessary
            alt="Megapack"
            width={700}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Applications</h2>
          <p className="text-gray-300 mb-10 text-base sm:text-lg">
            Megapack is designed for <span className="underline">utilities</span> and <span className="underline">large-scale commercial projects</span>. Our team of experts will help you design a system that meets your project goals and maximizes your site potential.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            {applications.map((app, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-1">{app.title}</h4>
                <p className="text-gray-400 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SpecificationsSection;
