import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import ShopNavbar from '../Common/ShopNavbar';
import ShopFooter from '../Common/ShopFooter';
import { Loader2 } from 'lucide-react';
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

interface Subcategory {
  id: string;
  name: string;
  description: string;
  category_name: string;
}

const SubcategoryPage: React.FC = () => {
  const { subcategoryId } = useParams<{ subcategoryId: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubcategoryAndProducts = async () => {
      setLoading(true);
      try {
        // First fetch the subcategory details
        const subcategoryResponse = await axios.get(`http://localhost:4001/api/v1/subcategory/single/${subcategoryId}`);
        if (subcategoryResponse.data && subcategoryResponse.data.success) {
          setSubcategory(subcategoryResponse.data.subCategory);
          
          // Then fetch all products
          const productsResponse = await axios.get('http://localhost:4001/api/v1/product/getAll');
          
          // Filter products by subcategory
          const filteredProducts = productsResponse.data.filter(
            (product: Product) => product.subcategory === subcategoryResponse.data.subCategory.name
          );
          
          setProducts(filteredProducts);
        } else {
          setError('Subcategory not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load subcategory and products');
        toast.error('Failed to load subcategory and products');
      } finally {
        setLoading(false);
      }
    };

    if (subcategoryId) {
      fetchSubcategoryAndProducts();
    }
  }, [subcategoryId]);

  return (
    <>
      <ShopNavbar />
      <div className="pt-24 px-4 md:px-8 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
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
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-3xl md:text-4xl font-semibold mb-3">{subcategory?.name}</h1>
                {subcategory?.description && (
                  <p className="text-gray-600 max-w-3xl mx-auto">{subcategory.description}</p>
                )}
                <p className="text-sm text-gray-500 mt-2">Category: {subcategory?.category_name}</p>
              </motion.div>

              {products.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl text-gray-600">No products found in this subcategory</h3>
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
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md cursor-pointer"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
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
                        <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
                        <p className="text-blue-600">${product.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
      <ShopFooter />
    </>
  );
};

export default SubcategoryPage;