import React from 'react';
import SafetyImage from '../../../../../Assets/ModelX/ModelXDesign.png'; // Adjust as per your structure

const SafetySection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
        {/* Left: Text content */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-8 order-2 lg:order-none">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Safety</h2>
          <h2 className="text-5xl font-semibold mb-4">Built for Safety</h2>
          <p className="text-sm text-gray-700 mb-8">
          Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <a href="#" className="block text-center border border-black py-2 px-4 hover:bg-black hover:text-white transition">
            Order Now
          </a>
          <a href="#" className="block text-center border border-gray-300 text-gray-700 py-2 px-4 hover:bg-gray-100 transition">
            Find My Route
          </a>
        </div>
      </div>

      <div className="relative flex-1 order-1 lg:order-none">
        <img
          src={SafetyImage}
          alt="Tesla Model X on scenic road"
          className="w-full h-full object-cover"
        />

        </div>
    </section>
  );
};

export default SafetySection;
