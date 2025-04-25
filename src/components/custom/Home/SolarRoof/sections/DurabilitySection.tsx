import React from 'react';

const DurabilitySection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row h-screen">
      {/* Left Column - Video */}
      <div className="flex-1">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://www.tesla.com/sites/default/files/solarroof/v3/durability/SR-Durability-Desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Column - Text */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-8">
        <div>
          <p className="text-lg font-medium text-gray-700 mb-1">Durability</p>
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            Take on the Elements
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-8">
            Solar Roof is comprised of both glass solar tiles and steel roofing tiles.
            Glass solar tiles produce energy, while architectural-grade steel tiles add
            longevity and corrosion resistance to your roof. Both are durable, strong and
            engineered for all-weather protection. With a 25-year warranty, Solar Roof will
            continue to produce clean energy and protect your home for decades to come.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <a
            href="#"
            className="block text-center border-4 border-black py-2 px-10 text-2xl font-medium rounded hover:bg-black hover:text-white transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DurabilitySection;
