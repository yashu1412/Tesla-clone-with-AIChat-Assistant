import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
import CybertruckVideo2 from '../../../../Assets/cybertruck/Cybertruck-Safety-Desktop-v2.webm'

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
const Features = [
  {
    title: "Full Self-Driving (Supervised)",
    description: "A suite of advanced driver assistance features designed to provide more active guidance and assisted driving under your active supervision.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Safety-Carousel-Slide-1-Desktop-v2.png", // Replace with actual image URLs
  },
  {
    title: "Engineered for Your Safety",
    description: "Active safety features can help reduce impact severity or help prevent accidents altogether. Forward Collision Warning, Active Emergency Braking and Lane Departure Avoidance come standard.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Safety-Carousel-Slide-2-Desktop-v2.png",
  },
  {
    title: "Protect Your Truck",
    description: "Enable Sentry Mode to monitor your unattended vehicle or trailer, and automatically activate the alarm, increase the touchscreen brightness and play music at max volume if a threat is detected.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Safety-Carousel-Slide-3-Desktop-v2.png",
  },
];
const AllFeatures = [
  {
    title: "Access From Anywhere",
    description: "Remotely control and monitor your Tesla with Phone Key keyless driving, range and charging status, climate control, live GPS location and more.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-1-Desktop-v2.png", 
  },
  {
    title: "Freedom to Travel",
    description: "Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-2-Desktop-v2.png",
  },
  {
    title: "Dual HD Touchscreens",
    description: "An extra-large 18.5″ display provides 4X HD quality for our best in-car gaming and entertainment experience yet. A 9.4″ rear display supports backseat controls.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-3-Desktop-v2.png",
  },
  {
    title: "Tesla Arcade",
    description: "Play games on your in-car touchscreen.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-4-Desktop-v2.png", // Replace with actual image URLs
  },
  {
    title: "Media",
    description: "Stream from any of your preferred media apps to enjoy your favorite movies, music and audio.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-5-Desktop-v2.png",
  },
  {
    title: "Comfort and Safety Modes",
    description: "Dog Mode maintains a comfortable cabin temperature so your pet is safe while you’re away. Camp Mode keeps your cabin cozy while car camping. Sentry Mode monitors any wild behavior around your vehicle.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-6-Desktop-v2.png",
  },
  {
    title: "Studio-Quality Sound",
    description: "Features 15 speakers, including dual subwoofers, and high-voltage digital amplifiers for each speaker. Dual microphones enable crystal-clear call quality.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Features-Carousel-Slide-7-Desktop-v2.png",
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    consent: false
  });

  const handleOrderNow = () => {
    navigate('/order-now', {
      state: {
        productDetails: {
          id: 'cybertruck-2024',
          name: 'Tesla Cybertruck',
          price: 60990 // Base price for Cybertruck
        }
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="w-full min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full">
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Hero-Desktop-v2.png"
          alt="Tesla Cybertruck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Overlay */}
        <div className="absolute top-[15%] w-full text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white font-tesla tracking-wider">CYBERTRUCK</h1>
          <h2 className="text-base md:text-lg text-white mt-4 font-tesla-light">
            $7,500 Federal Tax Credit at Purchase
          </h2>
        </div>

        {/* Buttons */}
        <div className="absolute top-[30%] w-full flex flex-col md:flex-row justify-center gap-4 px-4">
          <button 
            onClick={handleOrderNow}
            className="w-full md:w-auto bg-blue-600 text-white px-8 md:px-12 py-2 md:py-3 rounded-md text-base md:text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Order Now
          </button>
          <Link to="/cybertruck/demo-drive">
            <button className="w-full md:w-auto bg-white text-black px-8 md:px-12 py-2 md:py-3 rounded-md text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Demo Drive
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-10 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-white text-center px-4">
          <div>
            <p className="text-2xl md:text-3xl font-tesla font-semibold">5-Star</p>
            <p className="text-base md:text-lg font-tesla-light">Safety Ratings</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-tesla font-semibold">325 mi</p>
            <p className="text-base md:text-lg font-tesla-light">Est. Range</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-tesla font-semibold">6'x4'</p>
            <p className="text-base md:text-lg font-tesla-light">Lockable Bed</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-screen flex items-center justify-center bg-white py-8 px-4">
        <div className="relative w-full md:w-[90%] h-[50vh] md:h-[65vh] mx-auto overflow-hidden shadow-xl shadow-gray-700 rounded-lg">
          <video
            src={CybertruckVideo}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </section>

{/* Text and Stats Section */}
<section className="px-4 py-12 bg-white">
  <div className="max-w-[1400px] mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-tesla font-semibold text-black mb-4">
      Beyond Prepared
    </h2>
    <p className="text-base sm:text-lg text-gray-600 font-tesla-light mx-auto mb-8 max-w-3xl">
      Haul everything you need with 2,500 pounds payload and 11,000 pounds towing capacity—the equivalent of an average African elephant. The super-tough composite bed doesn't need a liner and is big enough for 4'x8' construction materials.
    </p>

 {/* Stats */}
<div className="flex flex-row justify-center items-center text-black text-center flex-wrap gap-8">
  {/* Stat 1 */}
  <div className="px-6">
    <p className="text-3xl sm:text-4xl font-bold">
      2.6<span className="text-base">s</span>
    </p>
    <p className="text-base font-medium uppercase text-gray-500 mt-1">
      0-60 mph*
    </p>
  </div>

  {/* Divider */}
  <div className="w-[1px] h-12 bg-gray-300"></div>

  {/* Stat 2 */}
  <div className="px-6">
    <p className="text-4xl font-bold">
      11,000<span className="text-base">lbs</span>
    </p>
    <p className="text-base font-medium uppercase text-gray-500 mt-1">
      Towing Capacity
    </p>
  </div>

  {/* Divider */}
  <div className="w-[1px] h-12 bg-gray-300"></div>

  {/* Stat 3 */}
  <div className="px-6">
    <p className="text-4xl font-bold">
      120<span className="text-base">cu ft</span>
    </p>
    <p className="text-base font-medium uppercase text-gray-500 mt-1">
      Total Lockable Storage
    </p>
  </div>
</div>

    {/* Button */}
    <div className="mt-10 justify-start">
      <Link to="/cybertruck/demo-drive">
        <button className="bg-black text-white px-16 py-2 text-base font-medium rounded-sm hover:bg-gray-900 transition">
          Demo Drive
        </button>
      </Link>
    </div>
  </div>
</section>

        {/* Car-feature */}
        <div className="max-w-[1900px] mx-auto py-8">
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
                        <h2 className="text-4xl font-bold">{feature.title}</h2>
                        <p className="text-gray-500 font-medium text-xl">{feature.description}</p>
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
                <h2 className="text-4xl font-semibold">No Paint, No Chips</h2>
                <p className="text-xl text-gray-500 mt-2 font-medium">
                An ultra-hard stainless-steel exoskeleton helps to reduce dents, damage and long-term corrosion.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1700px] items-center mx-auto ">
                {/* Feature 1 */}
                <div className="p-10 bg-gray-100 rounded-lg text-center">
               
                  <h3 className="text-3xl font-semibold">Shatter Resistant</h3>
                  <p className="text-gray-600 mt-2 text-xl font-medium">
                  Armor glass can resist the impact of a baseball at 70 mph or class 4 hail. Acoustic glass helps make the cabin as quiet as outer space.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-12 bg-gray-100 rounded-lg text-center">
                  
                  <h3 className="text-3xl font-semibold">Dent-Resistant Design</h3>
                  <p className="text-gray-600 mt-2 text-xl font-medium">
                  We put the toughness on the outside. This exterior is strong and capable of absorbing crash energy to help keep occupants safe.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-10 bg-gray-100 rounded-lg text-center">
                 
                  <h3 className="text-3xl font-semibold">Extensive Warranty</h3>
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
                <h2 className="text-4xl font-semibold">Rugged Outside, Comfortable Inside</h2>
                <p className="text-xl text-gray-500 mt-2 font-medium">
                Plenty of room for five adults, with expansive cabin views through an all-glass roof.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1700px] items-center mx-auto ">
                {/* Feature 1 */}
                <div className="p-10 bg-gray-100 rounded-lg text-center p">
               
                  <h3 className="text-3xl font-semibold">Next-Generation Adaptive Suspension</h3>
                  <p className="text-gray-600 mt-2 text-xl font-medium">
                  Delivers up to 12″ of travel with dedicated drive modes for on-road and off-road surfaces. Adapts ride height and suspension tuning to match the driving surface and your driving style.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-[70px] bg-gray-100 rounded-lg text-center">
                  
                  <h3 className="text-3xl font-semibold">Heated and Cooled Seats</h3>
                  <p className="text-gray-600 mt-2 text-xl font-medium">
                  Enjoy ventilated front seats and heated seats in both the front and rear. You can adjust seat and cabin heating or cooling from your touchscreen or your Tesla app
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-[75px] bg-gray-100 rounded-lg text-center">
                 
                  <h3 className="text-3xl font-semibold">Clean Cabin Air</h3>
                  <p className="text-gray-600 mt-2 text-xl font-medium">
                  Breathe clean air with every climate setting. The HEPA filter can remove up to 99.97% of fine particulate matter and gaseous pollutants, as well as bacteria, viruses, pollen and mold spores.
                  </p>
                </div>
              </div>
        </section>
        {/* As Quiet as Outer Space */}
        <section className="relative h-screen flex flex-col items-center justify-center mt-12">
        <div className="relative w-[80%] h-[65%] mx-auto overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Rugged-Outside-Carousel-Slide-1-Desktop-v2.png" 
              alt="cybertruck" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Below  */}
          <div className="mt-10 text-center max-w-6xl">
            <h2 className="text-5xl font-semibold text-gray-900">As Quiet as Outer Space</h2>
            <p className="mt-2 text-xl text-gray-600 font-medium">
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
            <h2 className="text-5xl font-semibold text-gray-900">Custom Cabin Lighting</h2>
            <p className="mt-2 text-xl text-gray-600 font-medium">
            Immerse yourself in an otherworldly experience with wrap-around ambient lighting—customizable in endless color options.
            </p>
          </div>
        </section>
        {/* Features That Only Get Better */}
        <div className="max-w-[1800px] mx-auto py-8">
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
                        <h2 className="text-4xl font-bold">{feature.title}</h2>
                        <p className="text-gray-500 font-medium text-xl">{feature.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>

        {/* Video Section */}
        <section className="relative h-screen flex flex-col items-center justify-center bg-white">
          {/* Video */}
          <div className="relative w-[90%] h-[70%] mx-auto overflow-hidden shadow-xl shadow-gray-700">
            <video
              src={CybertruckVideo2}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full text-center mt-12 px-4 md:px-0 max-w-[1900px]">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4">
              Designed to Be the Safest Truck on the Road
            </h2>
            <p className="text-gray-600 text-base font-semibold md:text-xl max-w-7xl mx-auto leading-relaxed">
              With a low center of gravity, impact-absorbing castings and the lowest probability of rollover
              for any truck tested by NHTSA, Cybertruck has earned a five-star overall safety rating.{' '}
              <a href="#" className="underline hover:text-black">Learn More</a>
            </p>

            {/* Stars */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex gap-1 text-yellow-500 text-xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 fill-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl font-semibold">Overall NHTSA Safety Rating</p>
            </div>
          </div>
        </section>


        {/* Car-feature */}
        <div className="max-w-[1900px] mx-auto py-8">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                className=""
              >
                {Features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative  overflow-hidden">
                      <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
                      <div className="p-6 bg-white">
                        <h2 className="text-4xl font-bold">{feature.title}</h2>
                        <p className="text-gray-500 font-medium text-xl">{feature.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
        {/* Power Anything With Cybertruck */}
        <div className="bg-[#161616] text-white">
          {/* HERO IMAGE */}
          <div className="relative w-full max-w-[1800px] mx-auto overflow-hidden mt-10">
            <img
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Power-Anything-Desktop-v2.png"
              alt="Power Anything With Cybertruck"
              className="w-full object-cover h-auto rounded-xl"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="max-w-7xl mx-auto text-center px-6 py-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Power Anything With Cybertruck
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Powershare allows you to draw up to 11.5 kW of continuous energy directly from Cybertruck. Home backup requires Universal Wall Connector with Powerwall or Powershare Gateway. No additional hardware is needed to use onboard outlets.
            </p>
          </div>

          {/* FEATURE STATS */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6 pb-20">
            {/* Item 1 */}
            <div>
              <h3 className="text-2xl font-bold">3 <span className="font-normal">Days</span></h3>
              <p className="mt-2 text-gray-300 text-sm font-medium">
                Power Your Home Through an Outage<sup className="text-xs align-super">6</sup>
              </p>
              <button className="mt-6 px-6 py-2 bg-white text-black text-sm font-semibold hover:bg-gray-200 transition">
                Learn More
              </button>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-2xl font-bold">240<span className="text-lg ml-1">v</span></h3>
              <p className="mt-2 text-gray-300 text-sm font-medium">
                Charge Another EV Adding Up to 30 Miles of Range per Hour
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-2xl font-bold">5 <span className="font-normal">Outlets</span></h3>
              <p className="mt-2 text-gray-300 text-sm font-medium">
                Use to Power Tools and Devices
              </p>
            </div>
          </div>
        </div>
        {/*  Cybertruck Specs */}
        <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-2xl md:text-5xl font-semibold mb-10">Cybertruck Specs</h1>

                {/* Drive & Performance Section */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium mb-8">Performance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Range (est.)</p>
                      <p>320 miles</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Range (+Range Extender)</p>
                      <p>440+ miles</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Acceleration</p>
                      <p>2.6 sec 0-60 mph</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Drive</p>
                      <p>All-Wheel Drive</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Top Speed</p>
                      <p>130 mph</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Towing</p>
                      <p>11,000 lbs</p>
                    </div>
                  </div>
                </div>

                {/* Dimensions Section */}
                <div className="mb-16 border-t border-gray-800 pt-16">
                  <h2 className="text-2xl font-medium mb-8">Dimensions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Weight</p>
                      <p>6,898 lbs</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Cargo</p>
                      <p>120.9 cu ft</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Wheels</p>
                      <p>20"</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Seating</p>
                      <p>5 Adults</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Displays</p>
                      <p>18.5" Center Touchscreen<br/>9.4" Rear Touchscreen</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Ground Clearance</p>
                      <p>16" in Extract Mode</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Overall Width</p>
                      <p>Folded mirrors: 86.6"<br/>Extended mirrors: 95"</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Overall Height</p>
                      <p>70.5"</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Overall Length</p>
                      <p>223.7"</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <img
                      src="https://digitalassets.tesla.com/tesla-contents/image/upload/Cybertruck-Specs-Imperial-Desktop-Mobile.png"
                      alt="Cybertruck Dimensions"
                      className="w-full max-w-md"
                    />
                  </div>
                </div>

                {/* Charging Section */}
                <div className="mb-16 border-t border-gray-800 pt-16">
                  <h2 className="text-2xl font-medium mb-8">Charging</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Supercharging Max/Payment Type</p>
                      <p>325 kW Max; Pay Per Use</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Charging Speed</p>
                      <p>Up to 135 miles added in 15 minutes</p>
                    </div>
                  </div>
                </div>

                {/* Warranty Section */}
                <div className="mb-16 border-t border-gray-800 pt-16">
                  <h2 className="text-2xl font-medium mb-8">Warranty</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Basic Vehicle</p>
                      <p>4 years or 50,000 mi, whichever comes first</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-base font-normal mb-1">Battery & Drive Unit</p>
                      <p>8 years or 150,000 mi, whichever comes first</p>
                    </div>
                  </div>
                </div>

                {/* Other Section */}
                <div className="mb-16 border-t border-gray-800 pt-16 text-base font-normal space-y-2">
                  <a href="#" className="underline">Owner's Manual</a><br />
                  <a href="#" className="underline">Cybertruck Off-Road Guide</a>
                </div>

                {/* Footnotes */}
                <div className="text-base font-normal text-gray-400 mt-12 space-y-4">
                  <p>1. Tesla does not guarantee funding availability or eligibility. Consult your tax advisor.</p>
                  <p>2. Government 5-Star Safety Ratings are from NHTSA's New Car Assessment Program (<a href="https://www.safercar.gov" className="underline">www.SaferCar.gov</a>).</p>
                  <p>3. All-Wheel Drive</p>
                  <p>4. Cyberbeast, with rollout subtracted</p>
                  <p>5. Estimate based on 30 kWh energy use per day. Actual results may vary.</p>
                </div>
              </div>
            </div>
{/* Last Section */}
<div className="relative w-full h-screen">
  {/* Background Image */}
  <img 
    src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-End-of-Page-Desktop-v4.png"
    alt="Tesla Model Y" 
    className="w-full h-full object-cover"
  />

  {/* Text Content + Buttons */}
  <div className="absolute top-[15%] w-full text-center flex flex-col items-center gap-4">
    <h1 className="text-7xl font-bold uppercase text-white">cybertruck</h1>
  
    
    {/* Buttons */}
    <div className="flex gap-4 mt-4">
    <button 
            onClick={handleOrderNow}
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-2  rounded-md text-base font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Order Now
          </button>
      <Link to="/cybertruck/demo-drive">
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