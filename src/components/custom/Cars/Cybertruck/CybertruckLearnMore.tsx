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
import CybertruckVideo from '../../../../Assets/cybertruck/Cybertruck-Beyond-Prepared-Desktop-v2.mp4'
import Footer from './CybertruckFooter';
import Navbar from '@/components/common/Navbar';


const carFeatures = [
  {
    title: "Steer-by-Wire",
    description: "Make low-speed maneuvers with only minor steering inputs. At higher speeds, your maneuvers will be more predictable and quicker.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Beyond-Prepared-Carousel-Slide-1-Desktop-v2.png", // Replace with actual image URLs
  },
  {
    title: "Powershare Outlets",
    description: "Operate your tools or charge another EV with integrated 120 V and 240 V bed and cabin outlets.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Beyond-Prepared-Carousel-Slide-2-Desktop-v2.png",
  },
  {
    title: "Maximize Your Storage Space",
    description: "Aluminum powder-coated crossbars with integrated locks provide extra storage for up to 200 pounds of cargo.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Beyond-Prepared-Carousel-Slide-4-Desktop-v2.png",
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
    <div className="w-screen min-h-screen md:w-full bg-white text-black">
      <Navbar/>
{/* Hero Section */}
<section className="relative h-screen">
  <img
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Hero-Desktop-v2.png"
    alt="Tesla Cybertruck"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-20" />

  {/* Content Overlay */}
  <div className="absolute top-[15%] w-full text-center">
    <h1 className="text-7xl font-bold text-white font-cyberpunk">CYBERTRUCK</h1>
    <h2 className="text-2xl text-white mt-4">
      $7,500 Federal Tax Credit at Purchase
    </h2>
  </div>

  {/* Buttons */}
  <div className="absolute top-[30%] w-full flex justify-center gap-4">
    <Link to="/cybertruck/order-now">
      <button className="bg-blue-600 text-white px-12 py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
        Order Now
      </button>
    </Link>
    <Link to="/cybertruck/demo-drive">
      <button className="bg-white text-black px-12 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
        Demo Drive
      </button>
    </Link>
  </div>

  {/* Stats Section */}
  <div className="absolute bottom-10 w-full flex justify-center gap-16 text-white text-center">
    <div>
      <p className="text-4xl font-semibold">5-Star</p>
      <p className="text-xl">Safety Ratings</p>
    </div>
    <div>
      <p className="text-4xl font-semibold">325 mi</p>
      <p className="text-xl">Est. Range</p>
    </div>
    <div>
      <p className="text-4xl font-semibold">6'x4'</p>
      <p className="text-xl">Lockable Bed</p>
    </div>
  </div>
</section>


{/* Video Section */}
<section className="relative h-screen flex items-center justify-center bg-white">
  <div className="relative w-[90%] h-[65%] mx-auto overflow-hidden shadow-xl shadow-gray-700">
    <video
    src={CybertruckVideo}
      autoPlay
      muted
      loop
      className="w-full h-full object-cover "
    />
  </div>
</section>

{/* Text and Stats Section */}
<section className="px-4 bg-white">
  <div className="max-w-[1700px] mx-auto text-center">
    <h2 className="text-7xl font-semibold text-black mb-6 font-roboto">
      Beyond Prepared
    </h2>
    <p className="text-gray-600 text-2xl font-semibold mx-auto mb-12">
      Haul everything you need with 2,500 pounds payload and 11,000 pounds towing capacity—the equivalent of an average African elephant. The super-tough composite bed doesn’t need a liner and is big enough for 4’x8’ construction materials.
    </p>

{/* Stats */}
<div className="flex flex-wrap justify-center text-center text-black">
  {/* Stat 1 */}
  <div className="px-8">
    <p className="text-6xl font-bold">
      2.6<span className="text-xl">s</span>
    </p>
    <p className="text-xl font-medium uppercase text-gray-500 mt-1">
      0-60 mph*
    </p>
  </div>

  {/* Divider */}
  <div className="w-[2px] bg-gray-300 mx-6 hidden sm:block"></div>

  {/* Stat 2 */}
  <div className="px-8">
    <p className="text-6xl font-bold">
      11,000<span className="text-xl">lbs</span>
    </p>
    <p className="text-xl font-medium uppercase text-gray-500 mt-1">
      Towing Capacity
    </p>
  </div>

  {/* Divider */}
  <div className="w-[2px] bg-gray-300 mx-6 hidden sm:block"></div>

  {/* Stat 3 */}
  <div className="px-8">
    <p className="text-6xl font-bold">
      120<span className="text-xl">cu ft</span>
    </p>
    <p className="text-xl font-medium uppercase text-gray-500 mt-1">
      Total Lockable Storage
    </p>
  </div>
</div>


    {/* Button */}
    <div className="mt-10 justify-start">
      <Link to="/cybertruck/demo-drive">
        <button className="bg-black text-white px-20 py-3 text-xl font-medium rounded-sm hover:bg-gray-900 transition">
          Demo Drive
        </button>
      </Link>
    </div>
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

{/* No Paint, No Chips */}
{/* Image */}
<section className="relative h-screen flex items-center justify-center">
  <div className="relative w-[95%] h-[85%] mx-auto overflow-hidden rounded-xl shadow-lg">
    <img 
      src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-No-Paint-Desktop-v2.png" 
      alt="cybertruck" 
      className="w-full h-full object-cover"
    />
  </div>
</section>

{/* Text */}
<section className="py-16 px-6">
      <div className="text-center">
        <h2 className="text-7xl font-semibold">No Paint, No Chips</h2>
        <p className="text-2xl text-gray-500 mt-2 font-semibold">
        An ultra-hard stainless-steel exoskeleton helps to reduce dents, damage and long-term corrosion.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1700px] items-center mx-auto ">
        {/* Feature 1 */}
        <div className="p-14 bg-gray-100 rounded-lg text-center">
       
          <h3 className="text-4xl font-semibold">Shatter Resistant</h3>
          <p className="text-gray-600 mt-2 text-xl font-medium">
          Armor glass can resist the impact of a baseball at 70 mph or class 4 hail. Acoustic glass helps make the cabin as quiet as outer space.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-14 bg-gray-100 rounded-lg text-center">
          
          <h3 className="text-4xl font-semibold">Dent-Resistant Design</h3>
          <p className="text-gray-600 mt-2 text-xl font-medium">
          We put the toughness on the outside. This exterior is strong and capable of absorbing crash energy to help keep occupants safe.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-14 bg-gray-100 rounded-lg text-center">
         
          <h3 className="text-4xl font-semibold">Extensive Warranty</h3>
          <p className="text-gray-600 mt-2 text-xl font-medium">
          The Battery and Drive Unit come with an eight-year or 150,000 mile warranty—whichever comes first.
          </p>
        </div>
      </div>
</section>
{/*Rugged Outside, Comfortable Inside */}
{/* Image */}
<section className="relative h-screen flex items-center justify-center">
  <div className="relative w-[95%] h-[85%] mx-auto overflow-hidden rounded-xl shadow-lg">
    <img 
      src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Rugged-Outside-Desktop-v2.png" 
      alt="cybertruck" 
      className="w-full h-full object-cover"
    />
  </div>
</section>

{/* Text */}
<section className="py-16 px-6">
      <div className="text-center">
        <h2 className="text-7xl font-semibold">Rugged Outside, Comfortable Inside</h2>
        <p className="text-2xl text-gray-500 mt-2 font-semibold">
        Plenty of room for five adults, with expansive cabin views through an all-glass roof.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1700px] items-center mx-auto ">
        {/* Feature 1 */}
        <div className="p-14 bg-gray-100 rounded-lg text-center p">
       
          <h3 className="text-4xl font-semibold">Next-Generation Adaptive Suspension</h3>
          <p className="text-gray-600 mt-2 text-xl font-medium">
          Delivers up to 12″ of travel with dedicated drive modes for on-road and off-road surfaces. Adapts ride height and suspension tuning to match the driving surface and your driving style.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-[70px] bg-gray-100 rounded-lg text-center">
          
          <h3 className="text-4xl font-semibold">Heated and Cooled Seats</h3>
          <p className="text-gray-600 mt-2 text-xl font-medium">
          Enjoy ventilated front seats and heated seats in both the front and rear. You can adjust seat and cabin heating or cooling from your touchscreen or your Tesla app
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-[75px] bg-gray-100 rounded-lg text-center">
         
          <h3 className="text-4xl font-semibold">Clean Cabin Air</h3>
          <p className="text-gray-600 mt-2 text-xl font-medium">
          Breathe clean air with every climate setting. The HEPA filter can remove up to 99.97% of fine particulate matter and gaseous pollutants, as well as bacteria, viruses, pollen and mold spores.
          </p>
        </div>
      </div>
