import React from 'react';
import { useNavigate } from 'react-router-dom'
const EfficiencySection: React.FC = () => {
    const navigate = useNavigate();
  
    const handleOrderNow = () => {
      navigate('/order-now', {
        state: {
          productDetails: {
            id: 'solar-roof-2024',
            name: 'Tesla Solar Roof',
            price: 15000 // Base price for solar roof
          }
        }
      });
    };
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Text */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-8">
        <div>
          <p className="text-sm text-gray-700 mb-1">Efficiency</p>
          <h2 className="text-3xl font-semibold mb-4 leading-tight">
            Maximum Solar <br /> Production
          </h2>
          <p className="text-sm text-gray-700 mb-8">
            Generate the most energy possible, even on roofs with complicated angles and
            intermittent sunlight. Glass solar tiles and architectural-grade steel tiles,
            vent covers and ridge caps come together to form a roof that is both durable
            and powerful. Combine your Solar Roof with Powerwall—a home battery featuring
            an integrated solar inverter for increased efficiency and dependable energy
            storage 24/7.
          </p>
        </div>

        {/* Button */}
        <div>
          <a
            href="#"
            className="block text-center border border-black py-2 px-4 hover:bg-black hover:text-white transition"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/maximum-solar-production-desktop"
          alt="Garage with Tesla and Powerwall"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default EfficiencySection;
