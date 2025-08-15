'use client';

import React, { JSX, useState, useEffect, useRef } from "react";
import { mockProducts } from "@/lib/mockProducts";
import { Product } from "@/lib/types";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { ArrowRight, HeartIcon } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useWishlist } from "@/app/providers/WishlistProvider";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/app/components/ui/Navigation-menu";
import { CategoryExplorerSection } from "@/app/components/CategoryExplorerSection";
import { FeaturedProductsSection } from "@/app/components/FeaturedProductSection";
import { HeroImageSection } from "@/app/components/HeroImageSection";
import { PromotionalBannerSection } from "@/app/components/PromotionalBannerSection";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { useLoading } from "@/app/providers/LoadingProvider";
import Loading from "@/app/components/Loading";

export const Home = (): JSX.Element => {
  const { isLoading, setIsLoading } = useLoading();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const { addItem, removeItem, isInWishlist } = useWishlist();

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX((e as React.MouseEvent).nativeEvent.pageX || (e as React.TouchEvent).touches[0].pageX);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX((e as React.MouseEvent).nativeEvent.pageX || (e as React.TouchEvent).touches[0].pageX);
  };

  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    const diff = currentX - startX;
    const slideCount = displayedProducts.length;

    if (diff > 50) { // Swiped right
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideCount - 1 : prevSlide - 1));
    } else if (diff < -50) { // Swiped left
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Navigation menu items
  const navItems = [
    { text: "What's New", width: "w-[99px]" },
    { text: "Straight Suits", width: "w-[114px]" },
    { text: "Sharara Suits", width: "w-[113px]" },
    { text: "Pakistani Suits", width: "w-[124px]" },
    { text: "Anarkalis", width: "w-[77px]" },
    { text: "Garara Suits", width: "w-[104px]" },
    { text: "Indiee Luxee", width: "w-[107px]" },
    { text: "Collection", width: "w-[85px]" },
    { text: "About Us", width: "w-[88px]" },
  ];

  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomProducts = (): Product[] => {
    const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Get 3 random products
  };

  useEffect(() => {
    setDisplayedProducts(getRandomProducts());
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % displayedProducts.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [displayedProducts.length, isMobile]);

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const container = carouselRef.current;
      const containerWidth = container.parentElement?.offsetWidth || window.innerWidth;
      const translateX = -currentSlide * (containerWidth - 32); // 32px for padding (16px * 2)
      gsap.to(container, { 
        x: translateX, 
        duration: 0.8, 
        ease: "power2.out" 
      });
    }
  }, [currentSlide, isMobile]);

  const handleShopNowClick = () => {
    setIsLoading(true);
    // Simulate an asynchronous operation, e.g., fetching data or navigating
    setTimeout(() => {
      alert('Shop Now functionality coming soon!');
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="5489:169"
    >
      {isLoading && <Loading />}
      <div className="bg-white overflow-hidden w-full relative">
        

        {/* Hero Section */}
        <section className="w-full relative" aria-labelledby="hero-heading">
          <HeroImageSection />
        </section>

        {/* Featured Products Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="featured-products-heading">
          <FeaturedProductsSection />
          <img
            className="absolute w-[80px] h-[82px] md:w-[166px] md:h-[170px] top-[2px] left-[292px] md:left-[732px] -translate-x-1/2"
            alt="Featured product highlight"
            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group.png"
          />
        </section>

        {/* Collection Highlight Section */}
        <section className="w-full px-4 md:px-[153px] mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-8" aria-labelledby="collection-highlight-heading">
          <div className="md:w-[468px] mb-6 md:mb-0 md:mt-24">
            <div className="font-normal text-neutral-800 text-sm md:text-[17.1px] tracking-[0] leading-[28.6px]">
              The Latest Collection
            </div>
            <h2 id="collection-highlight-heading" className="[font-family:'Akatab',Helvetica] font-semibold text-[#4e472c] text-2xl md:text-5xl tracking-[0] leading-[30px] md:leading-[62.4px]">
              SUHAAGAN SAAJ
            </h2>
            <div className="mt-2 [font-family:'Akatab',Helvetica] font-normal text-neutral-800 text-lg md:text-xl tracking-[0] leading-[25px] md:leading-[30px]">
              <span className="font-semibold">
                Grace, tradition and opulence - woven just for{" "}
              </span>
              <span className="font-black">YOU</span>
            </div>
            <div className="mt-2 w-full font-semibold text-[#676665] text-xs md:text-[13.6px] leading-[18px] md:leading-[20.4px] tracking-[0]">
              Our collection is designed for the bride-to-be who dreams of
              elegance, tradition and timeless grace. Inspired by the regal
              splendour of Indian heritage, each suit is a masterpiece of
              exquisite craftsmanship, rich fabric and luxurious charm that make
              every moment feel majestic. <br />
              Perfect for Wedding Trousseau, this collection is more than just
              outfit - it is a symbol of love, grace and the radiant confidence
              of a woman ready to embrace her forever.
            </div>
          </div>
          <div className="md:w-[50%] lg:w-[60%] flex flex-col md:flex-row gap-4 md:gap-6">
            <img
              className="md:w-[342px] h-auto md:h-[485px]"
              alt="Mask group"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-1.png"
            />
            <img
              className="md:w-[342px] h-auto md:h-[485px] md:mt-24"
              alt="Mask group"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-2.png"
            />
          </div>
        </section>

        {/* Category Explorer Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="category-explorer-heading">
          <CategoryExplorerSection />
        </section>

        {/* Crafts of the Nation Section */}
        <section className="w-full mt-8 md:mt-24 flex flex-col items-center px-4 md:px-0" aria-labelledby="crafts-nation-heading">
          <div className="[font-family:'Akatab',Helvetica] font-normal text-neutral-800 text-sm md:text-[17.1px] tracking-[0] leading-[20px] md:leading-[25.6px] text-center">
            Untouched by the technology - tribal artisans wields ancient wisdom
          </div>
          <h2 id="crafts-nation-heading" className="font-semibold text-[#4F482C] text-2xl md:text-[48px] leading-[30px] md:leading-[62.4px] text-center">
            Crafts of the <span className="font-black">NATION</span>
          </h2>
          <img
            className="w-full h-auto mt-4 md:mt-8"
            alt="Poster"
            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/poster.png"
          />
        </section>

        {/* Product Showcase Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="product-showcase-heading">
          <div className={`w-full ${isMobile ? 'overflow-hidden px-5' : 'px-4 md:px-[153px]'}`}>
            <div 
              ref={carouselRef} 
              className={`flex gap-4 md:gap-6 ${
                isMobile 
                  ? 'w-full px-4 mr-8' 
                  : 'md:flex-row md:justify-center'
              }`}
              style={{
                width: isMobile ? `${displayedProducts.length * 100}%` : 'auto'
              }}
              onMouseDown={isMobile ? handleMouseDown : undefined}
              onMouseMove={isMobile ? handleMouseMove : undefined}
              onMouseUp={isMobile ? handleMouseUp : undefined}
              onMouseLeave={isMobile ? handleMouseLeave : undefined}
              onTouchStart={isMobile ? handleMouseDown : undefined}
              onTouchMove={isMobile ? handleMouseMove : undefined}
              onTouchEnd={isMobile ? handleMouseUp : undefined}
            >
              {displayedProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`${
                    isMobile 
                      ? 'flex-shrink-0' 
                      : 'flex-1'
                  }`}
                  style={{
                    width: isMobile ? `${100 / displayedProducts.length}%` : 'auto'
                  }}
                >
                  <div className={`flex flex-col gap-4 md:gap-[22.67px] ${index % 2 === 0 ? 'lg:mt-22' : ''}`}>
                    <img
                      className="w-full h-[300px] md:h-[464px] object-contain"
                      alt={product.name}
                      src={product.imageUrl}
                    />

                    <div className="flex flex-col gap-3 md:gap-[15.11px] md:px-8">
                      <div className="flex items-center justify-between w-full">
                        <Badge className="bg-[#4b3d34] text-white rounded-[75.56px] border-[0.76px] border-dashed px-2 md:px-[12.09px] py-2 md:py-[7.56px] h-auto">
                          <span className="font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px]">
                            {product.name}
                          </span>
                        </Badge>

                        <Link href={`/product/${product.id}`} scroll={true}>
                          <Button className="bg-[#4b3d34] text-white rounded-[9.07px] border-[0.76px] border-dashed px-3 md:px-[18.14px] py-2 md:py-[13.6px] h-auto mr-6 md:mr-1 relative">
                            <span className="font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px] mr-1">
                              Shop Now
                            </span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45" />
                          </Button>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Add to wishlist"
                          onClick={() => isInWishlist(product.id) ? removeItem(product.id) : addItem(product)}
                          className="w-6 h-6 md:w-8 md:h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        >
                          <HeartIcon className={`!w-5 !h-5 ${isInWishlist(product.id) ? 'text-red-500' : 'text-[#4b3d34]'}`} aria-hidden="true" />
                        </Button>
                      </div>

                      <div className="flex flex-col gap-2 md:gap-[10.58px] justify-center">
                        <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] tracking-[0] mt-[-0.76px] text-center">
                          {product.name}
                        </h3>

                        <div className="flex md:flex-row items-start gap-8 md:gap-[15.11px] justify-center">
                          <div className="flex items-center gap-2 md:gap-[6.05px]">
                            <span className="font-normal text-[#81807E] text-xs md:text-[13.6px] leading-[15px] md:leading-[20.4px] text-center">
                              Color
                            </span>
                            <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                            <span className="font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                              {product.colors && product.colors[0]?.name ? product.colors[0].name : 'N/A'}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 md:gap-[6.05px]">
                            <span className="font-normal text-[#81807E] text-xs md:text-[13.6px] leading-[15px] md:leading-[20.4px]">
                              Price
                            </span>
                            <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                            <span className="font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {isMobile && displayedProducts.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {displayedProducts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-[#4b3d34]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Promotional Banner Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="promotional-banner-heading">
          <PromotionalBannerSection />
        </section>

        {/* Elevate Your Wardrobe Section */}
        <section className="w-full mt-12 md:mt-24 relative" aria-labelledby="elevate-wardrobe-heading">
          <div className="w-full h-[350px] md:h-[722px] bg-[url(/Elevate.png)] bg-cover bg-[30%_70%] relative">
            <div className="flex flex-col sm:w-full md:w-[722px] items-start gap-2 md:gap-4 absolute top-[180px] md:top-[179px] left-4 md:left-[667px] px-4 md:px-0">
              <h2 id="elevate-wardrobe-heading" className="w-full md:w-[731px] mt-[-1.00px] mr-[-39.00px] font-bold text-[#4F482C] text-2xl md:text-[58px] leading-[30px] md:leading-[69.6px] [font-family:'Akatab',Helvetica] tracking-[0]">
                ELEVATE YOUR WARDROBE
              </h2>
              <div className="relative self-stretch font-normal text-[#1F1F1F] text-sm md:text-lg leading-[20px] md:leading-[27px] [font-family:'Akatab',Helvetica] tracking-[0]">
                {"Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here."}
              </div>
            </div>
            <Link href={`/category/straight-suits`} scroll={true}>
              <Button
                className="absolute bottom-4 md:top-[351px] left-8 md:left-[667px] bg-[#4b3d34] text-white rounded-[9.07px] border-[0.76px] border-none [font-family:'Akatab',Helvetica] text-xs md:text-sm flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                aria-label="Shop Now"
              >
                Shop Now
                <span className="sr-only">Go to shop section</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45" />
              </Button>
            </Link>
            <div className="absolute sm:w-full md:w-[516px] h-16 md:h-24 md:bottom-[50px]  right-0 bg-[#B8A893] flex items-center justify-center">
              <div className="[font-family:'Akatab',Helvetica] font-normal text-white text-sm md:text-[24px] tracking-[0] leading-[25px] md:leading-9 px-2 md:px-0">
                #BridesOfAakaarStudio
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}; 