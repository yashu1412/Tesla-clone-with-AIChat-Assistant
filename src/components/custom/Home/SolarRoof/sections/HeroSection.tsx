import type React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../layout/Section';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order-now', {
      state: {
        productDetails: {
          id: 'solar-roof-2024',
          name: 'Tesla Solar Roof',
          price: 15000 // Base price for solar roof
        }
      }
    });
  };

  const handleScheduleConsultation = () => {
    window.location.href = 'https://www.tesla.com/solar-virtual-consultations?poi=solarroof';
  };

  return (
    <Section id="hero" className="relative text-white overflow-hidden h-screen">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Solar-Roof-Hero-Desktop-new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col h-full justify-between pt-20 pb-8 sm:pb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">Solar Roof</h1>
        </div>

        <div className="flex flex-col gap-8">
          {/* Features Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base">
            <div className="flex flex-col text-xl sm:text-2xl font-normal italic text-gray-200 items-center">
              <span className="text-2xl sm:text-3xl mb-2">🌞</span>
              <span>Beautiful</span>
              <span>Solar</span>
            </div>
            <div className="flex flex-col items-center text-xl sm:text-2xl font-normal italic text-gray-200 ">
              <span className="text-2xl sm:text-3xl mb-2">🏠</span>
              <span>25-Year</span>
              <span>Tile Warranty</span>
            </div>
            <div className="flex flex-col items-center text-xl sm:text-2xl font-normal italic text-gray-200 ">
              <span className="text-2xl sm:text-3xl mb-2">🛡️</span>
              <span>24/7</span>
              <span>Outage Protection</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={handleOrderNow}
              variant="outline" 
              className="min-w-[200px] text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              Order Now
            </Button>
            <Button 
              onClick={handleScheduleConsultation}
              variant="outline" 
              className="min-w-[200px] text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
