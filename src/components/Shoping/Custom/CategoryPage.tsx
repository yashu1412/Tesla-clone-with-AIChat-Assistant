import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import ShopNavbar from '../Common/ShopNavbar';
import ShopFooter from '../Common/ShopFooter';
import ProductCard from './ProductCard';
import { API_BASE_URL } from '../../../utils/constants';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  subcategory: string;
  image: string;
}

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Format category name for display
  const formatCategoryName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayName = categoryName ? formatCategoryName(categoryName) : '';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/product/getAll`);
        
        // Filter products by category
        let filteredProducts = response.data;
        
        if (categoryName) {
          // Convert category name from URL format to match database format
          const categoryFormatted = categoryName.replace(/-/g, ' ');
          
          filteredProducts = response.data.filter((product: Product) => {
            // Check if product category or subcategory contains the category name
            return (
              product.category.toLowerCase().includes(categoryFormatted.toLowerCase()) ||
              product.subcategory.toLowerCase().includes(categoryFormatted.toLowerCase())
            );
          });
        }
        
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <>
      <ShopNavbar />
      <div className="pt-24 px-4 md:px-8 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-center">{displayName}</h1>
            <p className="text-gray-600 text-center mb-10">
              Discover our collection of premium {displayName.toLowerCase()}
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : products.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <ShopFooter />
    </>
  );
};

export default CategoryPage;