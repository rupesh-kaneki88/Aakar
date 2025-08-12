'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Minus, Trash2, Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { CartItem } from '@/lib/types';

interface CartItemDisplayProps {
  item: CartItem;
  onQuantityChange: (id: string, color: string, size: string, delta: number) => void;
  onRemoveItem: (id: string, color: string, size: string) => void;
}

export function CartItemDisplay({ item, onQuantityChange, onRemoveItem }: CartItemDisplayProps) {
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="relative w-[135px] h-[200px] flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
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
          <div className="flex items-center border border-gray-300 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#4B3D34]"
              onClick={() => onQuantityChange(item.id, item.selectedColor, item.selectedSize, -1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-3 text-sm font-medium">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#4B3D34]"
              onClick={() => onQuantityChange(item.id, item.selectedColor, item.selectedSize, 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-[#4B3D34]">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#4B3D34]"
              onClick={() => onRemoveItem(item.id, item.selectedColor, item.selectedSize)}
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
