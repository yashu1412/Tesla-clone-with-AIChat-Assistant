import React from 'react';
import SafetyImage from '../../../../../Assets/ModelX/ModelXDesign.png';
import { Link, useNavigate } from 'react-router-dom';

const SafetySection: React.FC = () => {
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
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left: Text content */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-4 sm:p-6 md:p-8 order-2 lg:order-none">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">Safety</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">Built for Safety</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla's latest active safety features, such as Automatic Emergency Braking, at no extra cost.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <button 
            onClick={handleOrderNow}
            className="block text-center w-full border-2 border-black py-2 px-3 sm:px-4 text-sm sm:text-base hover:bg-black hover:text-white transition duration-300"
          >
            Order Now
          </button>
          <Link 
            to="/test-drive"
            className="block text-center w-full border-2 border-gray-300 text-gray-700 py-2 px-3 sm:px-4 text-sm sm:text-base hover:bg-gray-100 transition duration-300"
          >
            Demo Drive
          </Link>
        </div>
      </div>

      <div className="relative flex-1 order-1 lg:order-none min-h-[50vh] lg:min-h-screen">
        <img
          src={SafetyImage}
          alt="Tesla Model X on scenic road"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SafetySection;
