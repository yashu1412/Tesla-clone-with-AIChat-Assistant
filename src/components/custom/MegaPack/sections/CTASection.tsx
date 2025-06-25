import React from 'react';
import Section from './Section';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
const CTASection: React.FC = () => {
      const navigate = useNavigate();
    
      const handleOrderNow = () => {
        navigate('/order-now', {
          state: {
            productDetails: {
              id: 'megapack-2024',
              name: 'Tesla Megapack',
              price: 123000 // Base price for Megapack
            }
          }
        });
      };
  return (
    <Section id="cta" className="bg-black text-white py-32 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Build a Cleaner Grid
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mb-8">
          Contact us for more information.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
          onClick={handleOrderNow}
            variant="outline"
            className="w-56 border-white text-white hover:bg-white "
          >
            Order Now
          </Button>
          <Button 
            onClick={() => navigate('/help-me')}
            className="w-56 bg-neutral-800 text-black hover:text-white hover:bg-neutral-700"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
