import type React from 'react';
import { useNavigate } from 'react-router-dom';
const ExteriorSection: React.FC = () => {
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
    <section className="relative bg-black text-white py-20">
      <div className="tesla-container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
          Designed for Efficiency
        </h2>

        {/* Hero Image with Description
        <div className="flex flex-col items-center text-center px-4 mb-16">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-X-Exterior-Hero-Desktop-Global" // Replace with the first image path
            alt="Tesla Model X Side Profile"
            className="w-full h-auto object-cover rounded-lg mb-6"
          />
        </div> */}
{/* Heading */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
  <div>
    <p className="text-sm text-white opacity-70">Exterior</p>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mt-1">Designed for Efficiency</h2>
  </div>
  <div className="flex gap-3 mt-6 md:mt-0">
    <button
                onClick={handleOrderNow}
                className="bg-white text-black text-sm font-semibold px-6 py-2 rounded-sm">Order Now</button>
    <button 
                onClick={() => navigate('/test-drive')}
                className="bg-[#222] text-white text-sm font-semibold px-6 py-2 rounded-sm">Demo Drive</button>
  </div>
</div>

{/* Hero description */}
<p className="text-sm text-white opacity-70 max-w-3xl mb-10">
  Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet.
  Refined aerodynamic elements work together with new wheels and tires to help you travel farther,
  with sharper handling and better ride comfort.
</p>


        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">Relentless Performance</h3>
            <p className="text-base text-gray-300">
            Staggered, performance wheels and tires keep the vehicle planted and help transfer maximum power down to the road.
            </p>
          </div>
          {/* Right Image */}
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global"
            alt="Performance Wheels"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Left Image */}
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global"
            alt="Rear Styling"
            className="w-full h-auto object-cover rounded-lg"
          />
          {/* Right Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">Optimized Aerodynamics</h3>
            <p className="text-base text-gray-300">
            Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.
            </p>
          </div>
                    {/* Left Text */}
                    <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">Refined Styling</h3>
            <p className="text-base text-gray-300">
            An iconic silhouette meets refreshed, elegant proportions.
            </p>
          </div>
          {/* Right Image */}
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global"
            alt="Performance Wheels"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ExteriorSection;
