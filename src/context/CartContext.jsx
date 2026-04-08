import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

// Provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // TODO: Implement addToCart function
  const addToCart = (product) => {
    // Copy your logic from App.jsx
  };
  
  // TODO: Implement removeFromCart function
  const removeFromCart = (productId) => {
    // Copy your logic from App.jsx
  };
  
  // TODO: Implement updateQuantity function
  const updateQuantity = (productId, newQuantity) => {
    // Copy your logic from App.jsx
  };
  
  // TODO: Implement toggleCart function
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  // TODO: Implement getTotalItems function
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  // TODO: Implement getTotalPrice function
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // Value object to provide to consumers
  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    getTotalItems,
    getTotalPrice
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}