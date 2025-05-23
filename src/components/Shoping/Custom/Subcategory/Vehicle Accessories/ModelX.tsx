import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ShopNavbar from '../../../Common/ShopNavbar';
import ShopFooter from '../../../Common/ShopFooter';
import { useCart } from '../../Cart/CartContext';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  subcategory: string;
  image: string;
}

const ModelX: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchModelX = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4001/api/v1/product/subcategory/ModelX');
        
        if (response.data && response.data.success) {
          setProducts(response.data.products);
        } else {
          setError('Failed to load chargers');
        }
      } catch (error) {
        console.error('Error fetching chargers:', error);
        setError('An error occurred while fetching chargers');
      } finally {
        setLoading(false);
      }
    };

    fetchModelX();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <>
      <ShopNavbar />
      <div className="pt-24 px-4 md:px-8 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">Tesla Chargers</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of high-performance charging solutions for your Tesla vehicle.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-gray-700" />
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">{error}</h2>
              <button 
                onClick={() => navigate('/Tesla-shop')}
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Back to Shop
              </button>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl text-gray-600">No chargers available at the moment</h3>
              <button 
                onClick={() => navigate('/Tesla-shop')}
                className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md"
                >
                  <div 
                    className="h-48 bg-gray-100 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full object-contain"
                      />
                    ) : (
                      <div className="text-gray-400">No image</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 
                      className="font-medium text-gray-900 mb-1 truncate cursor-pointer hover:text-gray-700"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-blue-600 mb-3">${product.price}</p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Featured Charger Section */}
          {!loading && !error && products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Tesla Charging?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Fast Charging</h3>
                  <p className="text-gray-600 text-sm">Charge your Tesla in minutes, not hours</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Safe & Reliable</h3>
                  <p className="text-gray-600 text-sm">Built with safety and durability in mind</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Global Network</h3>
                  <p className="text-gray-600 text-sm">Access to Tesla's worldwide charging network</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <ShopFooter />
    </>
  );
};

export default ModelX;