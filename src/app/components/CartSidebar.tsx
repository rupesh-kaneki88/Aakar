'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import Link from 'next/link';
import { useCart } from '@/app/providers/CartProvider';
import { CartSidebarProps } from '@/lib/types';

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeItem, updateQuantity, getCartTotal } = useCart();

  const handleQuantityChange = (id: string, selectedColor: string, selectedSize: string, delta: number) => {
    const item = cartItems.find(i => i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize);
    if (item) {
      updateQuantity(id, selectedColor, selectedSize, item.quantity + delta);
    }
  };

  const handleRemoveItem = (id: string, selectedColor: string, selectedSize: string) => {
    removeItem(id, selectedColor, selectedSize);
  };

  const subtotal = getCartTotal();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          w-screen lg:w-[428px] z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-[#4F482C]">YOUR SHOPPING BAG</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-[#4F482C]" />
          </Button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Your bag is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center space-x-4 py-4 mb-8">
                <div className="relative w-[135px] h-[200px] flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between h-[200px]">
                  <div>
                    <h3 className="font-medium text-[#4F482C] text-[18.56px] leading-tight mb-1">
                      {item.name}
                    </h3>
                    <p className="font-medium text-[#4F482C] text-[18.56px] mb-2">{item.price}</p>
                    <p className="text-[15.11px] text-[#000000]">Color: {item.selectedColor}</p>
                    <p className="text-[15.11px] text-[#000000]">Size: {item.selectedSize}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-300 rounded-none">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#4B3D34] bg-[#DFE5E5] rounded-none"
                        onClick={() => handleQuantityChange(item.id, item.selectedColor, item.selectedSize, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-[#4B3D34] bg-[#DFE5E5] rounded-none"
                        onClick={() => handleQuantityChange(item.id, item.selectedColor, item.selectedSize, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="text-[#4B3D34]">
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-[#4B3D34]"
                        onClick={() => handleRemoveItem(item.id, item.selectedColor, item.selectedSize)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        {cartItems.length > 0 && (
          <div className="bg-[#DFE5E5] absolute bottom-0 left-0 right-0 p-4 border-t">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#000000] text-[18.56px] font-semibold">Total</span>
              <span className="text-[#000000] text-[18.56px] font-semibold">₹ {subtotal.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-[#000000] text-[15.11px] mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Button asChild className="w-full bg-[#4B3D34] text-white py-7 rounded-md text-lg">
              <Link href="/checkout/cart" onClick={onClose}>
                Go to Cart
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
