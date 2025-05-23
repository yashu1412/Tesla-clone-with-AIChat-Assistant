import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/common/Navbar';

const About: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Default to Electric Vehicles
  
    const featureData = [
      {
        title: 'Solar',
        description: 'Produce solar energy for residential and commercial needs',
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/About-Power-Earth-Solar-Desktop.jpg',
      },
      {
        title: 'Batteries',
        description: 'Install batteries to store clean energy',
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/About-Power-Earth-Electric-Batteries-Desktop.jpg',
      },
      {
        title: 'Electric Vehicles',
        description:
          'Make badass, zero-emission vehicles that can charge with clean energy',
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/About-Power-Earth-Electric-Vehicles-Desktop.jpg', // Update with image similar to the one in your screenshot
      },
    ];
  
    const activeFeature = featureData[activeIndex];
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/About-Us-Hero-Desktop-Global.mp4"
        >
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-medium mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-8"
          >
            Accelerating the World's Transition to Sustainable Energy
          </motion.p>
        </div>
        
        {/* Stats Section */}
        <div className="absolute bottom-20 w-full">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h3 className="text-4xl font-medium mb-2">100k+</h3>
                <p className="text-sm text-gray-400">Employees</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-medium mb-2">One Mission</h3>
                <p className="text-sm text-gray-400">Global Impact</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-medium mb-2">20.4 Mmt</h3>
                <p className="text-sm text-gray-400">CO₂e Avoided in 2023</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Future Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-4">The Future is Sustainable</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're building a world powered by solar energy, running on batteries and transported by electric 
            vehicles. Explore the most recent impact of our products, people and supply chain.
          </p>
          <Button variant="outline" className="border-2 border-black px-8 py-2">
            Explore Impact
          </Button>
        </div>
      </section>

      {/* Solar Farm Image Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/About-Us-Power-Hero-Desktop-Global"
            alt="Tesla Solar Farm"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </section>

      {/* Power Earth Section */}
      <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Power Earth</h2>
          <p className="text-gray-400">
            We design sustainable systems that are massively scalable—resulting in the greatest environmental benefit
            possible. Our energy generation and storage products work together with our electric vehicles to amplify
            their impact. Our master plans share our vision for a sustainable future and what we are doing about it.{' '}
            <a
              href="https://www.tesla.com/blog/master-plan-part-3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Read Tesla’s Master Plans
            </a>
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg mb-10">
          <img
            src={activeFeature.image}
            alt={activeFeature.title}
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          {featureData.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border-t-2 pt-4 transition-colors duration-300 ${
                activeIndex === index
                  ? 'border-white text-white'
                  : 'border-gray-600 text-gray-400'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Video and text section */}
    <section className="relative  py-20 bg-black text-white">
      <div className="container mx-auto ">
        <div className=" items-center">
          {/* Video Container */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-20">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/About-Us-Fun-Desktop-Global.mp4"
            >
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="max-w-xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold mb-4"
            >
              Make it (Ridiculously) Fun
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400"
            >
              Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun 
              you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from 
              gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce 
              features at the push of a button.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
                {/* Machine That Builds the Machine Section */}
                <section className="relative py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Title Column */}
              <div className="md:w-1/3">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-medium"
                >
                  The Machine That Builds the Machine
                </motion.h2>
              </div>

              {/* Description Column */}
              <div className="md:w-2/3">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400"
                >
                  To shift humanity away from fossil fuels, we need extreme scale. Headquartered in Texas, we operate 
                  six huge, vertically integrated factories across three continents. With over 100,000 employees, our 
                  teams design, build, sell and service our products in-house.
                </motion.p>
              </div>
            </div>

            {/* Image Container */}
            <div className="mt-12 relative w-full h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1253,w_2233,c_fit,f_auto,q_auto:best/About-Us-Machine-Desktop-Global"
                alt="Tesla Factory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </section>

                {/* The Tesla Team Section */}
                <section className="relative py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Title Column */}
              <div className="md:w-1/3">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-medium"
                >
                  The Tesla Team
                </motion.h2>
              </div>

              {/* Description Column */}
              <div className="md:w-2/3">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400"
                >
                  Using a first-principles approach, we solve some of the world's biggest problems. If you've done 
                  exceptional work, join us in tackling the next generation of engineering, manufacturing and operational 
                  challenges.
                </motion.p>
              </div>
            </div>

            {/* Image Container */}
            <div className="mt-12 relative w-full h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1254,w_2235,c_fit,f_auto,q_auto:best/About-Us-Exceptional-Desktop-Global"
                alt="Tesla Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </section>
      {/* Join Us Section */}
      <section className="relative py-40 min-h-screen bg-black text-white flex flex-col justify-between">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/About-Us-Join-Desktop-Global.mp4"
        >
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 text-center relative z-10 flex-grow flex flex-col items-center justify-center">
          <h2 className="text-3xl font-medium mb-8">Join Us</h2>
          <Button variant="outline" className="border-2 border-white hover:bg-white text-black px-8 py-2 transition-colors">
            See Jobs
          </Button>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-4 text-center relative z-10 mt-auto pb-16">
          <div className="max-w-3xl mx-auto text-sm text-gray-400">
            <p className="mb-4">*20.4 million metric tons is equivalent to over 45 billion miles of driving</p>
            <p className="mb-4">Tesla participates in the E-Verify Program</p>
            <p className="mb-4">
              Tesla is an Equal Opportunity employer. All qualified applicants will receive consideration for employment 
              without regard to race, color, religion, sex, sexual orientation, age, national origin, or disability status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;