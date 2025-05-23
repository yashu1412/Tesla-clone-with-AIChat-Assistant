import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

interface DeliveryDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const OrderNowPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productDetails = location.state?.productDetails;
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    // Validate form
    if (!Object.values(deliveryDetails).every(value => value.trim())) {
      toast.error("Please fill in all fields");
      return;
    }

    const amountInPaise = Math.round(productDetails.price * 100);
    const options = {
      key: "rzp_test_GtAHdgxSXQ9u9u",
      amount: amountInPaise,
      currency: "INR",
      name: "Tesla Shop",
      description: `Purchase of ${productDetails.name}`,
      image: "https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon.ico",
      handler: (response: { razorpay_payment_id: string }) => {
        toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate('/payment-success');
      },
      prefill: {
        name: deliveryDetails.fullName,
        email: deliveryDetails.email,
        contact: deliveryDetails.phone
      },
      notes: {
        address: deliveryDetails.address,
        shipping_details: JSON.stringify(deliveryDetails)
      },
      theme: { color: "#000000" }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      toast.error("Failed to initialize payment. Please try again.");
    }
  };

  if (!productDetails) {
    return (
      <>
        <Navbar />
        <div className="pt-24 px-4 min-h-screen">
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-3xl font-semibold mb-4">Invalid Order</h1>
            <p className="mb-8">No product details found.</p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-black text-white rounded"
            >
              Return Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h1 className="text-3xl font-semibold mb-6">Delivery Details</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={deliveryDetails.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={deliveryDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={deliveryDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={deliveryDetails.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={deliveryDetails.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={deliveryDetails.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={deliveryDetails.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <span>{productDetails.name}</span>
                <span className="font-medium">${productDetails.price}</span>
              </div>
              
              <button
                onClick={handlePayment}
                className="w-full mt-6 bg-black text-white py-3 rounded font-medium hover:bg-gray-900 transition-colors"
              >
                Proceed to Payment
              </button>
              
              <p className="text-xs text-center text-red-600 mt-4">
                ⚠️ This is a demo clone project. Do not proceed with actual payments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderNowPage;