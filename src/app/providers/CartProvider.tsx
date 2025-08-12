
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, CartItem, CartContextType } from '@/lib/types';
import { toast } from 'sonner';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('aakaar_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('aakaar_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item: Product, quantity: number, selectedColor: string, selectedSize: string) => {
    let message = '';
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.selectedColor === selectedColor && i.selectedSize === selectedSize
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = prevItems.map((i, index) =>
          index === existingItemIndex
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
        message = `${quantity} more of ${item.name} added to cart. Total: ${prevItems[existingItemIndex].quantity + quantity}`;
        return updatedItems;
      } else {
        // New item
        message = `${item.name} added to cart.`;
        return [...prevItems, { ...item, quantity, selectedColor, selectedSize }];
      }
    });
    toast.success(message);
  };

  const removeItem = (id: string, selectedColor: string, selectedSize: string) => {
    setCartItems(prevItems => {
      const removedItem = prevItems.find(
        (item) => item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize
      );
      if (removedItem) {
        toast.info(`${removedItem.name} removed from cart.`);
      }
      return prevItems.filter(
        (item) => !(item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize)
      );
    });
  };

  const updateQuantity = (id: string, selectedColor: string, selectedSize: string, quantity: number) => {
    let updatedItemName = '';
    let newQuantity = 0;
    setCartItems(prevItems =>
      prevItems.map((i) => {
        if (i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize) {
          updatedItemName = i.name;
          newQuantity = Math.max(1, quantity);
          return { ...i, quantity: newQuantity };
        }
        return i;
      })
    );
    if (updatedItemName) {
      toast.info(`Quantity for ${updatedItemName} updated to ${newQuantity}.`);
    }
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        getCartItemCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
