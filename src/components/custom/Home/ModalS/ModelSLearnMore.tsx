import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from './layout/Header';
import Hero from './sections/Hero';
import InteriorSection from './sections/InteriorSection';
import RangeSection from './sections/RangeSection';
import PowertrainSection from './sections/PowertrainSection';
import CapabilitySection from './sections/CapabilitySection';
import SafetySection from './sections/SafetySection';
import AutopilotSection from './sections/AutopilotSection';
import DesignSection from './sections/DesignSection'
import Autopilot from "../../../../Assets/ModelX/modelXAutopilet.png";
import Specis from "./sections/Specis";
import Footer from "./sections/Footer";


function ModelYLearnMore() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const [selectedTab, setSelectedTab] = useState('awd');
  
  const videoData = [
    {
      src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4",
      title: "Cinematic Experience",
      description: "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more."
    },
    {
      src: "https://digitalassets.tesla.com/tesla-contents/video/upload/Model-S-Interior-Carousel-2-Yoke-Steering-Desktop.mp4",
      title: "Yoke Steering",
      description: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip."
    },
    {
      src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4",
      title: "Perfect Environment",
      description: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment."
    },
    {
      src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4",
      title: "Redesigned Second Row",
      description: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging."
    },
    {
      src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-X-Interior-Carousel-5-Console-Grade-Gaming-Desktop-Global.mp4",
      title: "Tesla Arcade",
      description: "Play games on your in-car touchscreens."
    },
  ];
  const videoFeatureData = [
    {
      title: 'Navigate on Autopilot',
      description:
        'Active guidance from highway on-ramp to off-ramp',
      video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model_S_Navigate_0-mp4.mp4",
    },
    {
      title: 'Auto Lane Change',
      description:
        'Automatically change lanes while driving on the highway',
      video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/lane_change_0-mp4.mp4",
    },
    {
      title: 'Dumb Summon',
      description:
        'Automatically retrieve your vehicle',
      video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/summon_1-mp4.mp4",
    },
    {
      title: 'Autopark',
      description:
        'Parallel and perpendicular parking, with a single touch',
      video: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/parking-mp4.mp4",
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
    <div className="relative w-full">
      <Header />
      <main>
        <Hero />
        {/* Image */}
        <div>
        <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Interior-Desktop.jpg"
            alt="Tesla Model x"
            className="w-full h-full object-cover"
        />
        </div>
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

    {/* Custom Controls */}
    <div className="absolute bottom-0 left-0 w-full bg-black/50 py-2 px-4 flex items-center justify-between">
      {/* Play/Pause */}
      <button onClick={togglePlay} className="text-white text-lg">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Progress Bar */}
      <div className="relative w-full mx-4">
        <div className="h-1 bg-gray-600 w-full rounded-full">
          <div className="h-1 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Mute/Unmute */}
      <button onClick={toggleMute} className="text-white text-lg p-2">
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      {/* Fullscreen */}
      <button onClick={toggleFullscreen} className="text-white text-lg">
        <FaExpand />
      </button>
    </div>
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

        <InteriorSection />
        <div className="relative h-[75vh] w-full">
  {/* Image */}
  <img
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg"
    alt="Tesla Model X"
    className="w-full h-full object-cover"
  />

  {/* Performance Metrics */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-32 text-white text-center">
    <div>
      <h3 className="text-4xl font-semibold">1,020 <span className="text-sm font-normal">hp</span></h3>
      <p className="text-xl font-medium opacity-70">Peak Power</p>
    </div>
    <div>
      <h3 className="text-4xl font-semibold">9.23 <span className="text-sm font-normal">s</span></h3>
      <p className="text-xl font-medium opacity-70">1/4 Mile</p>
    </div>
    <div>
      <h3 className="text-4xl font-semibold">1.99 <span className="text-sm font-normal">s</span></h3>
      <p className="text-xl font-medium opacity-70">0-60 mph</p>
    </div>
  </div>
</div>
{/* Content Section */}
<div className="flex flex-col md:flex-row items-start justify-between px-8 md:px-20 py-12 w-[1500px] mx-auto">
  <div className="md:w-1/2">
    <p className="uppercase text-base font-medium tracking-wide mb-1">Plaid</p>
    <h2 className="text-3xl font-semibold mb-6">Beyond Ludicrous</h2>
    <div className="flex gap-4">
      <button className="px-12 py-2 border-4 rounded-sm border-black font-medium hover:bg-black hover:text-white transition">Order Now</button>
      <button className="px-12 py-2 border-4 rounded-sm border-black bg-gray-100 text-black font-medium hover:bg-gray-200 transition">Demo Drive</button>
    </div>
  </div>
  <div className="md:w-1/2 text-lg font-medium text-gray-700">
    <p>
    Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.
      <a href="#" className="underline ml-1">Chat with a Tesla Advisor</a> to learn more about Model S or
      <a href="#" className="underline ml-1">schedule a demo drive</a> today.
    </p>
  </div>
</div>

        {/* <PerformanceSection /> */}
        <PowertrainSection />
        {/* Image */}
        <div>
        <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global"
            alt="Tesla Model s"
            className="w-full h-full object-cover"
        />
        </div>
        {/* <CapabilitySection /> */}
        <DesignSection/>
        <RangeSection/>
        {/* Demo Drive */}
<div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white text-black px-6">
  {/* Left Section - Form */}
  <div className="w-full md:w-1/2 max-w-md translate-y-[-175px] translate-x-[-50px] space-y-5 ">
    <h1 className="text-4xl font-semibold">Demo Drive Model S</h1>
    <p className="text-lg text-gray-800 mt-2">
      Enter a zip code to find Tesla showrooms near you:
    </p>

    <div className="mt-4">
      <label className="block text-base font-medium">Zip Code</label>
      <input
        type="text"
        className="w-[200px] bg-zinc-200 text-white rounded-sm  px-10 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500 "
        placeholder=""
      />
    </div>

    <button className="mt-4 w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm transition shadow-lg">
      Next
    </button>
  </div>

  {/* Right Section - Image */}
  <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
    <div className="relative max-w-3xl w-full overflow-hidden rounded-lg shadow-2xl">
      <img
        src="https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/TD_Component_MS_Desktop.jpg" // Replace with your actual Tesla image
        alt="Tesla Model 3"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
        <SafetySection />
                {/* Image */}
                <div>
        <img
            src={Autopilot}
            alt="Tesla Model x"
            className="w-full h-full object-cover"
        />
        </div>
        <AutopilotSection />
        {/* Features */}
        <div>
          {/* Feature video section */}
          <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white py-16">
      {/* Video Container */}
      <div className="relative w-[75%] h-[60vh] mx-auto overflow-hidden rounded-lg shadow-lg">
        <video
          key={videoFeatureData[activeIndex].video}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoFeatureData[activeIndex].video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
              <h3 className="text-lg">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
        <Specis/>
        {/* Last Section */}
        <div className="relative w-full h-screen">
              {/* Background Image */}
              <img 
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-End-of-Page-Desktop.jpg"
                alt="Tesla Model X" 
                className="w-full h-full object-cover"
              />
        
              {/* Text Content */}
              <div className="absolute top-[80%] w-full text-center">
                <h1 className="text-3xl font-semibold text-white">Model S</h1>
                <p className="text-lg text-gray-300">
                  Design your car or get a trade-in estimate for your current vehicle.
                </p>
              </div>
        
              {/* Buttons */}
              <div className="absolute bottom-[5%] w-full flex justify-center gap-4">
                <Link to="/order-now">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                    Order Now
                  </button>
                </Link>
                <Link to="/get-estimate">
                  <button className="bg-gray-800 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-gray-900">
                    Get an Estimate
                  </button>
                </Link>
              </div>
            </div>
      </main>
      <Footer/>
    </div>
  );
}

export default ModelYLearnMore;
