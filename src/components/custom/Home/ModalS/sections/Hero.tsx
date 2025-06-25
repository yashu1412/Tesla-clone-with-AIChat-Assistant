import type React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
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

  const handleDemoDrive = () => {
    navigate('/test-drive');
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-gray-100 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-NA.png"
          alt="Tesla Model S"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Subtitle */}
      <div className="relative z-10 flex flex-col items-center pt-12 sm:pt-16 md:pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-medium mb-1 text-tesla-black">Model S</h1>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-tesla-black mb-2">Free Supercharging Included</p>
      </div>

      {/* Bottom Stats & Buttons */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full mt-auto mb-4 gap-3 sm:gap-4 md:gap-6">
        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 md:gap-16 px-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-tesla-black">348 mi</span>
            <span className="text-sm sm:text-base md:text-xl text-tesla-black">Range (EPA est.)</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">1.99 s</span>
            <span className="text-xl text-tesla-black">0-60 mph¹</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">200 mph</span>
            <span className="text-xl text-tesla-black">Top Speed²</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">1,020 hp</span>
            <span className="text-xl text-tesla-black">Peak Power</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-3 md:gap-4 px-4">
          <button
            onClick={handleOrderNow}
            className="bg-blue-600 text-white px-6 md:px-10 py-2 md:py-3 rounded-md text-lg md:text-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Order Now
          </button>
          <button
            onClick={handleDemoDrive}
            className="bg-white text-black px-6 md:px-10 py-2 md:py-3 rounded-md text-lg md:text-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Demo Drive
          </button>
        </div>

        {/* Specs Note */}
        <p className="text-sm font-normal text-tesla-black opacity-70">
          Specs displayed are Model S Plaid values.
        </p>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
