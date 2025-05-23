import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { useCart } from './Cart/CartContext';

import Navbar from '../Common/ShopNavbar';
import Footer from '../Common/ShopFooter';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  includes: string;
  category: string;
  subcategory: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/v1/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product) return;
      try {
        const response = await axios.get(`http://localhost:4001/api/v1/product/getAll`);
        if (response.data && Array.isArray(response.data)) {
          const filtered = response.data.filter((p: Product) => 
            p.subcategory === product.subcategory && p.id !== product.id
          ).slice(0, 4);
          setRelatedProducts(filtered);
        } else {
          console.error('Invalid response format for related products');
        }
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    
    toast.success(`${quantity}x ${product.name} added to cart`);
  };

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="p-10 text-center">
          <p className="text-lg">Loading product details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-10 text-center">
          <p className="text-lg">Product not found</p>
          <button
            onClick={() => navigate('/Tesla-shop')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
          >
            Back to Shop
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 md:px-8 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg max-h-[500px] object-contain bg-gray-100 p-4"
                />
              ) : (
                <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <span>No Image Available</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
              <p className="text-2xl text-blue-600 font-medium mb-4">${product.price}</p>
              <hr className="my-4" />

              <h2 className="text-xl font-medium mb-2">Description</h2>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <h2 className="text-xl font-medium mb-2">Features</h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{product.includes}</p>

              <div className="space-y-2 mb-6">
                <div className="flex gap-4">
                  <span className="text-gray-500">Category:</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-500">Subcategory:</span>
                  <span>{product.subcategory}</span>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-6">
                <p className="mb-2 font-medium">Quantity</p>
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={decrementQty}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-lg rounded"
                  >
                    -
                  </button>
                  <span className="min-w-[30px] text-center">{quantity}</span>
                  <button
                    onClick={incrementQty}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-lg rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
            {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relProduct => (
                  <div 
                    key={relProduct.id} 
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      navigate(`/product/${relProduct.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="h-40 flex items-center justify-center mb-4">
                      {relProduct.image ? (
                        <img 
                          src={relProduct.image} 
                          alt={relProduct.name} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium truncate">{relProduct.name}</h3>
                    <p className="text-blue-600">${relProduct.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No related products found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
