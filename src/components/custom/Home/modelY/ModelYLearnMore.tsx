import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Battery, Gauge, Wind, Timer, Maximize2, Shield, Car } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaVolumeUp, FaWifi } from "react-icons/fa";
import { FaCarSide, FaEye, FaCamera } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from './modelyFooter';
import Navbar from '@/components/common/Navbar';


const carFeatures = [
  {
    title: "Even Quieter",
    description: "An updated wheel and tire package offers a smoother driving experience. Redesigned body castings reduce parts from 70 to 1 for fewer gaps. All to create a whisper-quiet ride.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Carousel-Slide-1-Quieter-Desktop.png", // Replace with actual image URLs
  },
  {
    title: "More Efficient",
    description: "Redesigned to improve range, performance and longevity.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Carousel-Slide-2-Efficient-Desktop.png",
  },
  {
    title: "Distinctive Lighting",
    description: "Our single, cross-car lamp is the first indirect reflective body panel taillight of its kind.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Carousel-Slide-3-Lighting-Desktop.png",
  },
];
const AllFeatures = [
  {
    title: "Live Weather Map",
    description: "Check the weather where you are and at your destination.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Feature-Carousel-Slide-1-Map-Desktop.png", // Replace with actual image URLs
  },
  {
    title: "Detour Estimates",
    description: "See estimated detour times and suggested charging options along your route so you can know what to expect before you leave.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Feature-Carousel-Slide-2-Detour-Desktop.png",
  },
  {
    title: "Tesla Arcade",
    description: "Play games on your in-car touchscreen.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Feature-Carousel-Slide-3-Arcade-Desktop.png",
  },
  {
    title: "Media",
    description: "Stream from any of your preferred media apps to enjoy your favorite movies, music and audio.3",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Feature-Carousel-Slide-4-Media-Desktop.png", // Replace with actual image URLs
  },
  {
    title: "Comfort and Safety Modes",
    description: "Dog Mode maintains a comfortable cabin temperature so your pet is safe while you’re away. Camp Mode keeps your cabin cozy while car camping. Sentry Mode monitors any wild behavior around your vehicle.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Feature-Carousel-Slide-5-Modes-Desktop.png",
  },
  {
    title: "Tesla App",
    description: "Access, precondition and monitor your vehicle from anywhere.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Feature-Carousel-Slide-6-App-Desktop.png",
  },
];
const sections = [
  {
    type: 'video',
    src: 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Charging-Hero-Desktop.mp4',
    title: 'Charge at Home',
    desc: (
      <>
        Start your day with plenty of range by charging at home overnight—no need to stop and charge before your drive.
        <a href="#" className="text-blue-600 underline ml-1">Learn more about charging at home.</a>
      </>
    ),
  },
  {
    type: 'image',
    src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Along-the-Way-Desktop.jpg',
    title: 'Charge Along The Way',
    desc: (
      <>
        When you’re away from home and need a quick charge, add up to 169 miles in just 15 minutes by charging at one of over 60,000 Superchargers along your route.
        <a href="#" className="text-blue-600 underline ml-1">Learn more about charging on the road.</a>
      </>
    ),
  },
];
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    consent: false
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Hero-Desktop.jpg"
          alt="Tesla Model Y"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        {/* Content Overlay */}
        <div className="absolute top-[12%] w-full text-center">
          <h1 className="text-5xl md:text-9xl font-bold text-white">New Model Y</h1>
          <h1 className="text-4xl font-semibold text-white ">$7,500 Federal Tax Credit at Purchase</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[65%] w-full flex justify-center gap-4 front-roboto ">
          <Link to="/modely/order-now">
          <button className="bg-blue-600 text-white px-24 py-3 rounded-md text-xl font-bold hover:bg-blue-700">
            Order Now
          </button>
          </Link>
          <Link to="/modely/learn-more">
          <button className="bg-white text-black px-24 py-3 rounded-md text-xl font-bold hover:bg-gray-100">
            Demo Drive
          </button>
          </Link>
        </div>
      </section>


