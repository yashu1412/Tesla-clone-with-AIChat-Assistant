import type React from 'react';
import {Link ,  useNavigate} from 'react-router-dom';
const AutopilotSection: React.FC = () => {
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
    <section className="relative py-24 bg-white text-black overflow-hidden">
      <div className="tesla-container max-w-[1900px]">
        {/* Top: Two-column layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          {/* Left Column: Heading and Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:max-w-md ml-4 sm:ml-8 md:ml-16 lg:ml-24">
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700">Autopilot</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">Future of Driving</h2>
            </div>
    <div className="flex gap-3 sm:gap-4">
    <button 
            onClick={handleOrderNow}
            className="bg-gray-700 border-2 border-gray-200 text-white px-8 py-2 rounded-md text-base font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            Order Now
          </button>
          <Link to="/test-drive">
                  <button className="w-full border-2 border-black bg-white text-black px-8 py-2 rounded-md text-base font-semibold hover:bg-gray-100 transition-all duration-300">
                    Demo Drive
                  </button>
                </Link>
    </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:max-w-2xl text-base sm:text-lg md:text-xl text-gray-700">
            <p>
              Autopilot enables your vehicle to steer, accelerate and brake automatically within its lane under
              your active supervision, assisting with the most burdensome parts of driving. With over-the-air
              software updates, the latest enhancements are available instantly.
              <br />
              <a href="#" className="underline font-medium text-black">
                Chat with a Tesla Advisor
              </a>{' '}
              to learn more about Model X or{' '}
              <a href="#" className="underline font-medium text-black">
                schedule a demo drive
              </a>{' '}
              today.
            </p>
          </div>
        </div>

        {/* Features Title */}
        <div className="mb-8 sm:mb-10 ml-4 sm:ml-8 md:ml-16 lg:ml-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Features</h3>
          <p className="text-gray-800 font-medium text-base sm:text-lg md:text-xl max-w-2xl">
            Full Self-Driving (Supervised) introduces additional features and improves existing functionality
            to make your vehicle more capable over time, including:
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutopilotSection;
