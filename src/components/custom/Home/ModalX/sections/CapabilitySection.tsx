import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CapabilitySection: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order-now', {
      state: {
        productDetails: {
          id: 'modelx-2024',
          name: 'Tesla Model X',
          price: 79990
        }
      }
    });
  };

  return (
    <section className="flex flex-col lg:flex-row h-screen">
      {/* Left Column - Text */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Even More Capable</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8">
            With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility.
            Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a
            trailer hitch comes standard, so you can bring your gear with you wherever you go.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button 
            onClick={handleOrderNow}
            className="block text-center border w-full border-black py-2 px-4 hover:bg-black hover:text-white transition"
          >
            Order Now
          </button>
          <Link 
            to="/test-drive"
            className="block text-center border border-gray-300 text-gray-700 py-2 px-4 hover:bg-gray-100 transition"
          >
            Demo Drive
          </Link>
        </div>
      </div>

      {/* Right Image with stats overlayed at bottom center */}
      <div className="relative flex-1">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Utility-Desktop.png"
          alt="Model X with Falcon Wing Doors"
          className="w-full h-full object-cover"
        />

        {/* Stats Overlay */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 sm:gap-10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-center text-xs sm:text-sm text-white">
          <div>
            <p className="text-base sm:text-xl font-semibold">92 ft³</p>
            <p>Up to 92 ft³ of storage</p>
          </div>
          <div>
            <p className="text-xl font-semibold">5,000 lbs</p>
            <p>Tow up to 5,000 lbs</p>
          </div>
          <div>
            <p className="text-xl font-semibold">🦅</p>
            <p>Falcon Wing Doors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;