{/* Key Features */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
      <div className="relative">
        <h3 className="text-9xl font-bold mb-2">327 <span className="text-3xl ml-[-30px]">mi</span></h3>
        <p className="text-gray-600 text-2xl font-semibold">Range (EPA est.)</p>
        <div className="hidden md:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-28 w-[2px] bg-gray-400 shadow-lg blur-[1px]"></div>
      </div>
      <div className="relative">
        <h3 className="text-9xl font-bold mb-2">169 <span className="text-3xl ml-[-30px]">mi</span></h3>
        <p className="text-gray-600 text-2xl font-semibold">Charge in 15 min</p>
        <div className="hidden md:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-28 w-[2px] bg-gray-600 shadow-lg blur-[1px]"></div>
      </div>
      <div>
        <h3 className="text-9xl font-bold mb-2">FSD</h3>
        <p className="text-gray-600 text-2xl font-semibold">Full Self-Driving (Supervised) Compatible</p>
      </div>
    </div>
  </div>
</section>

      {/* Interior */}
      <section className="relative h-screen">
        <div className="relative w-[80%] h-[65%] mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Desktop.png"
          alt="Tesla Model Y Interior"
          className="w-full h-full object-cover"
        />
        </div>
      </section>
{/* Text Section */}
<section className="px-4 bg-white mb-7">
  <div className="max-w-[1700px] mx-auto">
    <h2 className="text-8xl font-bold text-black mb-4 font-roboto">
      Redesigned From End to End
    </h2>
    <p className="text-gray-600 text-3xl font-semibold leading-relaxed">
      From the front bumper to the taillight, the exterior is completely redesigned to unlock maximum efficiency so 
      you can get the most range out of every charge. With updated suspension, wheels and tires, your ride will be 
      smoother and quieter.
    </p>
  </div>
</section>

<div className="max-w-[2000px] mx-auto py-8">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className=""
      >
        {carFeatures.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="relative  overflow-hidden">
              <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
              <div className="p-6 bg-white">
                <h2 className="text-6xl font-bold">{feature.title}</h2>
                <p className="text-gray-500 font-semibold text-2xl">{feature.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
</div>

{/* Interior */}
{/* Video */}
<section className="relative h-screen flex items-center justify-center">
  <div className="relative w-[90%] h-[75%] mx-auto overflow-hidden rounded-xl shadow-lg">
    <video 
      src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Seven-Seater_Y_Video.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-cover"
    />
  </div>
</section>
{/* Text */}
<section className="py-16 px-6">
      <div className="text-center">
        <h2 className="text-7xl font-semibold">All-New Interior</h2>
        <p className="text-2xl text-gray-500 mt-2 font-semibold">
          Refined materials integrate with advanced features to create a
          reimagined cabin environment that changes your perception of what
          riding in a car should feel like.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1700px] items-center mx-auto ">
        {/* Feature 1 */}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <FaVolumeUp className="text-6xl mx-auto mb-4" />
          <h3 className="text-4xl font-semibold">Immersive Soundscape</h3>
          <p className="text-gray-600 mt-2 text-2xl font-medium">
            Step inside, close the door and experience the vast silence offered
            by specially engineered acoustic glass. Queue up your favorite
            songs and listen as your cabin turns into your own private sound
            studio.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <MdEventSeat className="text-6xl mx-auto mb-4" />
          <h3 className="text-4xl font-semibold">Comfort From Any Seat</h3>
          <p className="text-gray-600 mt-2 text-2xl font-medium">
            Front and rear touchscreens put all your climate and entertainment
            settings within reach. Heated and ventilated seats, power recline,
            and soft-touch textiles provide added comfort.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <FaWifi className="text-6xl mx-auto mb-4" />
          <h3 className="text-4xl font-semibold">Even More Connected</h3>
          <p className="text-gray-600 mt-2 text-2xl font-medium">
            Calls come in clear. Data downloads fast. Doors and trunks unlock
            when you approach. Enhanced connectivity and signal range keep you
            and your vehicle in sync. Bluetooth capability keeps passengers
            entertained.
          </p>
        </div>
      </div>
</section>
{/* Video */}
<section className="relative h-screen flex flex-col items-center justify-center">
  <div className="relative w-[90%] h-[75%] mx-auto overflow-hidden rounded-xl shadow-lg">
    <video 
      src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Closing-Front-Trunk_3Y_Video.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-cover"
    />
  </div>
  {/* Text Below Video */}
  <div className="mt-6 text-center max-w-6xl">
    <h2 className="text-7xl font-semibold text-gray-900">Expansive Storage</h2>
    <p className="mt-2 text-2xl text-gray-600 font-medium">
    Power recline second-row seats fold flat to expand your trunk space to a total of 76 cubic feet of storage. A hands-free trunk automatically unlocks as you approach so you can easily store all your gear.
    </p>
  </div>
</section>
{/* All Features */}
<div className="max-w-[2000px] mx-auto py-8">
  {/* Heading and Description */}
  <div className="text-center mb-10 px-4">
    <h2 className="text-7xl md:text-7xl font-bold text-gray-900">Features That Only Get Better</h2>
    <p className="mt-4 text-2xl md:text-2xl text-gray-600 font-medium">
    Play your favorite movie, game or song from any seat. An upgraded, ultra-responsive 15.4-inch touchscreen sits at the center of your driving experience and an 8-inch touchscreen gives access to second-row passengers. With over-the-air updates, you’ll always have access to the latest features. Discover the advanced technologies and sleek design details that set Tesla apart in every ride.
    </p>
  </div>

  {/* Swiper Carousel */}
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20}
    slidesPerView={1}
    className=""
  >
    {AllFeatures.map((feature, index) => (
      <SwiperSlide key={index}>
        <div className="relative overflow-hidden">
          <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
          <div className="p-6 bg-white">
            <h2 className="text-6xl font-bold">{feature.title}</h2>
            <p className="text-gray-500 font-semibold text-2xl">{feature.description}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
<div className="bg-gray-900 text-white">
      {/* HERO IMAGE */}
      <div className="relative w-[90%] h-[75%] mx-auto overflow-hidden rounded-xl mt-10 shadow-lg">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Autonomous-Travel-Desktop.jpg" // replace with your actual image path
          alt="Autonomous Driving"
          className="w-full object-cover h-auto  mt-20"
        />
        <h1 className="text-4xl md:text-7xl font-bold text-white text-center py-8">
          The Future of Travel Is Autonomous
        </h1>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 py-12 max-w-[1900px] mx-auto">
        <div className="bg-[#1e1e1e] p-12 rounded-lg shadow-lg">
          <FaCarSide size={80} className="mb-4 " />
          <h3 className="text-4xl font-semibold">Full Self-Driving <span className="text-xl font-normal">(Supervised)</span></h3>
          <p className="mt-2 text-gray-400 font-semibold text-2xl">
            A suite of advanced driver assistance features designed to provide more active guidance and assisted driving under your active supervision.
          </p>
        </div>

        <div className="bg-[#1e1e1e] p-12 rounded-lg shadow-lg">
          <FaCamera size={80} className="mb-4" />
          <h3 className="text-4xl font-semibold">Front-Facing Cameras</h3>
          <p className="mt-2 text-gray-400 font-semibold text-2xl">
            Enhanced visibility for Autopilot and Actually Smart Summon capabilities.
          </p>
        </div>

        <div className="bg-[#1e1e1e] p-12 rounded-lg shadow-lg">
          <FaEye size={80} className="mb-4" />
          <h3 className="text-4xl font-semibold">Blind Spot Monitoring</h3>
          <p className="mt-2 text-gray-400 font-semibold text-2xl">
            Illuminated warning lights and on-screen visualizations help you safely check your surroundings.
          </p>
        </div>
      </div>

      {/* SAFETY SECTION */}
      <div className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-20 pb-20 mx-auto max-w-[2000px]">
        <div>
          <h2 className="text-6xl font-bold mb-4">Engineered For Your Safety</h2>
          <p className="text-gray-400 text-2xl font-semibold">
            We engineer our vehicles to be the safest in the world. Active safety features can help reduce impact severity or help prevent accidents altogether. Forward Collision Warning, Active Emergency Braking and Lane Departure Avoidance come standard. A stiff body structure better absorbs crash energy while airbags help protect occupants.
          </p>
        </div>
        <div className="md:w-[1050px] w-full">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Safety-Desktop.jpg" // replace with your actual image path
            alt="Car Frame"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
    {/* Carging station */}
    <div className="w-full bg-white py-10 px-4 md:px-16">
      <div className="max-w-[1900px] mx-auto">
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-No-Gas-Station-Desktop.jpg"
            alt="Tesla Home Charger"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="text-center mt-8">
          <h2 className="text-7xl font-semibold md:text-7xl">
            No More Gas Stations
          </h2>
          <p className="text-gray-600 text-2xl font-semibold  mt-3 md:text-2xl">
          Plenty of range for every kind of drive. From daily driving to family road trips, charging is fast, convenient and accessible anywhere there’s electricity.
          </p>
        </div>
      </div>
    </div>
    <div className="space-y-20 p-4">
      {sections.map((section, index) => (
        <div key={index} className="text-center max-w-[1800px] mx-auto">
          {section.type === 'video' ? (
            <video
              src={section.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl object-cover"
            />
          ) : (
            <img
              src={section.src}
              alt={section.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          )}
          <h2 className="text-7xl font-bold mt-6">{section.title}</h2>
          <p className="text-2xl font-semibold text-gray-600 mt-2">{section.desc}</p>
        </div>
      ))}
    </div>
    {/* Get Updates */}
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-medium mb-4">Get Updates</h1>
          <p className="text-xl text-gray-300">Be the first to receive updates on Model Y.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full bg-neutral-800 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full bg-neutral-800 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-neutral-800 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm mb-2">Phone Number</label>
              <div className="relative">
                <select className="absolute left-0 top-0 h-full bg-neutral-800 border-r border-neutral-700 rounded-l px-3 focus:outline-none">
                  <option>US +1</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-neutral-800 rounded p-3 pl-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(201) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="max-w-[50%]">
            <label htmlFor="zipCode" className="block text-sm mb-2">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              className="w-full bg-neutral-800 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.zipCode}
              onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
            />
          </div>

          <div className="space-y-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={formData.consent}
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
              />
              <span className="text-sm text-gray-300">
                I consent to be contacted about Tesla products, including through automated calls or texts.
                I understand and agree to Tesla's{' '}
                <a href="#" className="underline">Privacy Notice</a> and{' '}
                <a href="#" className="underline">Terms of Use</a>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full md:w-auto text-center items-center px-12 py-3 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* Model y spesc */}
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-medium mb-10">Model Y Specs</h1>
        
        {/* Drive Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Drive</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Battery</p>
              <p>Long Range</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Range (EPA est.)</p>
              <p>327 mi</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Acceleration</p>
              <p>4.6 s 0-60 mph</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Drive</p>
              <p>Dual Motor All-Wheel Drive</p>
            </div>
          </div>
        </div>
        
        {/* Dimensions Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Dimensions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Weight (Curb Mass)</p>
              <p>4,395 lbs</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Cargo</p>
              <p>76 cu ft</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Wheels</p>
              <p>19" or 20"</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Seating</p>
              <p>Up to 5 Adults</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Displays</p>
              <div>
                <p>15.4" Center Touchscreen</p>
                <p>8" Rear Touchscreen</p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Ground Clearance</p>
              <p>6.6"</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Overall Width</p>
              <div>
                <p>Folded mirrors: 78.0"</p>
                <p>Extended mirrors: 83.8"</p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Overall Height</p>
              <p>63.9"</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Overall Length</p>
              <p>188.6"</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Track - Front & Rear</p>
              <p>64.4" & 64.4"</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <img
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Specs-LR-AWD-Desktop-Imperial.png"
              alt="Tesla Model Y Dimensions"
              className="w-full max-w-md"
            />
          </div>
        </div>
        
        {/* Charging Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Charging</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Supercharging Max/Payment Type</p>
              <p>250 kW Max; Pay Per Use</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Charging Speed</p>
              <p>Up to 169 miles added in 15 minutes<sup>3</sup></p>
            </div>
          </div>
        </div>
        
        {/* Warranty Section */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl font-medium mb-8">Warranty</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Basic Vehicle</p>
              <p>4 years or 50,000 mi, whichever comes first</p>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-1">Battery & Drive Unit</p>
              <p>8 years or 120,000 mi, whichever comes first</p>
              <a href="#" className="text-sm underline mt-2 inline-block">See Details</a>
            </div>
          </div>
        </div>
        
        {/* Compare Models */}
        <div className="mb-16 border-t border-gray-800 pt-16">
          <a href="#" className="text-sm underline">Compare Models</a>
        </div>
        
        {/* Footnotes */}
        <div className="text-sm text-gray-400 mt-12 space-y-4">
          <p>Vehicle shown for illustrative purposes only. Actual model may vary.</p>
          
          <p><sup>1</sup>Before the Federal Tax Credit, Model Y Long Range AWD starts at $50,630. Price includes Destination and Order Fees but exclude taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. The $7,500 Federal Tax Credit is available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible. <a href="#" className="underline">Terms apply</a>.</p>
          
          <p><sup>2</sup>For Long-Range All-Wheel Drive models with 19" wheels.</p>
          
          <p><sup>3</sup>Range added in 15 minutes is based on constant speed data.</p>
          
          <p><sup>4</sup>A paid subscription to third-party streaming services may be required to access music and media streaming.</p>
          
          <p>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. <a href="#" className="underline">Learn more about Standard Connectivity</a> and any limitations.</p>
        </div>
      </div>
    </div>
{/* Last Section */}
<div className="relative w-full h-screen">
  {/* Background Image */}
  <img 
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-End-of-Page-Desktop.jpg"
    alt="Tesla Model Y" 
    className="w-full h-full object-cover"
  />

  {/* Text Content + Buttons */}
  <div className="absolute top-[15%] w-full text-center flex flex-col items-center gap-4">
    <h1 className="text-4xl font-bold text-white">Design Yours</h1>
    <p className="text-lg text-white">Model Y is waiting for you.</p>
    
    {/* Buttons */}
    <div className="flex gap-4 mt-4">
      <Link to="/modely/order-now">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-base font-medium hover:bg-blue-700">
          Order Now
        </button>
      </Link>
      <Link to="/modely/demo-drive">
        <button className="bg-white text-black px-6 py-2 rounded-md text-base font-medium hover:bg-gray-100">
          Demo Drive
        </button>
      </Link>
    </div>
  </div>
        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black/90 to-transparent"></div>
</div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;