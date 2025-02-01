import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = { cart, addToCart, removeFromCart, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
