import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShopNavbar from '../../Common/ShopNavbar';
import ShopFooter from '../../Common/ShopFooter';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <ShopNavbar />
      <div className="pt-24 px-4 md:px-6 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto text-center py-16">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-3xl font-semibold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully processed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => navigate('/Tesla-shop')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Continue Shopping
            </Button>
            <Button 
              onClick={() => navigate('/order-history')}
              variant="outline"
              className="border-gray-300"
            >
              View Order History
            </Button>
          </div>
        </div>
      </div>
      <ShopFooter />
    </>
  );
};

export default PaymentSuccess;