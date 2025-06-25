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
      {/* Left - Image with stats */}
      <div className="relative flex-1 order-1 lg:order-none">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Range_Desktop-LHD.jpg"
          alt="Tesla Model X on scenic road"
          className="w-full h-full object-cover"
        />

        {/* Stats Overlay */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 sm:gap-10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-center text-xs sm:text-sm text-white">
          <div>
            <p className="text-base sm:text-xl font-semibold">329 mi</p>
            <p>Go anywhere with up to 329 miles<br />of estimated range</p>
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Range</h2>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Go Anywhere</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8">
            With up to 329 miles of estimated range and access to the world's largest and most powerful
            fast charging network, you'll spend less time plugged in and more time on the road.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button 
            onClick={handleOrderNow}
            className="block w-full text-center border border-black py-2 px-4 hover:bg-black hover:text-white transition"
          >
            Order Now
          </button>
          <Link 
            to="https://www.tesla.com/trips"
            className="block text-center border border-gray-300 text-gray-700 py-2 px-4 hover:bg-gray-100 transition"
          >
            Find My Route
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;
