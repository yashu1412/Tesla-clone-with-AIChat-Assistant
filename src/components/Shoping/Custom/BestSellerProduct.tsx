import React, { useState } from 'react';

const products = [
  {
    name: 'Model 3/Y Air Filter',
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg',
  },
  {
    name: 'Air Compressor + Tire Repair Kit 3.0',
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1934882-00-A_00_2000.png',
  },
  {
    name: 'Tesla Bot Action Figure',
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/2080682-00-A-1-01.png',
  },
  {
    name: 'Wall Connector',
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1457768-02-H_01_2000.png',
  },
];

const BestSellersSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProducts = products.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < products.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="px-6 py-10 w-full">
      <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>
      <div className="relative flex items-center">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 disabled:opacity-30"
          disabled={startIndex === 0}
        >
          &#8592;
        </button>

        {/* Product Cards */}
        <div className="flex gap-6 overflow-hidden w-full justify-center">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="w-72 transition-transform hover:scale-105"
            >
              <img src={product.image} alt={product.name} className="w-full h-72 object-contain bg-gray-100" />
              <p className="text-center mt-4 font-medium">{product.name}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 disabled:opacity-30"
          disabled={startIndex >= products.length - 3}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default BestSellersSlider;
