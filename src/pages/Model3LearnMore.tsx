
import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Model3Image } from "../Assets/placeholder";

const Model3LearnMore = () => {
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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">Model 3</h1>
              <p className="mt-4 text-white text-xl max-w-2xl mx-auto">
                The Tesla Model 3 combines performance, safety, and technology into a revolutionary electric sedan.
              </p>
            </div>
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
        
        {/* Details Section */}
        <div className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Advanced Technology</h2>
                <p className="text-gray-700 mb-6">
                  Model 3 comes standard with advanced hardware capable of providing Enhanced Autopilot and Full Self-Driving capabilities—designed to provide more active safety features and convenient driving assistance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15-inch center touchscreen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Over-the-air software updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Autopilot capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-200 aspect-video relative">
                  <img 
                    src={Model3Image} 
                    alt="Tesla Model 3 Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 px-6 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Experience Model 3 Today</h2>
            <p className="text-xl mb-10">
              Schedule a test drive or order online with delivery directly to your home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/model3" className="bg-white text-black px-8 py-3 rounded text-lg font-medium hover:bg-gray-200">
                Order Now
              </a>
              <a href="/test-drive" className="border border-white text-white px-8 py-3 rounded text-lg font-medium hover:bg-white/10">
                Schedule Test Drive
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Model3LearnMore;
