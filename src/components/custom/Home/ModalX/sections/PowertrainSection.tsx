import React, { useState } from 'react';

const PowertrainSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'modelx' | 'plaid'>('modelx');

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f5f5f5]">
      <div className="tesla-container w-full max-w-[1600px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-3 sm:mb-4">Electric Powertrain</h2>
        <p className="text-center text-gray-700 text-sm sm:text-base  max-w-4xl lg:max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          Model X platforms unite powertrain and battery technologies for an unrivaled combination of performance,
          range and efficiency. New module and pack thermal architecture allows for faster charging and gives you
          more power and endurance in all conditions.
        </p>

        {/* Top image */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 transition-all duration-500">
          <img
            src={
              activeTab === 'modelx'
                ? 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-X-Performance-Dual-Motor-Desktop-Powertrain-Carousel'
                : 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-X-Performance-Tri-Motor-Powertrain-Carousel-Desktop'
            }
            alt={activeTab === 'modelx' ? 'Model X Powertrain' : 'Model X Plaid Powertrain'}
            className="w-full max-w-5xl rounded-xl shadow-lg"
          />
        </div>

        {/* Tabs layout */}
        <div className="max-w-7xl mx-auto bg-[#f5f5f5] border-t border-gray-300 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between text-xs sm:text-sm md:text-base gap-6 md:gap-4">
            {/* Model X */}
            <div
              onClick={() => setActiveTab('modelx')}
              className={`flex-1 px-3 sm:px-4 cursor-pointer ${
                activeTab === 'modelx' ? 'text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <div
                className={`border-b-2 ${
                  activeTab === 'modelx' ? 'border-black' : 'border-transparent'
                } pb-3`}
              >
                <h3 className="text-sm sm:text-base md:text-lg mb-1">Model X</h3>
                <p className="mb-3 text-xs sm:text-sm md:text-base">
                  Dual Motor All-Wheel Drive platform has the longest range, and now delivers insane power and
                  acceleration.
                </p>
                <div className="flex justify-between text-center text-xs md:text-sm text-gray-700">
                  <div>
                    <p className="text-base sm:text-lg font-bold">3.8 s</p>
                    <p className="text-xs sm:text-sm">0-60 mph</p>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold">329 mi</p>
                    <p className="text-xs sm:text-sm">Range (EPA est.)</p>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold">670 hp</p>
                    <p className="text-xs sm:text-sm">Peak Power</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Model X Plaid */}
            <div
              onClick={() => setActiveTab('plaid')}
              className={`flex-1 px-3 sm:px-4 cursor-pointer ${
                activeTab === 'plaid' ? 'text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <div
                className={`border-b-2 ${
                  activeTab === 'plaid' ? 'border-black' : 'border-transparent'
                } pb-3`}
              >
                <h3 className="text-sm sm:text-base md:text-lg mb-1">Model X Plaid</h3>
                <p className="mb-3 text-xs sm:text-sm md:text-base">
                  Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each
                  with a carbon-sleeved rotor that maintains 1,000+ horsepower all the way to top speed.
                </p>
                <div className="flex justify-between text-center text-xs md:text-sm text-gray-700">
                  <div>
                    <p className="text-base sm:text-lg font-bold">2.5 s</p>
                    <p className="text-xs sm:text-sm">0-60 mph</p>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold">314 mi</p>
                    <p className="text-xs sm:text-sm">Range (EPA est.)</p>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold">1,020 hp</p>
                    <p className="text-xs sm:text-sm">Peak Power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowertrainSection;
