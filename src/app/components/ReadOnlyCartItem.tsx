'use client';

import React from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  color: string;
  size: string;
  quantity: number;
}

interface ReadOnlyCartItemProps {
  item: CartItem;
}

export function ReadOnlyCartItem({ item }: ReadOnlyCartItemProps) {
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="relative w-[135px] h-[200px] flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="rounded-md object-cover rounded-none"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between h-[200px]">
        <div>
          <h3 className="font-medium text-[#4F482C] text-[18.56px] leading-tight mb-1">
            {item.name}
          </h3>
          <p className="font-medium text-[#4F482C] text-[18.56px] mb-2">{item.price}</p>
          <p className="text-[15.11px] text-[#000000]">Color: {item.color}</p>
          <p className="text-[15.11px] text-[#000000]">Size: {item.size}</p>
          <p className="text-[15.11px] text-[#000000]">Quantity: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
}
