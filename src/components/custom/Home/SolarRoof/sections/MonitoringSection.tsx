import React from 'react';

const OptimizeSection: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col lg:flex-row h-screen">
      {/* Left - Text Content */}
      <div className="w-full lg:w-[420px] flex flex-col justify-between p-8">
        <div>
          <p className="text-sm text-gray-400 mb-1">Control</p>
          <h2 className="text-3xl font-semibold mb-4 leading-tight">
            Monitor and Optimize
          </h2>
          <p className="text-sm text-gray-400 mb-8">
            With the Tesla app, you can monitor your energy production in real time.
            Control your system from anywhere with instant alerts and remote access.
          </p>
        </div>

        {/* Button */}
        <div>
          <a
            href="#"
            className="block text-center border border-white py-2 px-4 hover:bg-white hover:text-black transition"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Right - Image of Mobile UI */}
      <div className="flex-1 relative">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-roof-monitor-optimize-desktop"
          alt="Tesla energy monitoring mobile app UI"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default OptimizeSection;
