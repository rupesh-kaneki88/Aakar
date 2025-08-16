'use client';

import React, { useState } from 'react';
import { ReadOnlyCartItem } from '@/app/components/ReadOnlyCartItem';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/app/components/Loading';
import { useLoading } from '@/app/providers/LoadingProvider';
import { useCart } from '@/app/providers/CartProvider';
import { CartItem } from '@/lib/types';

export default function ShippingAddressPage() {
  const router = useRouter();
  const { isLoading, setIsLoading } = useLoading();
  const { cartItems, getCartTotal } = useCart();

  useEffect(() => {
    // Simulate a network request or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [setIsLoading]);
  

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    address: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing again
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const validateField = (id: string, value: string) => {
    let error = '';
    switch (id) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'name':
        if (!value) error = 'Name is required';
        break;
      case 'address':
        if (!value) error = 'Address is required';
        break;
      case 'country':
        if (!value) error = 'Country is required';
        break;
      case 'state':
        if (!value) error = 'State is required';
        break;
      case 'city':
        if (!value) error = 'City is required';
        break;
      case 'postalCode':
        if (!value) error = 'Postal Code is required';
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(value)) {
          error = 'Invalid 10-digit phone number format';
        }
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [id]: error }));
    return error;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const newErrors: typeof errors = {
      email: '',
      name: '',
      address: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
      phone: '',
    };

    (Object.keys(formData) as Array<keyof typeof formData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        isValid = false;
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      // Proceed to payment page
      router.push('/checkout/payment');
    }
  };

  const subtotal = getCartTotal();

  const shipping = 500; // Mock shipping cost
  const taxRate = 0.18; // Mock tax rate (18%)
  const tax = subtotal * taxRate;
  const payableAmount = subtotal + shipping + tax;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-4 md:mx-[153px] py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#4F482C]">
        Shipping Address
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
            <div className="w-10 h-10 rounded-full border-[1px] border-[#4B3D3480] bg-white flex items-center justify-center text-[#4B3D3480] font-bold text-lg">
              3
            </div>
            <span className="text-[#4B3D3480] text-[15.11px] mt-2">Payment</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Shipping Address Form */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-[18.56px] font-semibold text-[#4F482C] mb-4">Shipping Information</h2>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="email" className="block text-[#4F482C] text-[15.11px] mb-1">Enter Email address</label>
              <Input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.id, e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="name" className="block text-[#4F482C] text-[15.11px] mb-1">Name</label>
              <Input
                type="text"
                id="name"
                placeholder="Full Name"
                className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.name}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.id, e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block text-[#4F482C] text-[15.11px] mb-1">Enter full address</label>
              <textarea
                id="address"
                placeholder="Flat No, Building Name, Street Name, Area"
                rows={4}
                className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.address}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.id, e.target.value)}
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-[#4F482C] text-[15.11px] mb-1">Country</label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Country"
                  className={`w-full p-2 border rounded-md ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.id, e.target.value)}
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
              <div>
                <label htmlFor="state" className="block text-[#4F482C] text-[15.11px] mb-1">State</label>
                <Input
                  type="text"
                  id="state"
                  placeholder="State"
                  className={`w-full p-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.id, e.target.value)}
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-[#4F482C] text-[15.11px] mb-1">City</label>
                <Input
                  type="text"
                  id="city"
                  placeholder="City"
                  className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.id, e.target.value)}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-[#4F482C] text-[15.11px] mb-1">Postal Code</label>
                <Input
                  type="text"
                  id="postalCode"
                  placeholder="Postal Code"
                  className={`w-full p-2 border rounded-md ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.postalCode}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.id, e.target.value)}
                />
                {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#4F482C] text-[15.11px] mb-1">Phone Number</label>
              <Input
                type="tel"
                id="phone"
                placeholder="9876543210"
                className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                value={formData.phone}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.id, e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <Button type="submit" className="w-full bg-[#4B3D34] text-white py-3 rounded-md text-lg mt-6 hover:cursor-pointer">
              Continue to Payment
            </Button>
          </form>
        </div>

        {/* Right: Order Summary (Read-only) */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-[18.56px] font-semibold text-[#4F482C] mb-4">Order Summary</h2>
          <div className="max-h-[400px] overflow-y-auto mb-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
            ) : (
              cartItems.map((item: CartItem) => (
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