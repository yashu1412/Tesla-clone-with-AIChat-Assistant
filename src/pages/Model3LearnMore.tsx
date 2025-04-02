
import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// We'll need to add these video URLs - replace with actual Tesla videos
const video1 = "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD-Animation.mp4";
const video2 = "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-3-Interior-Hero-Desktop-LHD.mp4";

const Model3LearnMore = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section with Videos */}
        <div className="relative h-screen">
          {/* Video Container */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {/* First Video */}
            <video className="w-full h-1/2 object-cover" autoPlay loop muted playsInline>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Second Video */}
            <video className="w-full h-1/2 object-cover" autoPlay loop muted playsInline>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlay with Shadows */}
          <div className="absolute inset-0 flex flex-col justify-between bg-black/30">
            {/* Top Shadow */}
            <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-b from-black/90 to-transparent"></div>

            {/* Content - Title and Info */}
            <div className="text-center text-white mt-28 z-10">
              <h1 className="text-5xl font-bold drop-shadow-lg">Built for Distance</h1>
              <p className="text-lg font-medium mt-2 drop-shadow-md">
                Go up to 363 miles (EPA est.) on a single charge with updated exterior styling optimized for maximum aerodynamics.
              </p>
            </div>

            {/* Bottom Shadow */}
            <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
        
        {/* New Colors Section */}
        <div className="py-16 px-6 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-3">Two New Colors</h2>
            <p className="text-lg">
              Stealth Grey and Ultra Red are designed to change with the light and viewing angle.
            </p>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Model 3?</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="M20 10c0 4.4-3.6 8-8 8s-8-3.6-8-8"/><path d="M12 22v-4"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">High Performance</h3>
                <p className="text-gray-600">
                  Accelerate from 0-60 mph in as little as 3.1 seconds with Performance Model 3.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M2 6c0 2.8.7 5.5 2 8"/><path d="M22 6c0 2.8-.7 5.5-2 8"/><path d="M12 2v10l4 2"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Long Range</h3>
                <p className="text-gray-600">
                  Go up to 358 miles on a single charge, perfect for long trips and daily commutes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-gray-600">
                  Built with a high-strength aluminum and steel structure for maximum safety.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specs Section */}
        <div className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Model 3 Specs</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Acceleration</span>
                    <span className="font-medium">3.1s 0-60 mph</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Top Speed</span>
                    <span className="font-medium">162 mph</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Range</span>
                    <span className="font-medium">315 miles</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Drive</span>
                    <span className="font-medium">Dual Motor AWD</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Long Range AWD</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Acceleration</span>
                    <span className="font-medium">4.2s 0-60 mph</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Top Speed</span>
                    <span className="font-medium">145 mph</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Range</span>
                    <span className="font-medium">358 miles</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Drive</span>
                    <span className="font-medium">Dual Motor AWD</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Rear-Wheel Drive</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Acceleration</span>
                    <span className="font-medium">5.8s 0-60 mph</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Top Speed</span>
                    <span className="font-medium">140 mph</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Range</span>
                    <span className="font-medium">272 miles</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Drive</span>
                    <span className="font-medium">Single Motor RWD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interior Section */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Designed for Efficiency</h2>
                <p className="text-gray-700 mb-6">
                  Model 3 is built from the ground up as an electric vehicle—with ultra high-strength steel and a low, solid center of gravity.
                </p>
                <p className="text-gray-700 mb-6">
                  Every Model 3 includes Tesla's latest active safety features, such as Automatic Emergency Braking, at no extra cost.
                </p>
                <div className="mt-8">
                  <Link to="/model3">
                    <Button className="bg-black text-white hover:bg-gray-800">Order Now</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b5a7-47f2-0160-b547a09ac301/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
                  alt="Tesla Model 3 Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Autopilot Section */}
        <div className="py-20 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/79cb3d16-8495-4952-8966-c4fe967d3630/bvlatuR/std/2880x1800/Model-3-Autopilot-Hero-Desktop-LHD"
                  alt="Tesla Autopilot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Autopilot</h2>
                <p className="mb-6">
                  Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Navigate on Autopilot</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Auto Lane Change</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Autopark</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Summon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 px-6 bg-gray-50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Experience Model 3 Today</h2>
            <p className="text-xl mb-10">
              Schedule a test drive or order online with delivery directly to your home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/model3">
                <Button className="bg-black text-white hover:bg-gray-800 min-w-[200px]">
                  Order Now
                </Button>
              </Link>
              <Link to="/test-drive">
                <Button variant="outline" className="border-black text-black hover:bg-black/5 min-w-[200px]">
                  Schedule Test Drive
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Model3LearnMore;
