import React from 'react';

const EnergySection = () => {
  return (
    <section className="bg-white w-full px-6 py-16 flex flex-col gap-20 items-center">
      {/* Top Section: Text Left, Button, and Headline */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-black mb-4">Skip the Gas Station</h2>
          <p className="text-gray-600 mb-6">
            Reduce your cost per mile and never pay for gas again. Charging with electricity
            typically costs less than paying for gas at your local station.
          </p>
          <button className="border border-black px-6 py-2 rounded text-black font-medium hover:bg-black hover:text-white transition">
            Calculate Savings
          </button>
        </div>
      </div>

      {/* Bottom Section: Image Left, Text Right */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex-1">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Battery-Desktop.jpg" // <-- replace with actual image path or import
            alt="Battery pack"
            className="rounded-md w-full h-auto shadow-md"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-black mb-4">
            No Required Battery Maintenance
          </h2>
          <p className="text-gray-600">
            Our batteries don’t require any regular maintenance and are designed to outlast your
            vehicle. Just in case, every new Tesla vehicle purchase includes an eight-year battery
            warranty<sup>1</sup>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnergySection;
