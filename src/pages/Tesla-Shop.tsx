import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Navbar from '../components/Shoping/Common/ShopNavbar';
import Footer from '../components/Shoping/Common/ShopFooter';
import BestSellerProducts from '../components/Shoping/Custom/BestSellerProduct';
import Cloths from '../components/Shoping/Custom/Cloths';

const TeslaShop = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  // Add loading animation
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Cybertruck Accessories",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/4Z65LglsywtlS42_web.jpg",
      link: "/category/cybertruck-accessories",
      description: "Enhance your Cybertruck experience with premium accessories"
    },
    {
      title: "Model S Accessories",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_web.jpg",
      link: "/category/model-s-accessories",
      description: "Premium accessories designed for your Model S"
    },
    {
      title: "Model 3 Accessories",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaapp/homepage/M3H_desktop-2800x1300.jpg",
      link: "/category/model-3-accessories",
      description: "Customize your Model 3 with our selection of accessories"
    },
    {
      title: "Model X Accessories",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MX_web.jpg",
      link: "/category/model-x-accessories",
      description: "Elevate your Model X with our premium accessories"
    },
    {
      title: "Model Y Accessories",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/Model_Y_2800x1300.jpg",
      link: "/category/model-y-accessories",
      description: "Complete your Model Y with our curated accessories"
    },
    {
      title: "Charging",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/fvW6NvXGLVYM7kco63br_desktop.jpg",
      link: "/category/charging",
      description: "Power up with our advanced charging solutions"
    },
    {
      title: "Lifestyle",
      image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_web.jpg",
      link: "/category/lifestyle",
      description: "Tesla-inspired apparel and accessories for everyday life"
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen font-universal-sans bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>

      <main className="w-full"> 
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-screen snap-start overflow-hidden"
        >
          {showVideo ? (
            <video
              src="https://digitalassets-shop.tesla.com/video/upload/f_auto,q_auto/v1/content/dam/tesla/abF0uRhidP4hdUBc2Jmir_desktop.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/CT_Crossbars_Desktop_Standard_1400x650.png"
              alt="Cybertruck"
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-center bg-black/30 px-4 pb-10 md:pb-0">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4"
            >
              Cybertruck Crossbars
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button 
                onClick={() => navigate('/category/cybertruck-accessories')}
                className="text-sm sm:text-base bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Shop Now
              </button>
            </motion.div>
          </div>

          {/* Dot switcher */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <span
              onClick={() => setShowVideo(false)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${!showVideo ? 'bg-white' : 'bg-white/50'}`}
            ></span>
            <span
              onClick={() => setShowVideo(true)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${showVideo ? 'bg-white' : 'bg-white/50'}`}
            ></span>
          </div>
        </motion.section>

        {/* Best Seller Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BestSellerProducts />
        </motion.div>

        {/* Accessory Sections */}
        {sections.map(({ title, image, link, description }, index) => (
          <motion.section 
            key={index} 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-screen snap-start"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center bg-black/30 px-4 pb-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2">
                  {title}
                </h2>
                <p className="text-white text-sm md:text-base mb-6 max-w-md mx-auto">
                  {description}
                </p>
                <button 
                  onClick={() => navigate(link)}
                  className="text-sm sm:text-base bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Shop Now
                </button>
              </motion.div>
            </div>
          </motion.section>
        ))}

        {/* Cloths Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Cloths />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeslaShop;
