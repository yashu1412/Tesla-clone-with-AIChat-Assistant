import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface PaymentDetails {
  paymentId: string;
  orderId?: string;
  signature?: string;
  amount: number;
  date: Date;
  items: CartItem[];
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  processPayment: (paymentId: string, items: CartItem[], amount: number) => void;
  paymentHistory: PaymentDetails[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentHistory, setPaymentHistory] = useState<PaymentDetails[]>([]);

  // Load cart and payment history from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('teslaCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing saved cart:', error);
      }
    }

    const savedPaymentHistory = localStorage.getItem('teslaPaymentHistory');
    if (savedPaymentHistory) {
      try {
        setPaymentHistory(JSON.parse(savedPaymentHistory));
      } catch (error) {
        console.error('Error parsing payment history:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('teslaCart', JSON.stringify(cartItems));
    
    // Calculate totals
    const items = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(items);
    
    const price = cartItems.reduce((sum, item) => {
      return sum + (parseFloat(item.price) * item.quantity);
    }, 0);
    setTotalPrice(price);
  }, [cartItems]);

  // Save payment history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('teslaPaymentHistory', JSON.stringify(paymentHistory));
  }, [paymentHistory]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        toast.success(`Updated ${item.name} quantity in cart`);
        return updatedItems;
      } else {
        // Item doesn't exist, add it
        toast.success(`${item.name} added to cart`);
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        toast.success(`${itemToRemove.name} removed from cart`);
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart cleared');
  };

  const processPayment = (paymentId: string, items: CartItem[], amount: number) => {
    // In a real application, you would send this data to your backend
    // For now, we'll just store it locally
    const paymentDetails: PaymentDetails = {
      paymentId,
      amount,
      date: new Date(),
      items: [...items]
    };

    setPaymentHistory(prev => [paymentDetails, ...prev]);
    
    // You could also clear the cart here if you want
    // clearCart();
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      processPayment,
      paymentHistory
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
