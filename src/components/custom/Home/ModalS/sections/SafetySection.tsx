import React from 'react';
import { useNavigate } from 'react-router-dom';
import SafetyImage from '../../../../../Assets/ModelS/ModelS.png';

const SafetySection: React.FC = () => {
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
      {/* Left: Text content */}
      <div className="bg-white w-full lg:w-[420px] flex flex-col justify-between p-4 sm:p-6 md:p-8 order-2 lg:order-none">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Safety</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 sm:mb-4">Built for Safety</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8">
            Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla's latest active safety features, such as Automatic Emergency Braking, at no extra cost.
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

      <div className="relative flex-1 order-1 lg:order-none">
        <img
          src={SafetyImage}
          alt="Tesla Model S Safety Features"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SafetySection;
