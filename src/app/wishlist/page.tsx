'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HeartIcon, XIcon, ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { Product } from '@/lib/types';
import { useWishlist } from '@/app/providers/WishlistProvider';
import { useCart } from '@/app/providers/CartProvider';
import Sidebar from '@/app/components/Sidebar';
import Loading from '@/app/components/Loading';

export default function WishlistPage() {
  const { wishlistItems, removeItem } = useWishlist();
  const { addItem: addCartItem } = useCart();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed
  }, []);

  const handleRemoveFromWishlist = (id: string) => {
    removeItem(id);
  };

  const handleAddToCartFromWishlist = (product: Product) => {
    addCartItem(product, 1, product.colors[0]?.name || '', product.sizes[0] || '');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#F6F7F8] flex flex-col rounded-[15.11px] overflow-hidden overflow-x-hidden relative md:mx-[53px] mx-auto px-4 py-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#4F482C]">Your Wishlist</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {wishlistItems.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center w-full h-[400px]">
              <p className="text-center text-gray-400 text-2xl font-bold italic mb-4">
                Your wishlist is empty
              </p>
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src="/empty-cart.webp"
                  alt="empty cart image"
                  fill
                  className="object-cover"
                />
              </div>
              <Link href="/whats-new" className="text-[#4B3D34] underline mt-2 block">Start browsing</Link>
          </div>
          ) : (
            wishlistItems.map((product, index) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className={`flex-1 ${index < wishlistItems.length - 1 ? " md:border-b-0 " : ""}`}>
                  <div className="bg-white overflow-hidden flex flex-col gap-4 md:gap-[22.67px] p-4 md:p-[22.67px]">
                    <div className="relative w-full h-[300px] md:h-[468px] overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Remove from wishlist"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent navigating to product page
                            handleRemoveFromWishlist(product.id);
                          }}
                          className="w-8 h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary bg-white rounded-full"
                        >
                          <XIcon className="!w-5 !h-5 text-red-500" aria-hidden="true" />
                        </Button>
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
                            {product.colors[0]?.name}
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
                          aria-label="Add to cart"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent navigating to product page
                            handleAddToCartFromWishlist(product);
                          }}
                          className="w-6 h-6 md:w-8 md:h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        >
                          <ShoppingBagIcon className="!w-5 !h-5 text-[#4b3d34]" aria-hidden="true" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )))}
        </div>
      </div>
    </div>
  );
}