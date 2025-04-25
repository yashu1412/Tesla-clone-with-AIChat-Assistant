import type React from 'react';

const AutopilotSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-white text-black overflow-hidden">
      <div className="tesla-container max-w-[1900px]">
        {/* Top: Two-column layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          {/* Left Column: Heading and Buttons */}
          <div className="flex flex-col gap-6 lg:max-w-md ml-24">
            <div>
              <p className="text-2xl text-gray-700">Autopilot</p>
              <h2 className="text-5xl md:text-5xl font-medium">Future of Driving</h2>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="border-2 border-black text-black px-12 py-3 rounded-md font-medium hover:bg-black hover:text-white transition"
              >
                Order Now
              </a>
              <a
                href="#"
                className="bg-gray-100 text-black px-12 py-3 rounded-md font-medium hover:bg-gray-200 transition border-2"
              >
                Demo Drive
              </a>
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="lg:max-w-2xl text-xl text-gray-700">
            <p>
              Autopilot enables your vehicle to steer, accelerate and brake automatically within its lane under
              your active supervision, assisting with the most burdensome parts of driving. With over-the-air
              software updates, the latest enhancements are available instantly.
              <br />
              <a href="#" className="underline font-medium text-black">
                Chat with a Tesla Advisor
              </a>{' '}
              to learn more about Model S or{' '}
              <a href="#" className="underline font-medium text-black">
                schedule a demo drive
              </a>{' '}
              today.
            </p>
          </div>
        </div>

        {/* Features Title */}
        <div className="mb-10 ml-24">
          <h3 className="text-4xl font-semibold mb-2">Features</h3>
          <p className="text-gray-800 font-medium  text-xl max-w-2xl">
            Full Self-Driving (Supervised) introduces additional features and improves existing functionality
            to make your vehicle more capable over time, including:
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutopilotSection;
