import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ShopNavbar from '../../../Common/ShopNavbar';
import ShopFooter from '../../../Common/ShopFooter';
import { useCart } from '../../Cart/CartContext';
import { toast } from 'sonner';
import { API_BASE_URL } from '../../../../../utils/constants';

interface Product {
  id: string;
  name: string;
  price: number | string; // ✅ SAFE TYPE
  description: string;
  category: string;
  subcategory: string;
  image: string;
}

const Model3: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchModel3 = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${API_BASE_URL}/product/subcategory/Model3`
        );

        if (response.data?.success && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          setError('Failed to load Tesla Model 3 products');
        }
      } catch (error) {
        console.error('Error fetching Tesla Model 3:', error);
        setError('An error occurred while fetching Tesla Model 3');
      } finally {
        setLoading(false);
      }
    };

    fetchModel3();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: String(product.price), // ✅ FORCE NUMBER
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

          {/* ✅ HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              Tesla Model 3
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience premium electric performance with cutting-edge design, speed, and efficiency.
            </p>
          </motion.div>

          {/* ✅ LOADING */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-gray-700" />
            </div>
          ) : error ? (

            /* ✅ ERROR STATE */
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                {error}
              </h2>
              <button
                onClick={() => navigate('/Tesla-shop')}
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Back to Shop
              </button>
            </div>

          ) : products.length === 0 ? (

            /* ✅ EMPTY STATE */
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl text-gray-600">
                No Tesla Model 3 vehicles available at the moment
              </h3>
              <button
                onClick={() => navigate('/Tesla-shop')}
                className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>

          ) : (

            /* ✅ PRODUCT GRID */
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

                    {/* ✅ SAFE PRICE DISPLAY */}
                    <p className="text-blue-600 mb-3">
                      $
                      {product.price
                        ? Number(product.price).toFixed(2)
                        : '0.00'}
                    </p>

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

          {/* ✅ MODEL 3 FEATURE SECTION */}
          {!loading && !error && products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Why Choose Tesla Model 3?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <h3 className="font-medium mb-2">Incredible Range</h3>
                  <p className="text-gray-600 text-sm">
                    Drive farther on a single charge with industry-leading efficiency.
                  </p>
                </div>

                <div className="text-center p-4">
                  <h3 className="font-medium mb-2">Autopilot Ready</h3>
                  <p className="text-gray-600 text-sm">
                    Advanced driver assistance and full-self driving capability.
                  </p>
                </div>

                <div className="text-center p-4">
                  <h3 className="font-medium mb-2">Instant Acceleration</h3>
                  <p className="text-gray-600 text-sm">
                    Electric torque delivers lightning-fast performance.
                  </p>
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

export default Model3;
