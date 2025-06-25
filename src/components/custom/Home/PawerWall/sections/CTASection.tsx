import React from 'react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
const CTASection: React.FC = () => {
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
  return (
    <Section id="cta" className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/powering-on-desktop"
        alt="Solar Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Power Everything
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-10">
        Order now or schedule a call with a Tesla Advisor to learn more. Get Energy Updates
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
          onClick={handleOrderNow}
          >Order PowerWall 3</Button>
          <Button
          href='https://www.tesla.com/solar-virtual-consultations' variant="outline">Schedule a Call</Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
