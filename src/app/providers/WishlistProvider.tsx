'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, WishlistItem, WishlistContextType } from '@/lib/types';
import { toast } from 'sonner';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem('aakaar_wishlist');
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever wishlistItems changes
  useEffect(() => {
    localStorage.setItem('aakaar_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addItem = (item: Product) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);

      if (existingItem) {
        toast.info(`${item.name} is already in your wishlist.`);
        return prevItems;
      } else {
        toast.success(`${item.name} added to wishlist.`);
        return [...prevItems, { ...item }];
      }
    });
  };

  const removeItem = (id: string) => {
    setWishlistItems(prevItems => {
      const removedItem = prevItems.find(item => item.id === id);
      if (removedItem) {
        toast.info(`${removedItem.name} removed from wishlist.`);
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addItem,
        removeItem,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}