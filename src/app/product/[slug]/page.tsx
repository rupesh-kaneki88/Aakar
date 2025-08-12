'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { Separator } from '@/app/components/ui/Separator';
import Loading from '@/app/components/Loading';
import { useLoading } from '@/app/providers/LoadingProvider';
import { useCart } from '@/app/providers/CartProvider';
import { RecommendedProductsSection } from '@/app/components/RecommendedProductsSection';
import { Product } from '@/lib/types';
import { mockProducts } from '@/lib/mockProducts';

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const { setIsLoading } = useLoading();
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    const foundProduct = mockProducts.find(p => p.id === slug);
    setTimeout(() => {
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);
  }, [slug]);

  // Set initial selected color and size after product is loaded
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize(product.sizes[0] || '');
    }
  }, [product]);

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [openDetailIndex, setOpenDetailIndex] = useState<number | null>(null);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, 1, selectedColor, selectedSize);
      // Optionally, you can show a toast notification here
      // For now, we'll just log to console
      console.log(`Added ${product.name} to cart!`);
    }
  };

  if (loading || !product) {
    return <Loading />;
  }

  const handlePrevImage = () => {
    setMainImageIndex(prevIndex =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setMainImageIndex(prevIndex =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-4 md:mx-[153px] py-8">
      {/* Breadcrumbs */}
      <div className="mb-4 text-sm text-gray-600">
        <Link href="/">Home</Link> {'|'} <Link href="/category/straight-suits">Straight Suits</Link> {'|'} {product.name}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 items-stretch">
        {/* Left: Image Scroller */}
        <div className="hidden lg:flex flex-col items-center gap-2 w-1/12 lg:h-full">
          <Button variant="ghost" size="icon" onClick={() => { /* Scroll up */ }}>
            <ChevronUp />
          </Button>
          <div className="flex flex-col gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`relative w-20 h-20 cursor-pointer ${index !== mainImageIndex ? 'opacity-50' : ''}`}
                onClick={() => setMainImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="border"
                />
              </div>
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={() => { /* Scroll down */ }}>
            <ChevronDown />
          </Button>
        </div>

        {/* Middle: Main Product Image */}
        <div className="relative w-full lg:w-5/12 h-[350px] sm:h-[400px] lg:h-[500px] flex items-center justify-center group">
          <Image
            src={product.images[mainImageIndex]}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />

          {/* Navigation Buttons Container */}
          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-10 lg:px-28">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 rounded-full"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="text-white" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 rounded-full"
              onClick={handleNextImage}
            >
              <ChevronRight className="text-white" />
            </Button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-6/12 p-4 lg:h-full">
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#4F482C] mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold mb-1">{product.price}</p>
          <p className="text-[15.11px] text-[#B8A893] mb-4">{product.mrpText}</p>

          {/* Color Selector */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-[#4F482C]">Color: {selectedColor}</h3>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <Button
                  key={color.name}
                  variant="outline"
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? 'border-[#4F482C]' : 'border-transparent'}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Size: {selectedSize}</h3>
              <Link href="#" className="text-sm underline text-[#4B3D34]">View size guide</Link>
            </div>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <Button
                  key={size}
                  variant="outline"
                  className={`w-10 h-10 border-2 ${selectedSize === size ? 'border-[#4B3D34]' : 'border-transparent'} text-[#4B3D34]`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-4">
            <Button className="bg-[#4B3D34] text-white px-8 py-2 rounded-md" onClick={handleAddToCart}>Add to Cart</Button>
            <Button variant="outline" size="icon" className="border-[#4B3D34]">
              <HeartIcon className="w-5 h-5 text-[#4B3D34]" />
            </Button>
          </div>

          {/* Delivery Info */}
          <p className="text-[12px] text-[#262626] mb-4">{product.deliveryInfo}</p>

          {/* Accordion Links */}
          <div className="border-t border-b border-[#D9D9D9]">
            {product.details.map((detail, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between py-3 cursor-pointer"
                  onClick={() => setOpenDetailIndex(openDetailIndex === index ? null : index)}
                >
                  <span className="font-semibold">{detail.title}</span>
                  {openDetailIndex === index ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
                {openDetailIndex === index && (
                  <div className="pb-3 text-gray-700">
                    {detail.content}
                  </div>
                )}
                {index < product.details.length - 1 && <Separator className="bg-[#D9D9D9]" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <RecommendedProductsSection />
    </div>
  );
}