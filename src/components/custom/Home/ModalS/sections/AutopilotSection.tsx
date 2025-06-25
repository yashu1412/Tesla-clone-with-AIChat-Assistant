import type React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AutopilotSection: React.FC = () => {
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
    <section className="relative py-12 sm:py-16 md:py-24 bg-white text-black overflow-hidden">
      <div className="tesla-container max-w-[1900px] px-4">
        {/* Top: Two-column layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-24">
          {/* Left Column: Heading and Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:max-w-md ml-4 sm:ml-8 md:ml-24">
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700">Autopilot</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">Future of Driving</h2>
            </div>
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-4">
              <button
                onClick={handleOrderNow}
                className="border-2 border-black text-black px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-black hover:text-white transition"
              >
                Order Now
              </button>
              
              <button
                onClick={() => navigate('/models/demo-drive')}
                className="bg-gray-100 text-black px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-gray-200 transition border-2"
              >
                Demo Drive
              </button>
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:max-w-2xl text-base sm:text-lg md:text-xl text-gray-700">
            <p>
              Autopilot enables your vehicle to steer, accelerate and brake automatically within its lane under
              your active supervision, assisting with the most burdensome parts of driving. With over-the-air
              software updates, the latest enhancements are available instantly.
              <br />
              <Link to="/chat" className="underline font-medium text-black">
                Chat with a Tesla Advisor
              </Link>{' '}
              to learn more about Model S or{' '}
              <Link to="/models/demo-drive" className="underline font-medium text-black">
                schedule a demo drive
              </Link>{' '}
              today.
            </p>
          </div>
        </div>

        {/* Features Title */}
        <div className="mb-6 sm:mb-8 md:mb-10 ml-4 sm:ml-8 md:ml-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Features</h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium max-w-2xl">
            Full Self-Driving (Supervised) introduces additional features and improves existing functionality
            to make your vehicle more capable over time, including:
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutopilotSection;
