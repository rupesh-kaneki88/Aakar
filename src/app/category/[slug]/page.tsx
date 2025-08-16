'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import { toast } from 'sonner';
import { gsap } from 'gsap';
import { useWishlist } from '@/app/providers/WishlistProvider';
import Loading from '@/app/components/Loading';
import Sidebar from '@/app/components/Sidebar';
import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { Product } from '@/lib/types';
import { mockProducts } from '@/lib/mockProducts';

const PRODUCTS_PER_PAGE = 9;

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryTitle = (slug as string)?.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const { addItem: addWishlistItem, removeItem: removeWishlistItem, isInWishlist } = useWishlist();

  const fetchProducts = useCallback(async (currentPage: number) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    const filteredProducts = mockProducts.filter(product => product.category === slug);
    const newProducts = filteredProducts.slice(
      currentPage * PRODUCTS_PER_PAGE,
      (currentPage + 1) * PRODUCTS_PER_PAGE
    );

    setProducts(prevProducts => [...prevProducts, ...newProducts]);
    setHasMore(filteredProducts.length > (currentPage + 1) * PRODUCTS_PER_PAGE);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    setProducts([]); // Clear products when slug changes
    setPage(0); // Reset page when slug changes
    setHasMore(true); // Reset hasMore when slug changes
    fetchProducts(0);
  }, [slug, fetchProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500 && !loading && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    if (page > 0) {
      fetchProducts(page);
    }
  }, [page, fetchProducts]);

  return (
    <div className="bg-[#F6F7F8] flex flex-col rounded-[15.11px] overflow-hidden overflow-x-hidden relative md:mx-[53px] mx-auto px-4 py-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#4F482C]">{categoryTitle}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.length === 0 && !loading ? (
            <div className="col-span-full flex flex-col items-center justify-center w-full h-[400px]">
              <p className="text-center text-gray-400 text-2xl font-bold italic mb-4">
                Stay tuned
              </p>
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src="/empty-cart.webp"
                  alt="empty cart image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            products.map((product, index) => (
              <div key={product.id} className={`flex-1 ${index < products.length - 1 ? " md:border-b-0 " : ""}`}>
                <div className="bg-white overflow-hidden flex flex-col gap-4 md:gap-[22.67px] p-4 md:p-[22.67px]">
                  <div className="relative w-full h-[300px] md:h-[468px] overflow-hidden">
                    <Link key={product.id} href={`/product/${product.id}`} className="group" onClick={() => setLoading(true)}>
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <p className="text-center">Take a look</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-[10.58px]">
                    <Link key={product.id} href={`/product/${product.id}`} className="group" onClick={() => setLoading(true)}>
                      <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] [font-family:'Akatab',Helvetica] tracking-[0] mt-[-0.76px]">
                        {product.name}
                      </h3>
                    </Link>
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
                          e.preventDefault(); // Prevent navigating to product page
                          if (isInWishlist(product.id)) {
                            removeWishlistItem(product.id);
                            toast.info(`${product.name} removed from wishlist.`);
                          } else {
                            addWishlistItem(product);
                            toast.success(`${product.name} added to wishlist.`);
                          }
                        }}
                        className="w-6 h-6 md:w-8 md:h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-200 ease-in-out transform hover:scale-110"
                      >
                        <HeartIcon 
                          className="!w-5 !h-5"
                          aria-hidden="true"
                          ref={(el) => {
                            if (el) {
                              gsap.to(el, { 
                                fill: isInWishlist(product.id) ? "#4b3d34" : "none", 
                                duration: 0.3, 
                                ease: "power2.out" 
                              });
                            }
                          }}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
          )))}
        </div>
      </div>

      {loading && <Loading />}

      {!hasMore && products.length > 0 && (
        <p className="text-center text-gray-500 mt-8">You have reached the end of the collection.</p>
      )}
    </div>
  );
}