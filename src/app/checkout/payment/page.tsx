'use client';

import React, { useState } from 'react';
import { ReadOnlyCartItem } from '@/app/components/ReadOnlyCartItem';
import { Button } from '@/app/components/ui/Button';
import Link from 'next/link';
import { useEffect } from 'react';
import Loading from '@/app/components/Loading';
import { useLoading } from '@/app/providers/LoadingProvider';
import { useCart } from '@/app/providers/CartProvider';

export default function PaymentPage() {
  const { isLoading, setIsLoading } = useLoading();
  const { cartItems, getCartTotal } = useCart();

  useEffect(() => {
    // Simulate a network request or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [setIsLoading]);
  

  const subtotal = getCartTotal();

  const shipping = 500; // Mock shipping cost
  const taxRate = 0.18; // Mock tax rate (18%)
  const tax = subtotal * taxRate;
  const payableAmount = subtotal + shipping + tax;

  // Dummy address data for display (will be replaced by actual data in a real app)
  const dummyAddress = {
    email: 'john.doe@example.com',
    name: 'John Doe',
    address: 'Flat No. 101, Building A, Main Street, Example Area',
    country: 'India',
    state: 'Maharashtra',
    city: 'Mumbai',
    postalCode: '400001',
    phone: '9876543210',
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-4 md:mx-[153px] py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#4F482C]">
        Payment
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
            <div className="w-10 h-10 rounded-full bg-[#4B3D34] flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <span className="text-[#4B3D34] text-[15.11px] mt-2">Address</span>
          </div>

          {/* Step 3: Payment */}
          <div className="flex flex-col items-center z-10">
            <div className="w-10 h-10 rounded-full bg-[#4B3D34] flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <span className="text-[#4B3D34] text-[15.11px] mt-2">Payment</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Shipping Address Display and Place Order Button */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-[18.56px] font-semibold text-[#4F482C] mb-4">Shipping Address</h2>
          <div className="border-b border-[#6E695580] pb-4 mb-4">
            <p className="text-[#4F482C] text-[15.11px] mb-1">{dummyAddress.name}</p>
            <p className="text-[#4F482C] text-[15.11px] mb-1">{dummyAddress.address}</p>
            <p className="text-[#4F482C] text-[15.11px] mb-1">{dummyAddress.city}, {dummyAddress.state} {dummyAddress.postalCode}</p>
            <p className="text-[#4F482C] text-[15.11px] mb-1">{dummyAddress.country}</p>
            <p className="text-[#4F482C] text-[15.11px] mb-1">Phone: {dummyAddress.phone}</p>
            <p className="text-[#4F482C] text-[15.11px]">Email: {dummyAddress.email}</p>
          </div>
          <Button className="w-full bg-[#4B3D34] text-white py-3 rounded-md text-lg mt-6 cursor-pointer">
            Place Order
          </Button>
        </div>

        {/* Right: Order Summary (Read-only) */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-[18.56px] font-semibold text-[#4F482C] mb-4">Order Summary</h2>
          <div className="max-h-[400px] overflow-y-auto mb-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <ReadOnlyCartItem key={item.id} item={item} />
              ))
            )}
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-[#000000] text-[15.11px]">SUBTOTAL</span>
            <span className="text-[#000000] text-[15.11px]">₹ {subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#000000] text-[15.11px]">SHIPPING</span>
            <span className="text-[#000000] text-[15.11px]">₹ {shipping.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
            <span className="text-[#000000] text-[15.11px]">TAX</span>
            <span className="text-[#000000] text-[15.11px]">₹ {tax.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#000000] text-[18.56px] font-bold">PAYABLE AMOUNT</span>
            <span className="text-[#000000] text-[18.56px] font-bold">₹ {payableAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
}