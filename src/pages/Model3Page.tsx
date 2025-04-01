
import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Model3Image } from "../Assets/placeholder";

const Model3Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src={Model3Image}
            alt="Tesla Model 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-between py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">Model 3</h1>
              <p className="mt-2 text-white text-lg">The Car of the Future</p>
            </div>
            
            <div className="w-full max-w-5xl px-6">
              <div className="grid grid-cols-3 gap-10 text-white text-center">
                <div>
                  <h3 className="text-3xl font-bold">3.1s</h3>
                  <p className="text-sm">0-60 mph</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">358mi</h3>
                  <p className="text-sm">Range (EPA est.)</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">AWD</h3>
                  <p className="text-sm">Dual Motor</p>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center gap-4">
                <button className="bg-[#393c41] text-white px-10 py-2 rounded text-sm font-medium">
                  Order Now
                </button>
                <button className="bg-white text-black px-10 py-2 rounded text-sm font-medium">
                  Demo Drive
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interior Section */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">Designed for Efficiency</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                {/* Placeholder for interior image */}
                <div className="h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Interior Image</span>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Built Around the Driver</h3>
                <p className="text-gray-700 mb-6">
                  The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.
                </p>
                <button className="bg-[#393c41] text-white px-6 py-2 rounded text-sm font-medium self-start">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specs Section */}
        <div className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">Model 3 Specifications</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Acceleration</span>
                    <span className="font-medium">3.1s 0-60 mph</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Top Speed</span>
                    <span className="font-medium">162 mph</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Range</span>
                    <span className="font-medium">358 miles (EPA est.)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Drive</span>
                    <span className="font-medium">Dual Motor AWD</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Dimensions</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium">4,048 lbs</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Cargo</span>
                    <span className="font-medium">23 cu ft</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Wheels</span>
                    <span className="font-medium">18" or 19"</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Seating</span>
                    <span className="font-medium">5 Adults</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Autopilot</span>
                    <span className="font-medium">Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Supercharging</span>
                    <span className="font-medium">Pay Per Use</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Warranty</span>
                    <span className="font-medium">4 Years / 50,000 mi</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Display</span>
                    <span className="font-medium">15" Center Touchscreen</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button className="bg-[#393c41] text-white px-10 py-2 rounded text-sm font-medium">
                Order Your Model 3
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Model3Page;
