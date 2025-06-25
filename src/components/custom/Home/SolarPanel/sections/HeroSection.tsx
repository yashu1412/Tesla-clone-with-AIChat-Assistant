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
          id: 'solar-panels-2024',
          name: 'Tesla Solar Panels',
          price: 12000 // Base price for solar panels
        }
      }
    });
  };

  const handleScheduleConsultation = () => {
    window.location.href = 'https://www.tesla.com/solar-virtual-consultations?poi=solarpanels';
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
        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-panels-hero-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col h-full justify-between pt-32 pb-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-medium mb-2">Solar Panels</h1>
          <p className="text-xl mb-8">Save on Energy, Power Your Home</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="min-w-[240px]"
            onClick={handleOrderNow}
          >
            Order Now
          </Button>
          <Button 
            variant="outline" 
            className="min-w-[240px]"
            onClick={handleScheduleConsultation}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
