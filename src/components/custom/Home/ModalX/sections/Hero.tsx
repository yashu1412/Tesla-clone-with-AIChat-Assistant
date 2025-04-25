import type React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-gray-100 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ext.same-assets.com/792673779/1210015277.jpeg"
          alt="White Model X"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container (title + subtitle) */}
      <div className="relative z-10 flex flex-col items-center pt-24">
        <h1 className="text-5xl md:text-7xl font-medium mb-1 text-tesla-black">Model X</h1>
        <p className="text-xl font-semibold text-tesla-black mb-2">Free Supercharging Included</p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full mt-auto mb-4 gap-6">
        {/* Stats Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">314 mi</span>
            <span className="text-xl text-tesla-black">Range (EPA est.)</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">2.5 s</span>
            <span className="text-xl text-tesla-black">0-60 mph¹</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">9.9 s</span>
            <span className="text-xl text-tesla-black">1/4 Mile</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-medium text-tesla-black">1,020 hp</span>
            <span className="text-xl text-tesla-black">Peak Power</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/modelx/order-now">
            <button className="bg-blue-600 text-white px-10 py-3 rounded-md text-xl font-bold hover:bg-blue-700">
              Order Now
            </button>
          </Link>
          <Link to="/modelx">
            <button className="bg-white text-black px-10 py-3 rounded-md text-xl font-bold hover:bg-gray-100">
              Demo Drive
            </button>
          </Link>
        </div>

        {/* Specs note */}
        <p className="text-sm font-normal text-tesla-black opacity-70">
          Specs displayed are Model X Plaid values.
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
