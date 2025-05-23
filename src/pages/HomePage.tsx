import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// files
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ChatbotIcon from '../components/Chat-bot/ChatbotIcon';
// assets
import Model3Image from '../Assets/Homepage-Model-3-Desktop-US.jpg';
import ModelyImage from '../Assets/Homepage-Model-Y-2-Hero-Desktop-APAC-LHD.jpg';
import CyberTruck from '../Assets/Homepage-Cybertruck-Desktop-v3.jpg';
import CyberTruckText from '../Assets/cybtertruckText.png';
import ModelXImage from '../Assets/Homepage-Model-X-Desktop-US.jpg';
import ModelSImage from '../Assets/Homepage-Model-S-Desktop-US.jpg';
import SolarPanel from '../Assets/Homepage-SolarPanels-01-Desktop.jpg';
import SolarRoof from '../Assets/Homepage-SolarRoof-Desktop-US.jpg';
import PowerWall from '../Assets/Homepage-Powerwall-Desktop-US.jpg';
import Accessories from '../Assets/Homepage-Accessories-Desktop-US.jpg';
import TeslaVideo from '../Assets/teslaVideo.mp4';

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = (productId: string, productName: string, price: number) => {
    navigate('/order-now', {
      state: {
        productDetails: {
          id: productId,
          name: productName,
          price: price
        }
      }
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen font-universal-sans">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>

      <main className="w-full">
        {/* Model 3 Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={Model3Image} 
            alt="Tesla Model 3" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Model 3</h1>
              <p className="text-lg md:text-2xl text-white/90">$7,500 Federal Tax Credit</p>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <button 
                onClick={() => handleOrderNow('model3', 'Tesla Model 3', 39990)}
                className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300"
              >
                Order Now
              </button>
              <Link to="/model3" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Model Y Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={ModelyImage} 
            alt="Tesla Model Y" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Model Y</h1>
              <p className="text-lg md:text-2xl text-white/90">From $39,390*</p>
              <p className="text-sm md:text-base text-white/80 mt-1">After Federal Tax Credit & Est. Gas Savings</p>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <button 
                onClick={() => handleOrderNow('modely', 'Tesla Model Y', 39390)}
                className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300"
              >
                Order Now
              </button>
              <Link to="/modely" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Cybertruck Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={CyberTruck} 
            alt="Tesla Cybertruck" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="mt-[12vh] md:mt-[15vh] w-full max-w-[400px] mx-auto px-6">
              <img 
                src={CyberTruckText} 
                alt="Cybertruck" 
                className="w-full h-auto"
              />
            </div>
            <p className="mt-4 text-lg md:text-2xl text-white underline">1.99% APR Ending March 31</p>
            <div className="mt-auto mb-[8vh] w-full flex flex-col items-center gap-6">
              <div className="text-center">
                <p className="text-2xl text-white mb-1">★★★★★</p>
                <p className="text-sm md:text-base text-white/90">Overall NHTSA Safety Rating</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 px-6 w-full md:w-auto">
                <button 
                  onClick={() => handleOrderNow('cybertruck', 'Tesla Cybertruck', 60990)}
                  className="w-full md:w-[264px] bg-[#171A20] text-white px-6 py-2 rounded font-medium hover:bg-[#171A20]/90 transition-all duration-300"
                >
                  Order Now
                </button>
                <Link to="/cybertruck" className="w-full md:w-auto">
                  <button className="w-full md:w-[264px] bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded font-medium hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections with updated handleAddToCart calls */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={ModelXImage} 
            alt="Tesla Model X" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Model X</h1>
              <p className="text-lg md:text-2xl text-white/90">Free Supercharging</p>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <button 
                onClick={() => handleOrderNow('modelx', 'Tesla Model X', 79990)}
                className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300"
              >
                Order Now
              </button>
              <Link to="/modelx" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Model S Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={ModelSImage} 
            alt="Tesla Model S" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Model S</h1>
              <p className="text-lg md:text-2xl text-white/90">Free Supercharging</p>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <Link to="/models/design" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300"
                onClick={() => handleOrderNow('models', 'Tesla Model S',40000 )}>
                  Order Now
                </button>
              </Link>
              <Link to="/models" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solar Panels Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={SolarPanel} 
            alt="Tesla Solar Panels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Solar Panels</h1>
              <p className="text-lg md:text-2xl text-white/90 underline cursor-pointer hover:text-white transition-colors">
                Schedule a Virtual Consultation
              </p>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <Link to="/energy/design" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300"
                onClick={() => handleOrderNow('solar-panels', 'Tesla Solar Panels', 39390)}>
                  Order Now
                </button>
              </Link>
              <Link to="/solar-panels" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solar Roof Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={SolarRoof} 
            alt="Tesla Solar Roof" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Solar Roof</h1>
              <p className="text-lg md:text-2xl text-white/90">Produce Clean Energy From Your Roof</p>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <Link to="/solarroof/design" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300"
                onClick={() => handleOrderNow('solarroof', 'Tesla Solar Roof', 40000)}>
                  Order Now
                </button>
              </Link>
              <Link to="/solarroof" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Powerwall Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={PowerWall} 
            alt="Tesla Powerwall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Powerwall</h1>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
              <Link to="/powerwall/design" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300"
                onClick={() => handleOrderNow('powerwall', 'Tesla Powerwall', 39390)}>
                  Order Now
                </button>
              </Link>
              <Link to="/powerwall" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-white/70 backdrop-blur-sm text-black px-6 py-2 rounded font-medium hover:bg-white/80 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="relative w-full h-screen snap-start">
          <img 
            src={Accessories} 
            alt="Tesla Accessories" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center bg-black/20">
            <div className="mt-[15vh] md:mt-[20vh] text-center px-6">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">Accessories</h1>
            </div>
            <div className="mt-auto mb-[8vh] w-full flex justify-center px-6">
              <Link to="/tesla-shop" className="w-full md:w-auto">
                <button className="w-full md:w-[264px] bg-black/70 backdrop-blur-sm text-white px-6 py-2 rounded font-medium hover:bg-black/80 transition-all duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* We are Tesla Video Section */}
        <section className="relative w-full h-screen snap-start">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={TeslaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-8">We are Tesla</h1>
            {/* <Link  className="w-full md:w-auto px-6"> */}
              <button className="w-full md:w-[264px] bg-transparent border-2 border-white text-white px-6 py-2 rounded font-medium hover:bg-white hover:text-black transition-all duration-300">
                Join Tesla
              </button>
            {/* </Link> */}
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotIcon />
    </div>
  );
};

export default Home;

