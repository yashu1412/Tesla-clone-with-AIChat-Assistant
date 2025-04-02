import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp, FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";

// Internal Dependencies
import { Button } from "@/components/ui/button";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

// Asset Imports
import video1 from "../../../../Assets/model3/HeroVideo1.mp4";
import video2 from "../../../../Assets/model3/HeroVideo2.mp4";
import video3 from "../../../../Assets/model3/Model-3-Interior.mp4";
import video4 from "../../../../Assets/model3/feature-video.mp4";
import Cabin from "../../../../Assets/model3/cabin.jpg";
import Tabimage from "../../../../Assets/model3/TabImage.jpg";
import mobileimage1 from "../../../../Assets/model3/mobile1.jpg";
import mobileimage2 from "../../../../Assets/model3/mobile2.jpg";
import mobileimage3 from "../../../../Assets/model3/mobile3.jpg";
import moodimage1 from "../../../../Assets/model3/Model-3-Mode-Slide-1-Desktop-NA.jpg";
import moodimage2 from "../../../../Assets/model3/Model-3-Mode-Slide-2-Desktop-NA.jpg";
import moodimage3 from "../../../../Assets/model3/Model-3-Mode-Slide-3-Desktop-NA.jpg";



const Model3LearnMore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videoData = [
    {
      src: video1,
      title: "Two New Colors",
      description: "Stealth Grey and Ultra Red change with the light and viewing angle.",
    },
    {
      src: video2,
      title: "Upgraded Wheels",
      description: "Enjoy new styling, increased range, and less noise with upgraded tires and wheels.",
    },
  ];
  const videoFeatureData = [
    {
      title: "Premium Materials",
      description: "Immerse yourself in softer, more sophisticated materials—executed with an elevated level of precision.",
    },
    {
      title: "Sublime Sound",
      description: "Enjoy more immersive sound with an audio system designed by Tesla, with up to 17 speakers, dual subwoofers and dual amplifiers.",
    },
    {
      title: "Rear Display",
      description: "Rear passengers have access to an 8” touchscreen with climate controls and entertainment.",
    },
    {
      title: "Wireless Charging",
      description: "Charge two phones at the same time and enjoy crystal-clear calls thanks to upgraded microphones.",
    }
  ];

  const moodimageData = [
    {
      src: moodimage1,
      title: "Smart Controls",
      description: "Easily manage your vehicle settings with intuitive controls.",
    },
    {
      src: moodimage2,
      title: "Advanced Navigation",
      description: "Plan your route efficiently with real-time navigation support.",
    },
    {
      src:moodimage3,
      title: "Seamless Connectivity",
      description: "Stay connected with integrated smart technology.",
    },
  ];
  const ChargingimageData = [
    {
      title: "At Home",
      description: "Our most convenient and affordable way to charge.",
      src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Charging-Slide-1-Desktop-NA.jpg",
    },
    {
      title: "On the Road",
      description: "Add up to 195 miles in just 15 minutes¹ at one of 60,000+ global Superchargers.",
      src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Charging-Slide-2-Desktop-NA.jpg",
    },
    {
      title: "Where You Park",
      description: "Plug in at your destination, whether it’s a hotel, park, or somewhere else.",
      src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Charging-Slide-3-Desktop-NA.jpg",
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
    <div className="min-h-screen ">
      <Navbar />
      
      <div className="">
{/* Hero Section 1 */}
<div className="relative h-screen">
  <img
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-NA.png"
    alt="Tesla Model 3"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex flex-col justify-between bg-black/30">
    
    {/* Top Section - Title and Leasing Info */}
    <div className="text-center text-white mt-28">
      <h1 className="text-5xl font-bold">Model 3</h1>
      <p className="text-2xl font-semibold mt-2">$299/mo Leasing With $1,000 Down</p>
    </div>

    {/* Bottom Section - Specs and Buttons */}
    <div className="flex flex-col items-center space-y-6 mb-24">
      <div className="flex justify-center space-x-10">
        <div className="text-center text-white">
          <p className="text-3xl font-bold">15 min</p>
          <p className="text-sm">Recharge up to<br />195 miles¹</p>
        </div>
        <div className="text-center text-white">
          <p className="text-3xl font-bold">363 mi</p>
          <p className="text-sm">Range (EPA est.)</p>
        </div>
        <div className="text-center text-white">
          <p className="text-3xl font-bold">AWD</p>
          <p className="text-sm">Dual Motor</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
          Order Now
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-md">
          Experience Model 3
        </button>
      </div>
    </div>

  </div>
      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/90 to-transparent"></div>
</div>
{/* Hero Section 2 */}
<div className="relative h-screen">
  {/* Background Image */}
  <img
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Exterior-Hero-Desktop-LHD.jpg"
    alt="Tesla Model 3"
    className="w-full h-full object-cover"
  />

  {/* Overlay with Shadows */}
  <div className="absolute inset-0 flex flex-col justify-between bg-black/30">
    
    {/* Top Shadow */}
    <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-b from-black/90 to-transparent"></div>

    {/* Content - Title and Leasing Info */}
    <div className="text-center text-white mt-28 z-10">
      <h1 className="text-5xl font-bold drop-shadow-lg">Built for Distance</h1>
      <p className="text-lg font-medium mt-2 drop-shadow-md">
        Go up to 363 miles (EPA est.) on a single charge with updated exterior styling optimized for maximum aerodynamics.
      </p>
    </div>

    {/* Bottom Shadow */}
    <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/90 to-transparent"></div>

  </div>
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
          {/* Play/Pause Button */}
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
      <div className="text-center text-white mt-4">
        <h2 className="text-2xl font-bold">{videoData[activeIndex].title}</h2>
        <p className="text-sm mt-2 text-gray-300">{videoData[activeIndex].description}</p>
      </div>
      {/* Text Content */}
      <div className="text-center text-white mt-32">
        <h2 className="text-2xl font-bold">All-New Interior</h2>
        <p className="text-sm mt-2 text-gray-300">Settle into an all-new interior, featuring a wraparound styling that cocoons you inside. Customize ambient lighting to make it your own.</p>
       </div>
    </div>

{/* Interior Section */}
<div className="relative h-screen">
      {/* Video Container */}
      <div className="absolute inset-0 flex flex-col justify-between">
        
        {/* First Video */}
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      {/* Overlay with Shadows */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black/30">
        {/* Top Shadow */}
        <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-b from-black/90 to-transparent"></div>
        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/90 to-transparent"></div>

      </div>
</div>
{/* Feature video section */}
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
      {/* Video Container */}
      <div className="relative w-[75%] h-[60%] mx-auto overflow-hidden rounded-lg shadow-lg">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Text Content Section */}
      <div className="mt-8 w-full max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoFeatureData.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 border-t-2 cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? "border-black text-black font-bold" : "border-gray-300 text-gray-400"
              }`}
            >
              <h3 className="text-lg">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
{/* Text div */}
    <div className="bg-white my-auto">
      <div className="text-center text-black w-3/6 mx-auto bg-white">
        <h2 className="text-2xl font-bold">A Quieter Cabin</h2>
        <p className="text-sm mt-2 ">Enjoy a whisper-quiet cabin, thanks to 360-degree acoustic glass. Take in the sky underneath an all-glass roof that lets in light while protecting you from harmful UV rays.</p>
       </div>
    </div>
{/* cabin Section */}
<div className="relative h-screen">
      {/* Video Container */}
      <div className="absolute inset-0 flex flex-col justify-between">
        
        <img
            src={Cabin}
            alt="Feature"
            className="w-full h-full object-cover"
        />
      </div>

{/* Overlay with Shadows */}
<div className="absolute inset-0 flex flex-col justify-between bg-white/10">
  {/* Top White Shadow */}
  <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-b from-white/90 to-transparent"></div>
</div>

</div>
{/* Tab Section */}
<div className="relative h-screen m-10">
      {/* Video Container */}
      <div className="relative w-[75%] h-[95%] mx-auto mt-36  overflow-hidden rounded-lg shadow-lg">  
        <img
            src={Tabimage}
            alt="Feature"
            className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-start space-x-10 mt-10 text-black mx-auto bg-white w-4/5">
  <h2 className="text-2xl font-bold whitespace-nowrap">Elegant Technology</h2>
  <p className="text-sm text-gray-600 max-w-xl">
    Your favorite game, movie or song is just a few taps away. Use the center touchscreen to stream media, customize your vehicle, navigate to your destination and more.
  </p>
</div>
</div>
{/* Mobile Features Section */}
<div className="relative h-screen m-10 mt-40 mb-40">
       <div className="text-center text-black w-3/6 mx-auto bg-white mb-24">
        <h2 className="text-2xl font-bold">Remote Access</h2>
        <p className="text-sm mt-2 ">Control everything from one do-it-all Tesla app.</p>
       </div>
  {/* Image Container */}
  <div className="flex justify-center space-x-10 w-full mb-10">
    {/* Feature 1 */}
    <div className="w-1/4 text-center">
      <img src={mobileimage1} alt="Controls" className="w-full h-auto object-cover " />
      <h2 className="text-lg font-semibold mt-4">Controls</h2>
      <p className="text-sm text-gray-600 mt-1">Remotely access and manage your vehicle.</p>
    </div>

    {/* Feature 2 */}
    <div className="w-1/4 text-center">
      <img src={mobileimage2} alt="Cabin Preconditioning" className="w-full h-auto object-cover" />
      <h2 className="text-lg font-semibold mt-4">Cabin Preconditioning</h2>
      <p className="text-sm text-gray-600 mt-1">Pre-heat or cool your cabin from anywhere.</p>
    </div>

    {/* Feature 3 */}
    <div className="w-1/4 text-center">
      <img src={mobileimage3} alt="Charging" className="w-full h-auto object-cover" />
      <h2 className="text-lg font-semibold mt-4">Charging</h2>
      <p className="text-sm text-gray-600 mt-1">Plan your route with charging stops.</p>
    </div>
  </div>
</div>
{/* Choose Your Mood Section */}
<div className="relative w-full h-screen flex flex-col items-center justify-center bg-black pt-10 pb-24">
  
  {/* Heading */}
  <h2 className="absolute top-5 text-white text-4xl font-bold z-10">Choose Your Mood</h2>

  {/* Image Container */}
  <div className="relative w-[75%] h-[80%] mx-auto overflow-hidden rounded-xl shadow-lg mt-16">
    <img
      src={moodimageData[activeIndex].src}
      alt="Feature"
      className="w-full h-full object-cover transition-all duration-500 ease-in-out"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
  </div>

  {/* Pagination Dots */}
  <div className="flex space-x-2 mt-4">
    {moodimageData.map((_, index) => (
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
  <div className="text-center text-white mt-4">
    <h2 className="text-2xl font-bold">{moodimageData[activeIndex].title}</h2>
    <p className="text-sm mt-2 text-gray-300">{moodimageData[activeIndex].description}</p>
  </div>
</div>
{/* Convenient Charging */}
<div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Convenient Charging</h1>
        <p className="text-lg text-gray-300 mt-2">
          Fast, accessible, easy—anywhere with electricity
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-[75%] h-[60%] mx-auto overflow-hidden rounded-lg shadow-lg">
        <img
          src={ChargingimageData[activeIndex].src}
          alt="Feature"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      </div>

      {/* Text Content Section */}
      <div className="mt-6 w-full max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-600">
          {ChargingimageData.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-6 cursor-pointer transition-colors duration-300 text-center border-t-2 ${
                activeIndex === index ? "border-white text-white font-bold" : "border-gray-500 text-gray-400"
              }`}
            >
              <h3 className="text-lg">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
</div>
{/* Demo Drive */}
<div className="flex flex-col md:flex-row items-center justify-center h-screen bg-black text-white px-6">
  {/* Left Section - Form */}
  <div className="w-full md:w-1/2 max-w-md translate-y-[-175px] translate-x-[-50px] space-y-5 ">
    <h1 className="text-4xl font-semibold">Demo Drive Model 3</h1>
    <p className="text-lg text-gray-300 mt-2">
      Enter a zip code to find Tesla showrooms near you:
    </p>

    <div className="mt-4">
      <label className="block text-sm font-medium">Zip Code</label>
      <input
        type="text"
        className="w-[150px] bg-zinc-900 text-white rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500 shadow-md"
        placeholder=""
      />
    </div>

    <button className="mt-4 w-[150px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition shadow-lg">
      Next
    </button>
  </div>

  {/* Right Section - Image */}
  <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
    <div className="relative max-w-3xl w-full overflow-hidden rounded-lg shadow-2xl">
      <img
        src="https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/TD_Component_M3_Desktop.jpg" // Replace with your actual Tesla image
        alt="Tesla Model 3"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      </div>      
      <Footer />
    </div>
  );
};

export default Model3LearnMore;
