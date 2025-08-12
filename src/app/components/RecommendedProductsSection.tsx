'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';

interface RecommendedProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  color: string;
}

const mockRecommendedProducts: RecommendedProduct[] = [
  {
    id: 'elegant-straight-suit',
    name: 'Elegant Straight Suit',
    imageUrl: '/straight-suits/IMG_01.svg',
    price: '₹ 15,000',
    color: 'Ivory',
  },
  {
    id: 'floral-straight-suit',
    name: 'Floral Straight Suit',
    imageUrl: '/straight-suits/IMG_02.svg',
    price: '₹ 18,000',
    color: 'Ivory',
  },
  {
    id: 'embroidered-straight-suit',
    name: 'Embroidered Straight Suit',
    imageUrl: '/straight-suits/IMG_03.svg',
    price: '₹ 22,000',
    color: 'Ivory',
  },
];

export function RecommendedProductsSection() {
  return (
    <section className="w-full mt-8 md:mt-16" aria-labelledby="recommended-products-heading">
      <h2 id="recommended-products-heading" className="text-4xl font-bold text-[#4F482C] text-center mb-8">
        You may also like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {mockRecommendedProducts.slice(0, 3).map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <div className="flex-1">
              <div className="bg-white overflow-hidden flex flex-col gap-4 md:gap-[22.67px] p-4 md:p-[22.67px]">
                <div className="relative w-full h-[300px] md:h-[468px] overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <p className="text-center">Take a look</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-[10.58px]">
                  <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] [font-family:'Akatab',Helvetica] tracking-[0] mt-[-0.76px]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 md:gap-[6.05px]">
                      <span className="[font-family:'Akatab',Helvetica] font-normal text-[#81807E] text-xs md:text-[13.6px] leading-[15px] md:leading-[20.4px]">
                        Color
                      </span>
                      <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                      <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                        {product.color}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-[6.05px]">
                      <span className="[font-family:'Akatab',Helvetica] font-normal text-[#81807E] text-xs md:text-[13.6px] leading-[15px] md:leading-[20.4px]">
                        Price
                      </span>
                      <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                      <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                        {product.price}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent navigation
                        alert(`Added ${product.name} to wishlist!`);
                      }}
                      className="w-6 h-6 md:w-8 md:h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                      <HeartIcon className="!w-5 !h-5 text-[#4b3d34]" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
