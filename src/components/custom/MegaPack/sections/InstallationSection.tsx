import type React from 'react';
import Section from './Section';

const InstallationSection: React.FC = () => {
  return (
    <Section id="installation" className="bg-black text-white py-32 min-h-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium text-center mb-4">
          Install Solar Panels, Power a Sustainable Home
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-20 text-neutral-400">
          Generate, use, store and charge—all with one fully integrated clean energy ecosystem by Tesla.
          All of our products work together seamlessly, optimizing your energy usage and savings while
          minimizing your impact on the environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <div className="relative overflow-hidden rounded-md group">
            <img
              src="https://ext.same-assets.com/1368744740/3966478772.jpeg"
              alt="Solar Panels with invisible grid"
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative overflow-hidden rounded-md group">
            <img
              src="https://ext.same-assets.com/1368744740/1754010214.jpeg"
              alt="Side view of the solar panel"
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Sleek and Durable</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Tesla uses solar panels that offer a sleek and modern take on traditional panels.
            With our proprietary mounting hardware, panels can be installed close to your roof
            without the need for rails, so they blend in with your roofline. Durable and weatherproof,
            they can power your home for decades to come.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default InstallationSection;
