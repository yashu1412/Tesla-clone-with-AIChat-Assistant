import React, { useState } from 'react';

const videoFeatureData = [
  {
    title: 'Optimizes Route',
    description: 'Finds the best route to avoid traffic and charge if needed.',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Carousel-2-Optimize-Desktop-LHD.jpg', // Replace with actual image paths
  },
  {
    title: 'Measures Battery',
    description: 'Gives real-time battery estimates based on your driving style.',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Carousel-2-Battery-Desktop-LHD.jpg',
  },
  {
    title: 'Recommends Chargers',
    description: 'Offers charging location recommendations along your route.',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Charging-Carousel-2-Recommend-Desktop-LHD.jpg',
  },
];

const FeatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white pt-12">
      {/* Image Display */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <img
          src={videoFeatureData[activeIndex].image}
          alt={videoFeatureData[activeIndex].title}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 py-12">
        {videoFeatureData.map((feature, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer border-t-4 pt-4 transition-all duration-300 ${
              activeIndex === index
                ? 'border-black text-black font-semibold'
                : 'border-gray-300 text-gray-400'
            }`}
          >
            <h3 className="text-lg mb-1">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
