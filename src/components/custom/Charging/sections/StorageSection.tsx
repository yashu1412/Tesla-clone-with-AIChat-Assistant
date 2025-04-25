import React from 'react';

const PowerwallSection: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-start justify-start px-6 lg:px-20 pt-20"
      style={{
        backgroundImage: `url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Freedom-To-Go-Anywhere-Desktop.jpg')`, // Replace with your actual image path or import
      }}
    >
      <div className="max-w-xl text-black">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Freedom to Go Anywhere
        </h2>
        <p className="text-base md:text-lg text-gray-800 mb-6">
          Recharge with the world's largest fast-charging network. Our Supercharger
          network is expansive, ultra-fast and reliable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border border-black text-black px-8 py-2 hover:bg-black hover:text-white transition font-medium">
            Find Us
          </button>
          <button className="bg-gray-100 text-black px-8 py-2 hover:bg-gray-200 transition font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PowerwallSection;
