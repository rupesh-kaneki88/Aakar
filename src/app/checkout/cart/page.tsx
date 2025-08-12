'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import { CartItemDisplay } from '@/app/components/CartItemDisplay';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import Link from 'next/link';
import { useLoading } from '@/app/providers/LoadingProvider';

interface CartItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  color: string;
  size: string;
  quantity: number;
}

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Elegant Straight Suit',
    price: '₹ 15,000',
    imageUrl: '/straight-suits/IMG_01.svg',
    color: 'Ivory',
    size: 'M',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Floral Straight Suit',
    price: '₹ 18,000',
    imageUrl: '/straight-suits/IMG_02.svg',
    color: 'Black',
    size: 'L',
    quantity: 2,
  },
  {
    id: '3',
    name: 'Embroidered Straight Suit',
    price: '₹ 22,000',
    imageUrl: '/straight-suits/IMG_03.svg',
    color: 'Red',
    size: 'S',
    quantity: 1,
  },
];

const parsePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
};

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const { isLoading, setIsLoading } = useLoading();

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity;
  }, 0);

  const shipping = 500; // Mock shipping cost
  const taxRate = 0.18; // Mock tax rate (18%)
  const tax = subtotal * taxRate;
  const payableAmount = subtotal + shipping + tax;

  const handleProceedToCheckout = () => {
    setIsLoading(true);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-4 md:mx-[153px] py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#4F482C]">
            Shopping Cart
          </h1>

          {/* Step Indicator */}
          <div className="flex justify-center mb-8">
            <div className="w-[442px] h-[82px] flex items-center justify-between relative">
              {/* Line */} 
              <div className="absolute left-[20px] right-[20px] top-[23px] h-[1px] bg-[#4B3D3480] z-0"></div>

              {/* Step 1: Cart */}
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 rounded-full bg-[#4B3D34] flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <span className="text-[#4B3D34] text-[15.11px] mt-2">Cart</span>
              </div>

              {/* Step 2: Address */}
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 rounded-full border-[1px] border-[#4B3D3480] bg-white flex items-center justify-center text-[#4B3D3480] font-bold text-lg">
                  2
                </div>
                <span className="text-[#4B3D3480] text-[15.11px] mt-2">Address</span>
              </div>

              {/* Step 3: Payment */}
              <div className="flex flex-col items-center z-10">
                <div className="w-10 h-10 rounded-full border-[1px] border-[#4B3D3480] bg-white flex items-center justify-center text-[#4B3D3480] font-bold text-lg">
                  3
                </div>
                <span className="text-[#4B3D3480] text-[15.11px] mt-2">Payment</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Product Display */}
            <div className="flex-1 p-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
              ) : (
                cartItems.map(item => (
                  <CartItemDisplay
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemoveItem={handleRemoveItem}
                  />
                ))
              )}
            </div>

            {/* Right: Order Summary */}
            <div className="w-full lg:w-2/4 p-4 lg:p-10 lg:mx-8 lg:ml-30">
              <h2 className="text-[18.56px] font-semibold text-[#4F482C] mb-3">Order Summary</h2>

              <div className="flex justify-between items-center mb-1">
                <span className="text-[#000000] text-[15.11px]">SUBTOTAL</span>
                <span className="text-[#000000] text-[15.11px]">₹ {subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#000000] text-[15.11px]">SHIPPING</span>
                <span className="text-[#000000] text-[15.11px]">₹ {shipping.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
                <span className="text-[#000000] text-[15.11px]">TAX</span>
                <span className="text-[#000000] text-[15.11px]">₹ {tax.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-[#000000] text-[18.56px] font-bold">PAYABLE AMOUNT</span>
                <span className="text-[#000000] text-[18.56px] font-bold">₹ {payableAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex mb-4">
                <Input
                  type="text"
                  placeholder="Apply Coupon"
                  className="flex-1 bg-[#F6F7F8] text-[#4F482C80] text-[15.11px] p-2 rounded-none border-none focus:ring-0"
                />
                <Button className="bg-[#B8A893] text-white text-[15.11px] px-4 py-2 rounded-none">
                  APPLY
                </Button>
              </div>

              <Button asChild className="w-full bg-[#4B3D34] text-white py-3 rounded-md text-lg"
                onClick={handleProceedToCheckout}
              >
                <Link href="/checkout/address">
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
