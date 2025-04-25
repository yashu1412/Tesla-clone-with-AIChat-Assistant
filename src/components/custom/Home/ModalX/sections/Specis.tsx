import React, { useState, useRef, useEffect } from "react";
const Specis = () => {
    const [selectedTab, setSelectedTab] = useState('plaid')
    const dimensionImages = {
      plaid: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Specs-Plaid-Desktop-Imperial.png',
      standard: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Specs-AWD-Desktop-Imperial.png'
    }
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-medium mb-10">Model X Specs</h1>
                {/* Range Tabs */}
                <div className="flex border-b border-gray-700 mb-12">
          <button 
            className={`pb-2 px-2 ${selectedTab === 'plaid' ? 'border-b-2 border-white' : 'text-gray-400'} mr-8`}
            onClick={() => setSelectedTab('plaid')}
          >
            Model X Plaid
          </button>
          <button 
            className={`pb-2 px-2 ${selectedTab === 'standard' ? 'border-b-2 border-white' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('standard')}
          >
            Model X 
          </button>
        </div>

        {/* Drive Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Drive</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Range (EPA est.)</p>
              <p>{selectedTab === 'plaid' ? '314 mi' : '351 mi'}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Acceleration¹</p>
              <p>{selectedTab === 'plaid' ? '2.5 ± 0–60 mph' : '3.8s 0-60 mph'}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Top Speed</p>
              <p>{selectedTab === 'plaid' ? '163 mph' : '155 mph'}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">1/4 Mile</p>
              <p>{selectedTab === 'plaid' ? '9.9 s' : '11.5 s'}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Powertrain</p>
              <p>{selectedTab === 'plaid' ? 'T1 Motor' : 'Dual Motor'}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Peak Power</p>
              <p>{selectedTab === 'plaid' ? '1,020 hp' : '670 hp'}</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Drag Coefficient</p>
              <p>0.24 cd</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Towing</p>
              <p>5,000 lbs</p>
            </div>
          </div>
        </div>

        {/* Dimensions Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Dimensions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Weight (Curb Mass)</p>
              <p>5,248 lbs</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Cargo</p>
              <p>92 cu ft</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Wheels</p>
              <p>20" or 22"</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Seating</p>
              <p>Up to 6</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Length</p>
              <p>199.1 in</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Width</p>
              <p>98.4 in</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Height</p>
              <p>66.1 in</p>
            </div>
          </div>
                    {/* Image Section */}
                    <div className="mt-8 flex justify-end">
            <img
              src={dimensionImages[selectedTab]}
              alt="Tesla Model X Dimensions"
              className="w-full max-w-xl"
            />
          </div>
        </div>

        {/* Charging Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Charging</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Supercharging Max</p>
              <p>250 kW</p>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Warranty</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Basic Vehicle</p>
              <p>4 years or 50,000 miles, whichever comes first</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Battery & Drive Unit</p>
              <p>8 years or 150,000 miles, whichever comes first</p>
              <button className="text-sm underline mt-2">See Details</button>
            </div>
          </div>
        </div>

        {/* Other Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Other</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <button className="text-sm underline">Owner's Manual</button>
            </div>
            
            <div>
              <button className="text-sm underline">Compare Models</button>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="text-xs text-gray-400 mt-12 border-t border-gray-800 pt-8">
          <p><sup>1</sup> With related subtracted</p>
          <p className="mt-4">
            Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation
            and voice commands. Access to features that use cellular data and third-party licenses are subject to
            change. Learn more about Standard Connectivity and any limitations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Specis;