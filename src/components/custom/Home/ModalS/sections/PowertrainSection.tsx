import React, { useState } from 'react';

const PowertrainSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'models' | 'plaid'>('models');

  return (
    <section className="py-24 bg-[#f5f5f5] ">
      <div className="tesla-container w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">Electric Powertrain</h2>
        <p className="text-center text-gray-700 max-w-6xl mx-auto mb-16">
          Model X platforms unite powertrain and battery technologies for an unrivaled combination of performance,
          range and efficiency. New module and pack thermal architecture allows for faster charging and gives you
          more power and endurance in all conditions.
        </p>

{/* Top image */}
<div className="flex justify-center mb-16 transition-all duration-500">
  <img
    src={
      activeTab === 'models'
        ? 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop'
        : 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop'
    }
    alt={activeTab === 'models' ? 'Model S Powertrain' : 'Model S Plaid Powertrain'}
    className="w-full max-w-7xl rounded-xl shadow-lg"
  />
</div>


        {/* Tabs layout like image */}
        <div className="max-w-7xl mx-auto bg-[#f5f5f5] border-t border-gray-300 pt-6">
          <div className="flex justify-between text-sm md:text-base">
            {/* Model X */}
            <div
              onClick={() => setActiveTab('models')}
              className={`flex-1 px-4 cursor-pointer ${
                activeTab === 'models' ? 'text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <div
                className={`border-b-2 ${
                  activeTab === 'models' ? 'border-black' : 'border-transparent'
                } pb-3`}
              >
                <h3 className="text-xl md:text-lg mb-1">Model S</h3>
                <p className="mb-3 text-base md:text-base">
                Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.
                </p>
                <div className="flex justify-between text-center text-xs md:text-sm text-gray-700">
                  <div>
                    <p className="text-lg font-bold">3.1 s</p>
                    <p>0-60 mph</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">410 mi</p>
                    <p>Range (EPA est.)</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">670 hp</p>
                    <p>Peak Power</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Model X Plaid */}
            <div
              onClick={() => setActiveTab('plaid')}
              className={`flex-1 px-4 cursor-pointer ${
                activeTab === 'plaid' ? 'text-black font-semibold' : 'text-gray-400'
              }`}
            >
              <div
                className={`border-b-2 ${
                  activeTab === 'plaid' ? 'border-black' : 'border-transparent'
                } pb-3`}
              >
                <h3 className="text-xl md:text-lg mb-1">Model S Plaid</h3>
                <p className="mb-3 text-base md:text-base">
                Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.
                </p>
                <div className="flex justify-between text-center text-xs md:text-sm text-gray-700">
                  <div>
                    <p className="text-lg font-bold">1.99 s</p>
                    <p>0-60 mph</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">348 mi</p>
                    <p>Range (EPA est.)</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">1,020 hp</p>
                    <p>Peak Power</p>
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
