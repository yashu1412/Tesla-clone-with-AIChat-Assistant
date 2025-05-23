import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import ShopNavbar from '../../Common/ShopNavbar';
import Footer from '../../Common/ShopFooter';

interface Product {
  id: string;
  name: string;
  price: number | string;
  description: string;
  category: string;
  subcategory: string;
  image: string;
  tags?: string[];
}

const VehicleAccessories: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const subcategories = [
    { name: 'Cybertruck', path: 'cybertruck' },
    { name: 'Model S', path: 'model-s' },
    { name: 'Model 3', path: 'model-3' },
    { name: 'Model X', path: 'model-x' },
    { name: 'Model Y', path: 'model-y' }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4001/api/v1/product/category/Vehicle Accessories');
        
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('An error occurred while fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsBySubcategory = (subcategory: string | null) => {
    setActiveSubcategory(subcategory);
  };

  const filteredProducts = activeSubcategory 
    ? products.filter(product => 
        product.subcategory.toLowerCase() === activeSubcategory.toLowerCase()
      )
    : products;

  return (
    <>
      <ShopNavbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Vehicle Accessories</h1>
        
        {/* Subcategory Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 flex-wrap justify-center">
            <button 
              onClick={() => filterProductsBySubcategory(null)}
              className={`px-4 py-2 rounded-md m-1 ${activeSubcategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            {subcategories.map((subcategory) => (
              <button 
                key={subcategory.path}
                onClick={() => filterProductsBySubcategory(subcategory.path)}
                className={`px-4 py-2 rounded-md m-1 ${activeSubcategory === subcategory.path ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 py-8">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link 
                    to={`/product/${product.id}`} 
                    key={product.id}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={product.image || 'https://placehold.co/400x400?text=No+Image'} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-2 text-sm">{product.subcategory}</p>
                        <p className="text-blue-600 font-bold">
                          ${typeof product.price === 'number' 
                            ? product.price.toFixed(2) 
                            : parseFloat(String(product.price)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No vehicle accessories found.</p>
                </div>
              )}
            </div>

            {/* Product Count */}
            <div className="mt-8 text-center text-gray-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default VehicleAccessories;