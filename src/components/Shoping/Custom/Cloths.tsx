import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: "Men's Apparel",
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Men_web.jpg',
    link: '/category/mens-apparel',
  },
  {
    name: "Women's Apparel",
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Women_web.jpg',
    link: '/category/womens-apparel',
  },
  {
    name: "Kids' Apparel",
    image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/Kids_web-1440x900.png',
    link: '/category/kids-apparel',
  },
];

const ApparelCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-full max-w-xs h-auto object-contain mb-6"
            />
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <button
              onClick={() => navigate(category.link)}
              className="px-5 py-2 border border-black hover:bg-black hover:text-white transition-colors rounded"
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApparelCategories;
