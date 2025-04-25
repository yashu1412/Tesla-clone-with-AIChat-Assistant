import React from 'react';

const CapabilitySection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      {/* Left - Image with stats */}
      <div className="relative flex-1 order-1 lg:order-none">
      <video
  src="https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-auto object-cover rounded-lg"
/>


        {/* Stats Overlay */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-10 backdrop-blur-sm px-6 py-4 rounded-xl text-center text-sm text-white">
          <div>
            <p className="text-xl font-semibold">410 mi</p>
            <p>Go anywhere with up to 410 miles<br />of estimated range</p>
          </div>
          <div>
            <p className="text-xl font-semibold">15 min</p>
            <p>Recharge up to 171 miles in 15 minutes<br />with Supercharger technology</p>
          </div>
          <div>
            <p className="text-xl font-semibold">60,000+</p>
            <p>Superchargers placed<br />along popular routes</p>
          </div>
        </div>
      </div>

      {/* Right - Text */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-8 order-2 lg:order-none">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Range</h2>
          <h2 className="text-2xl font-semibold mb-4">Go Anywhere</h2>
          <p className="text-sm text-gray-700 mb-8">
          With up to 410 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.
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
    </section>
  );
};

export default CapabilitySection;
