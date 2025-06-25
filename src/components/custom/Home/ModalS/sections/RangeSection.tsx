import { useNavigate } from 'react-router-dom';
import type React from 'react';

const RangeSection: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order-now', {
      state: {
        productDetails: {
          id: 'models-2024',
          name: 'Tesla Model S',
          price: 74990 // Base price for Model S
        }
      }
    });
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left - Image with stats */}
      <div className="relative flex-1 order-1 lg:order-none">
        <video
          src="https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Stats Overlay */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-center text-xs sm:text-sm text-white">
          <div>
            <p className="text-lg sm:text-xl font-semibold">410 mi</p>
            <p>Go anywhere with up to 410 miles<br />of estimated range</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">15 min</p>
            <p>Recharge up to 171 miles in 15 minutes<br />with Supercharger technology</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">60,000+</p>
            <p>Superchargers placed<br />along popular routes</p>
          </div>
        </div>
      </div>

      {/* Right - Text */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-4 sm:p-6 md:p-8 order-2 lg:order-none">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Range</h2>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Go Anywhere</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8">
            With up to 410 miles of estimated range and access to the world's largest and most powerful fast charging network, you'll spend less time plugged in and more time on the road.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <button 
            onClick={handleOrderNow}
            className="block w-full text-center border-2 border-black py-2 px-4 text-sm sm:text-base hover:bg-black hover:text-white transition"
          >
            Order Now
          </button>
          <button 
            onClick={() => navigate('/models/demo-drive')}
            className="block w-full text-center border-2 border-gray-300 text-gray-700 py-2 px-4 text-sm sm:text-base hover:bg-gray-100 transition"
          >
            Demo Drive
          </button>
        </div>
      </div>
    </section>
  );
};

export default RangeSection;
