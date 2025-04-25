import React from 'react';

const PowerwallSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      {/* Left Column - Text */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-8">
        <div>
          <p className="text-sm text-gray-700 mb-1">Energy Storage</p>
          <h2 className="text-3xl font-semibold mb-4 leading-tight">
            Protection Against <br /> Outages
          </h2>
          <p className="text-sm text-gray-700 mb-8">
            Powerwall is a compact home battery that is bundled with Solar Roof,
            providing you with 24/7 energy security. It stores the energy you produce
            with Solar Roof so you can power your home anytime—at night or during an outage.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <a
            href="#"
            className="block text-center border border-black py-2 px-4 hover:bg-black hover:text-white transition"
          >
            Order Now
          </a>
          <a
            href="#"
            className="block text-center bg-gray-100 text-gray-700 py-2 px-4 hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Solar-Roof-Protection-Against-Outages-Desktop-new.jpg" // Replace this with the actual image path if hosted
          alt="Powerwall on house exterior"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default PowerwallSection;
