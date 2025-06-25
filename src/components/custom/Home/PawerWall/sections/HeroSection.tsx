import type React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
      const navigate = useNavigate();
    
      const handleOrderNow = () => {
        navigate('/order-now', {
          state: {
            productDetails: {
              id: 'powerwall-3-2024',
              name: 'Tesla PowerWall 3',
              price: 8400 // Base price for PowerWall 3
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
      <img
  src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/powerwall-hero-01-desktop"
  alt="Tesla Powerwall Background"
  className="absolute inset-0 w-full h-full object-cover"
/>


      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col h-full justify-between pt-32 pb-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-medium mb-2">PowerWall</h1>
          <p className="text-xl mb-8">Whole-Home Backup, 24/7</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
          onClick={handleOrderNow}
          className="min-w-[240px]">Order Now</Button>
          <Button variant="outline" className="min-w-[240px]">Order With Solar</Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