</section>
{/* As Quiet as Outer Space */}
<section className="relative h-screen flex flex-col items-center justify-center mt-16">
<div className="relative w-[85%] h-[70%] mx-auto overflow-hidden rounded-xl shadow-lg shadow-gray-600">
    <img 
      src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Rugged-Outside-Carousel-Slide-1-Desktop-v2.png" 
      alt="cybertruck" 
      className="w-full h-full object-cover"
    />
  </div>
  {/* Text Below  */}
  <div className="mt-10 text-center max-w-6xl">
    <h2 className="text-7xl font-semibold text-gray-900">As Quiet as Outer Space</h2>
    <p className="mt-2 text-2xl text-gray-600 font-medium">
    360-degree acoustic glass provides unparalleled sound isolation, while an all-glass roof offers a seamless view of the sky. Rejection of UV and infrared light keeps passengers cool—even when the sun is directly overhead.
    </p>
  </div>
</section>
{/* Custom Cabin Lighting */}
<section className="relative h-screen flex flex-col items-center justify-center">
<div className="relative w-[85%] h-[70%] mx-auto overflow-hidden rounded-xl shadow-lg shadow-gray-600">
    <img 
      src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Rugged-Outside-Carousel-Slide-2-Desktop-v2.png" 
      alt="cybertruck" 
      className="w-full h-full object-cover"
    />
  </div>
  {/* Text Below  */}
  <div className="mt-10 text-center max-w-6xl">
    <h2 className="text-7xl font-semibold text-gray-900">Custom Cabin Lighting</h2>
    <p className="mt-2 text-2xl text-gray-600 font-medium">
    Immerse yourself in an otherworldly experience with wrap-around ambient lighting—customizable in endless color options.
    </p>
  </div>
</section>
{/* Features That Only Get Better */}
<div className="max-w-[2000px] mx-auto py-8">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className=""
      >
        {AllFeatures.map((feature, index) => (
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
        <div className="w-[1050px]">
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