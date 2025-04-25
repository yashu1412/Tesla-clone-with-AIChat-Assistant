import React, { useState } from 'react';
import { cn } from '@/lib/utils'; // If you’re not using a utility function, replace `cn()` with template literals or `clsx`

const SpecificationsSection: React.FC = () => {
  const productSpecs = {
    'Powerwall 3': {
      power: {
        energyCapacity: { value: '13.5 kWh', superscript: 1 },
        onGridPower: '11.5 kW continuous',
        backupPower: [
          '11.5 kW continuous',
          '18.5 kVA motor start',
          'Seamless backup transition'
        ],
      },
      features: {
        sizeAndWeight: ['H × W × D', '43.5" × 24" × 7.6"', '287 lbs'],
        scalable: 'System expansion available anytime',
        installation: [
          'Integrated inverter and system controller',
          '-4°F to 122°F',
          'Flood and dust resistance²'
        ],
        certification: ['Meets North American safety and EMI standards']
      },
      warranty: {
        duration: '10 years'
      }
    },
    'Powerwall+': {
      power: {
        energyCapacity: { value: '13.5 kWh', superscript: 1 },
        onGridPower: '7.6 kW / 5 kW continuous',
        backupPower: [
          '9.6 kW / 7 kW continuous',
          '22kW / 10kW peak',
          '118A LRA motor start',
          'Seamless backup transition'
        ],
        inverter: [
          'Solar-to-grid efficiency 97.5%',
          '4 solar inputs with Maximum Power Point Trackers'
        ]
      },
      features: {
        sizeAndWeight: ['H × W × D', '62.8" × 29.7" × 6.3"', '343.9 lbs'],
        scalable: 'Up to 4 units',
        installation: [
          'Integrated inverter and system controller',
          '-4°F to 122°F',
          'Water and dust resistance'
        ],
        certification: ['Meets North American safety and EMI standards']
      },
      warranty: {
        duration: '10 years'
      }
    },
    'Powerwall 2': {
      power: {
        energyCapacity: { value: '13.5 kWh', superscript: 1 },
        onGridPower: '5 kW continuous',
        backupPower: [
          '7 kW peak',
          '10RA LRA motor start',
          'Seamless backup transition'
        ]
      },
      features: {
        sizeAndWeight: ['H × W × D', '45.3" × 29.6" × 5.75"', '251.3 lbs'],
        scalable: 'Up to 10 units',
        installation: [
          'Floor or wall mounted',
          'Indoor or outdoor',
          '-4°F to 122°F',
          'Water and dust resistance'
        ],
        certification: ['Meets North American safety and EMI standards']
      },
      warranty: {
        duration: '10 years'
      }
    }
  };

  const [activeProduct, setActiveProduct] = useState('Powerwall+');
  const products = Object.keys(productSpecs);
  const specs = productSpecs[activeProduct];

  return (
    <section id="specs" className="bg-black text-white py-20 min-h-screen w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
          Powerwall Specs
        </h2>

        {/* Product Tabs */}
        <div className="flex justify-center mb-12">
          <div className="border-b border-gray-700 flex space-x-8">
            {products.map((product) => (
              <button
                key={product}
                className={cn(
                  'pb-2 px-2 transition-all',
                  activeProduct === product
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-gray-200'
                )}
                onClick={() => setActiveProduct(product)}
              >
                {product}
              </button>
            ))}
          </div>
        </div>

        {/* Power Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8">Power</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-gray-400 text-sm">Energy Capacity</div>
              <div className="font-medium">
                {specs.power.energyCapacity.value}
                {specs.power.energyCapacity.superscript && (
                  <sup>{specs.power.energyCapacity.superscript}</sup>
                )}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">On-Grid Power</div>
              <div className="font-medium">{specs.power.onGridPower}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Backup Power</div>
              {specs.power.backupPower.map((item, index) => (
                <div key={index} className="font-medium">{item}</div>
              ))}
            </div>
            {specs.power.inverter && (
              <div>
                <div className="text-gray-400 text-sm">Inverter</div>
                {specs.power.inverter.map((item, index) => (
                  <div key={index} className="font-medium">{item}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 my-12"></div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-gray-400 text-sm">Size and Weight</div>
              {specs.features.sizeAndWeight.map((item, index) => (
                <div key={index} className="font-medium">{item}</div>
              ))}
            </div>
            <div>
              <div className="text-gray-400 text-sm">Scalable</div>
              <div className="font-medium">{specs.features.scalable}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Installation</div>
              {specs.features.installation.map((item, index) => (
                <div key={index} className="font-medium">{item}</div>
              ))}
            </div>
            <div>
              <div className="text-gray-400 text-sm">Certification</div>
              {specs.features.certification.map((item, index) => (
                <div key={index} className="font-medium">{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-12"></div>

        {/* Warranty */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8">Warranty</h3>
          <div>
            <div className="text-gray-400 text-sm">Duration</div>
            <div className="font-medium">{specs.warranty.duration}</div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-12"></div>

        {/* Other Info */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-8">Other</h3>
          <div>
            <a href="#" className="text-white underline hover:text-gray-200">
              Owner's Manual
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p><sup>1</sup> See <a href="#" className="underline">Powerwall Technical Specifications</a> for more details.</p>
            <p><sup>2</sup> Flood resistant up to 2'</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
