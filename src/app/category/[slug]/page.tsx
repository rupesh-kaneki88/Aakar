'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import Loading from '@/app/components/Loading';
import Sidebar from '@/app/components/Sidebar';
import { Button } from '@/app/components/ui/Button';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  category: string;
  color: string;
}

// Mock data for demonstration
const mockProducts: Product[] = [
  { id: '1', name: 'Elegant Straight Suit', imageUrl: '/straight-suits/IMG_01.svg', price: '₹ 15,000', category: 'straight-suits', color:'Ivory' },
  { id: '2', name: 'Floral Straight Suit', imageUrl: '/straight-suits/IMG_02.svg', price: '₹ 18,000', category: 'straight-suits', color:'Ivory' },
  { id: '3', name: 'Embroidered Straight Suit', imageUrl: '/straight-suits/IMG_03.svg', price: '₹ 22,000', category: 'straight-suits', color:'Ivory' },
  { id: '4', name: 'Classic Straight Suit', imageUrl: '/straight-suits/IMG_04.svg', price: '₹ 16,500', category: 'straight-suits', color:'Ivory' },
  { id: '5', name: 'Modern Straight Suit', imageUrl: '/straight-suits/IMG_05.svg', price: '₹ 19,500', category: 'straight-suits', color:'Ivory' },
  { id: '6', name: 'Party Wear Straight Suit', imageUrl: '/straight-suits/IMG_06.svg', price: '₹ 25,000', category: 'straight-suits', color:'Ivory' },
  { id: '7', name: 'Casual Straight Suit', imageUrl: '/straight-suits/IMG_07.svg', price: '₹ 14,000', category: 'straight-suits', color:'Ivory' },
  { id: '8', name: 'Designer Straight Suit', imageUrl: '/straight-suits/IMG_08.svg', price: '₹ 28,000', category: 'straight-suits', color:'Ivory' },
  { id: '9', name: 'Simple Straight Suit', imageUrl: '/straight-suits/IMG_09.svg', price: '₹ 13,500', category: 'straight-suits', color:'Ivory' },
  { id: '10', name: 'Anarkali Gown', imageUrl: '/anarkali.jpg', price: '₹ 30,000', category: 'anarkalis', color:'Ivory' },
  { id: '11', name: 'Anarkali Dress', imageUrl: '/anarkali.jpg', price: '₹ 27,000', category: 'anarkalis', color:'Ivory' },
  { id: '12', name: 'Anarkali Frock', imageUrl: '/anarkali.jpg', price: '₹ 29,000', category: 'anarkalis', color:'Ivory' },
];

const PRODUCTS_PER_PAGE = 9;

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryTitle = (slug as string)?.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

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
    <div className="bg-white flex flex-col rounded-[15.11px] overflow-hidden overflow-x-hidden relative md:mx-[53px] mx-auto px-4 py-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#4F482C]">{categoryTitle}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product, index) => (
            <div key={product.id} className={`flex-1 ${index < products.length - 1 ? " md:border-b-0 " : ""}`}>
              <div className="bg-white overflow-hidden flex flex-col gap-4 md:gap-[22.67px] p-4 md:p-[22.67px]">
                <div className="relative w-full h-[300px] md:h-[468px]">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
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
                      onClick={() => alert(`Added ${product.name} to wishlist!`)}
                      className="w-6 h-6 md:w-8 md:h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                      <HeartIcon className="!w-5 !h-5 text-[#4b3d34]" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {loading && <Loading />}

      {!hasMore && products.length > 0 && (
        <p className="text-center text-gray-500 mt-8">You have reached the end of the collection.</p>
      )}
    </div>
  );
}