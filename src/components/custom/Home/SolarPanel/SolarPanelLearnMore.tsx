import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import Navbar from '../../../common/Navbar';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import MonitoringSection from './sections/MonitoringSection';
import SpecificationsSection from './sections/SpecificationsSection';
import CTASection from './sections/CTASection';

function SolarPanel() {
        const [activeIndex, setActiveIndex] = useState(0);
        const [isPlaying, setIsPlaying] = useState(true);
        const [progress, setProgress] = useState(0);
        const [isMuted, setIsMuted] = useState(true);
        const videoRef = useRef(null);
    const videoData = [
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/power-home-carousel-slide-01-desktop.mp4",
          title: "Cinematic Experience",
          description: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more."
        },
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/power-home-carousel-slide-02-desktop.mp4",
          title: "Yoke Steering",
          description: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip."
        },
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/power-home-carousel-slide-03-desktop.mp4",
          title: "Store Any Extra",
          description: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment."
        },
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/power-home-carousel-slide-04-desktop.mp4",
          title: "Charge Your EV",
          description: "Charge your electric vehicle with clean energy at home using Mobile Connector or Wall Connector."
        },
      ];
      const videoFeatureData = [
        {
          title: 'Simple Aesthetic',
          description:
            'Panels and skirts are all black, creating a uniform, monochromatic look.',
          image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-panels-carousel-01-desktop",
        },
        {
          title: 'Weather Resistant',
          description:
            'Installation points are sealed to protect against rain, snow and ice.',
          image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-panels-carousel-02-desktop",
        },
        {
          title: 'Easy Installation',
          description:
            'Proprietary hardware and streamlined installation help to minimize impact to your roof.',
          image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-panels-carousel-03-desktop",
        },
        {
          title: 'Low Profile',
          description:
            'Rail-free mounting keeps panels close to your roof and panel skirts hide hardware and edges from view.',
          image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-panels-carousel-04-desktop",
        },
      ];
          const togglePlay = () => {
            if (videoRef.current.paused) {
              videoRef.current.play();
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          };
        
          const toggleMute = () => {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
          };
        
          const toggleFullscreen = () => {
            videoRef.current.requestFullscreen?.();
          };
        
          const handleTimeUpdate = () => {
            const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(percent);
          };
        
          useEffect(() => {
            videoRef.current.load();
            videoRef.current.play();
            setIsPlaying(true);
          }, [activeIndex]);
        
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        {/* Text and image section */}
        <div>
            {/* Text */}
            <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Save On Electricity Bills</h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Generate your own clean energy from the sun for free with solar. Add Powerwall to store your energy for use
          anytime you need it.{' '}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Tax incentives
          </a>{' '}
          and flexible financing options may be available to help you get the best price for your solar system. By
          installing solar panels, you can also reduce your reliance on traditional energy sources.
        </p>
      </div>
            {/* Image */}
                <div>
                    <img
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop"
                        alt="Solar Panel"
                        className="w-full h-full object-cover"
                    />
                </div>
        </div>
        {/* 3 Features */}
        <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl md:text-3xl font-semibold mb-2">Sustainable Energy</h3>
          <p className="text-gray-300 md:text-lg text-base">
            Power your home with emissions-free, renewable energy directly from the sun.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl md:text-3xl font-semibold mb-2">Tax Incentives</h3>
          <p className="text-gray-300 md:text-lg text-base">
            You may qualify for <span className="underline">federal, state and local tax incentives</span> that can help cut your installation costs.
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl md:text-3xl font-semibold mb-2">Monthly Bill Savings</h3>
          <p className="text-gray-300 md:text-lg text-base">
            Generating solar energy is <span className="font-semibold">free</span>—using it to power your home can help protect you from rising energy costs.
          </p>
        </div>
      </div>
    </section>
    {/* Hero Video section */} 
<div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
  {/* Video Container */}
  <div className="relative w-[100%] h-[100%] mx-auto overflow-hidden rounded-xl shadow-lg">

    {/* Text Over Video */}
    <div className="absolute z-20 top-10 left-1/2 transform -translate-x-1/2 text-center px-4">
      <h1 className="text-white text-4xl font-bold">Install Solar Panels, Power a Sustainable Home</h1>
      <p className="text-gray-300 text-sm mt-2">Generate, use, store and charge—all with one fully integrated clean energy ecosystem by Tesla. All of our products work together seamlessly, optimizing your energy usage and savings while minimizing your impact on the environment.</p>
    </div>

    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted={isMuted}
      playsInline
      onTimeUpdate={handleTimeUpdate}
    >
      <source src={videoData[activeIndex].src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

    
  </div>

  {/* Pagination Dots */}
  <div className="flex space-x-2 mt-4">
    {videoData.map((_, index) => (
      <div
        key={index}
        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
          activeIndex === index ? "bg-white scale-110" : "bg-gray-400"
        }`}
        onClick={() => setActiveIndex(index)}
      ></div>
    ))}
  </div>

  {/* Text Content */}
  <div className="text-center text-white mt-6 max-w-xl">
    <h2 className="text-2xl font-bold">{videoData[activeIndex].title}</h2>
    <p className="text-sm mt-2 text-gray-300">{videoData[activeIndex].description}</p>
  </div>
</div>
<div className="bg-black text-white py-12 px-4 md:px-16">
  {/* Image and Text Container */}
  <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start gap-10">
    
    {/* Image */}
    <div className="w-full md:w-full">
      <img
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/sleek-durable-desktop" // replace with actual image path
        alt="Solar Panels on Roof"
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="w-full ">
      <h2 className="text-3xl md:text-2xl font-semibold mb-4">Sleek and Durable</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Tesla uses solar panels that offer a sleek and modern take on traditional panels. With our proprietary 
        mounting hardware, panels can be installed close to your roof without the need for rails, so they blend 
        in with your roofline. Durable and weatherproof, they can power your home for decades to come.
      </p>
    </div>
  </div>
</div>
{/* Features */}
<div>
  {/* Feature Image section */}
  <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white py-16">
    
    {/* Image Container */}
    <div className="relative w-[75%] h-[60vh] mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={videoFeatureData[activeIndex].image} 
        alt={videoFeatureData[activeIndex].title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>

    {/* Feature Text Content */}
    <div className="mt-10 w-full max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoFeatureData.map((feature, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-4 border-t-2 cursor-pointer transition-colors duration-300 ${
              activeIndex === index
                ? 'border-black text-black font-semibold'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            <h3 className="text-3xl">{feature.title}</h3>
            <p className="text-lg mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
{/* Text and image section */}
<div className="relative w-full"> 
  {/* Image */}
  <img
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/lights-stay-on-desktop"
    alt="Solar Panel"
    className="w-full h-full object-cover"
  />

  {/* Text over Image */}
  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-6 py-6 sm:py-8">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">Grid Goes Down, Lights Stay On</h2>
      <p className="text-sm sm:text-base text-gray-200">
        Solar panels generate energy from sunlight for you to use in your home. When paired with a{' '}
        <a href="#" className="text-blue-400 underline hover:text-blue-600">
          Powerwall
        </a>{' '}
        home battery, you can store your excess energy for use whenever you want. As severe weather becomes more common
        and the grid less reliable, Powerwall can keep your lights on when outages occur.
      </p>
    </div>
  </div>
</div>


{/* 
        <BenefitsSection />
        <InstallationSection /> */}
        <MonitoringSection />
        <SpecificationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default SolarPanel;
