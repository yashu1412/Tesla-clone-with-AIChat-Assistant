import type React from 'react';

const PerformanceSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-70 z-0">
        <img
          src="https://ext.same-assets.com/792673779/3860008161.jpeg"
          alt="Model X Performance"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="tesla-container relative z-10 flex flex-col items-start max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">Beyond Ludicrous</h2>
        <p className="text-lg mb-10 max-w-2xl">
          With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built.
          Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-10">
          <div className="flex flex-col">
            <span className="text-3xl font-medium mb-1">1,020 hp</span>
            <span className="text-sm text-gray-400">Peak Power</span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-medium mb-1">9.9 s</span>
            <span className="text-sm text-gray-400">1/4 Mile</span>
          </div>

          <div className="flex flex-col">
            <span className="text-3xl font-medium mb-1">2.5 s</span>
            <span className="text-sm text-gray-400">0-60 mph¹</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#" className="tesla-button-white">
            Order Now
          </a>
          <a href="#" className="tesla-button-outline border-white text-white hover:bg-white hover:text-tesla-black">
            Demo Drive
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
