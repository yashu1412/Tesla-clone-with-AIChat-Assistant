import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from './Cart/CartContext';
import ShopNavbar from '../Common/ShopNavbar';
import ShopFooter from '../Common/ShopFooter';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// Declare Razorpay as a global type
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (totalPrice <= 0) {
      toast.error("Cannot checkout with empty cart");
      return;
    }

    const amountInPaise = Math.round(totalPrice * 100);
    const options = {
      key: "rzp_test_GtAHdgxSXQ9u9u",
      amount: amountInPaise,
      currency: "INR",
      name: "Tesla Shop",
      description: "Purchase from Tesla Shop",
      image: "https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon.ico",
      handler: (response: { razorpay_payment_id: string }) => {
        toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        clearCart();
        navigate('/payment-success');
      },
      prefill: { name: "", email: "", contact: "" },
      notes: { address: "Tesla Shop" },
      theme: { color: "#000000" },
      modal: { ondismiss: () => toast.error("Payment cancelled") }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      toast.error("Failed to initialize payment. Please try again.");
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <ShopNavbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-24 px-4 min-h-screen bg-[#f4f4f4]"
        >
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-black">Your Cart is Empty</h1>
            <p className="text-gray-700 mb-8 text-base md:text-lg">Looks like you haven’t added any items yet.</p>
            <Button
              onClick={() => navigate('/Tesla-shop')}
              className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wide rounded-md hover:bg-gray-900"
            >
              Continue Shopping
            </Button>
          </div>
        </motion.div>
        <ShopFooter />
      </>
    );
  }

  return (
    <>
      <ShopNavbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-24 px-4 min-h-screen bg-[#f4f4f4]"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-black">Your Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col sm:flex-row items-center border rounded-md bg-white p-4 shadow-sm"
                  >
                    <div className="w-28 h-28 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden mr-0 sm:mr-4 mb-4 sm:mb-0">
                      <img src={item.image} alt={item.name} className="object-contain h-full" />
                    </div>
                    <div className="flex-1 text-left space-y-1 text-sm md:text-base">
                      <h3 className="text-lg font-medium text-black">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 sm:mt-0">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="px-3 py-1 text-gray-700 hover:text-black disabled:opacity-40"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-700 hover:text-black"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <div className="flex justify-between flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/Tesla-shop')}
                  variant="outline"
                  className="border-gray-300 text-gray-800 hover:bg-gray-100"
                >
                  Continue Shopping
                </Button>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-100"
                >
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border rounded-md p-6 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t mt-6 pt-4 text-lg font-semibold flex justify-between">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button
                onClick={handlePayment}
                className="w-full mt-6 bg-black text-white py-3 text-sm tracking-wide uppercase hover:bg-gray-900"
              >
                Pay with Razorpay
              </Button>
              <p className="text-xs text-center text-red-600 mt-4">
                    ⚠️ This is a demo clone project. Do not proceed with actual payments.
              </p>

            </motion.div>
          </div>
        </div>
      </motion.div>
      <ShopFooter />
    </>
  );
};

export default Cart;
