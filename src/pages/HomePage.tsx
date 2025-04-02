import React from 'react';
import { Link } from "react-router-dom";
// files
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
// asstes
import Model3Image from '../Assets/Homepage-Model-3-Desktop-US.jpg'; // Ensure correct path
import ModelyImage from '../Assets/Homepage-Model-Y-2-Hero-Desktop-APAC-LHD.jpg';
import CyberTruck from '../Assets/Homepage-Cybertruck-Desktop-v3.jpg';
import CyberTruckText from '../Assets/cybtertruckText.png';
import ModelXImage from '../Assets/Homepage-Model-X-Desktop-US.jpg';
import ModelSImage from '../Assets/Homepage-Model-S-Desktop-US.jpg';
import SolarPanel from '../Assets/Homepage-SolarPanels-01-Desktop.jpg';
import SolarRoof from '../Assets/Homepage-SolarRoof-Desktop-US.jpg'
import PowerWall from '../Assets/Homepage-Powerwall-Desktop-US.jpg'
import Accessories from '../Assets/Homepage-Accessories-Desktop-US.jpg'
import TeslaVideo from '../Assets/teslaVideo.mp4'
const Home = () => {
  return (
    <div className="flex flex-col items-center">
            {/* Navbar should be positioned on top of the image */}
            <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <Navbar />
  <div className='w-full'>
   {/* Modal 3 */}
   <div className="relative w-full h-screen">
        <img 
          src={Model3Image} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[25%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Model 3</h1>
          <h1 className="text-2xl font-semibold text-white ">$7,500 Federal Tax Credit at Purchase</h1>
        </div>

            {/* Buttons */}
            <div className="absolute bottom-[60%] w-full flex justify-center gap-4 front-roboto">
            <Link to="/model3/order-now">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
                Order Now
              </button>
            </Link>
            <Link to="/model3/learn-more">
              <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
                Learn More
              </button>
            </Link>
          </div>
    </div>
       {/* Modal y */}
   <div className="relative w-full h-screen">
        <img 
          src={ModelyImage} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[25%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Model Y</h1>
          <h1 className="text-2xl font-semibold text-white ">$7,500 Federal Tax Credit at Purchase</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* cybertruck */}
          <div className="relative w-full h-screen">
        <img 
          src={CyberTruck} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />
        {/* Content Overlay */}
        <div className="absolute top-[27%] w-full text-center">
          <h1 className="text-2xl font-semibold text-white underline">1.99% APR Ending March 31</h1>
        </div>

        {/* Content Overlay */}
        <div className="absolute top-[14%] w-full flex-col justify-between items-center">
        <img 
          src={CyberTruckText} 
          alt="Tesla Model 3" 
          className="w-[400px] h-[110px] object-cover text-center translate-x-[150%] "
        />
        </div>

{/* Buttons */}
<div className="absolute bottom-[5%] w-full flex flex-col items-center gap-4 font-roboto">
  <div className="flex flex-col items-center">
    <h1 className="text-2xl font-semibold text-white ">☆ ☆ ☆ ☆ ☆</h1>
    <h1 className="text-base font-normal text-white">Overall NHTSA Safety Rating</h1>
  </div>
  <div className='space-x-4'>
  <button className="bg-black text-gray-500 px-20 py-2 text-base font-medium hover:bg-gray-100">
    Order Now
  </button>
  <button className="bg-black text-gray-500 px-20 py-2 text-base font-medium hover:bg-gray-100">
    Learn More
  </button>
  </div>
</div>

          </div>
                 {/* Modal X */}
        <div className="relative w-full h-screen">
        <img 
          src={ModelXImage} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[25%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Model X</h1>
          <h1 className="text-2xl font-semibold text-white ">Free Supercharging Included</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* Modal S */}
          <div className="relative w-full h-screen">
        <img 
          src={ModelSImage} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[25%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Model S</h1>
          <h1 className="text-2xl font-semibold text-white ">Free Supercharging Included</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* Solar Panel */}
          <div className="relative w-full h-screen">
        <img 
          src={SolarPanel} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[15%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Solar Panel</h1>
          <h1 className="text-2xl font-semibold text-white underline ">Schedule a Virtual Consultation</h1>
          
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* SolarRoof */}
          <div className="relative w-full h-screen">
        <img 
          src={SolarRoof} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[25%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Solar Roof</h1>
          <h1 className="text-2xl font-semibold text-white  ">Produce Clean Energy From Your Roof</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* Power wall */}
          <div className="relative w-full h-screen">
        <img 
          src={PowerWall} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[15%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Power Wall</h1>
          
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* Accessories */}
          <div className="relative w-full h-screen">
        <img 
          src={Accessories} 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-[15%] w-full text-center">
          <h1 className="text-5xl font-bold text-white">Accessories</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[5%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Order Now
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
            Learn More
          </button>
        </div>
   </div>
          {/* We are Tesla video */}
          <div className="relative w-full h-screen">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={TeslaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        {/* Content Overlay */}
        <div className=''>
        <div className="absolute top-[25%] w-full text-center ">
          <h1 className="text-5xl font-bold text-white">We are Tesla</h1>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[60%] w-full flex justify-center gap-4 front-roboto">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Join Tesla
          </button>
        </div>
        </div>
   </div>
  </div>
  <Footer />
    </div>
  );
};

export default Home;
