import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import Navbar from '../../../common/Navbar';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import MonitoringSection from './sections/MonitoringSection';
import SpecificationsSection from './sections/SpecificationsSection';
import CTASection from './sections/CTASection';
import StorageSection from './sections/StorageSection'
import DurabilitySection from './sections/DurabilitySection'
import EfficiencySection from "./sections/EfficiencySection";
function SolarPanel() {
        const [activeIndex, setActiveIndex] = useState(0);
        const [isPlaying, setIsPlaying] = useState(true);
        const [progress, setProgress] = useState(0);
        const [isMuted, setIsMuted] = useState(true);
        const videoRef = useRef(null);
    const videoData = [
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-roof-installation-carousel-01-desktop.mp4",
          title: "Design",
          description: "Aerial imagery and 3D modeling determine your custom design"
        },
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-roof-installation-carousel-02-desktop.mp4",
          title: "Installation",
          description: "Our integrated design enables quick tile and Powerwall installation"
        },
        {
          src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-roof-installation-carousel-03-desktop.mp4",
          title: "Power On",
          description: "Final cleanup is completed before system activation"
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
            {/* Image */}
                <div>
                    <img
                        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Solar-Roof-Complement-Your-Home-Desktop-new.jpg"
                        alt="Solar Panel"
                        className="w-full h-full object-cover"
                    />
                </div>
{/* Text */}
<div className="max-w-7xl mx-auto mt-10 mb-10">
  <p className="text-lg text-gray-700 mb-1">Design</p>
  <h2 className="text-4xl sm:text-3xl font-semibold mb-4">
    Complement Your Home’s Aesthetic
  </h2>
  <p className="text-gray-700 text-lg sm:text-xl mb-6">
    Install Solar Roof and power your home with a fully integrated solar and energy storage system.
    The glass solar tiles and steel roofing tiles look great up close and from the street, 
    complementing your home’s natural styling.{' '}
    <a href="#" className="text-blue-600 underline hover:text-blue-800">
      Schedule a virtual consultation
    </a>{' '}
    with a Tesla Advisor to learn more.
  </p>
  <button className="border-4 border-black text-black px-12 py-2 rounded hover:bg-black hover:text-white transition text-xl font-semibold">
    Order Now
  </button>
</div>

        </div>
        <StorageSection/>
        <DurabilitySection/>
        <section className="bg-white w-full py-16 px-8 md:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Column - Heading + Button */}
        <div className="md:w-[35%]">
          <p className="text-lg text-gray-700 mb-1">Installation</p>
          <h2 className="text-4xl font-semibold mb-6">Trusted Expertise</h2>
          <a
            href="#"
            className="inline-block border-2 border-black py-2 px-8 font-medium hover:bg-black hover:text-white transition"
          >
            Order Now
          </a>
        </div>

        {/* Right Column - Paragraph */}
        <div className="md:w-[60%] text-gray-700 text-base leading-relaxed">
          <p>
            Our in-house team of energy professionals has installed nearly <strong>4.0 GW</strong> of solar across approximately <strong>480,000 roofs</strong>—cumulatively generating over <strong>25.0 TWhs</strong> of clean energy. From design to power on, we take care of everything.
          </p>
        </div>
      </div>
    </section>
    {/* Hero Video section */} 
<div className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
  {/* Video Container */}
  <div className="relative w-[75%] h-[60%] mx-auto overflow-hidden rounded-xl shadow-lg">

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
<EfficiencySection/>

        <MonitoringSection />
        <SpecificationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default SolarPanel;
