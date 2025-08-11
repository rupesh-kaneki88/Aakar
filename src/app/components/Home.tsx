'use client';

import React, { JSX } from "react";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/app/components/ui/Navigation-menu";
import { CategoryExplorerSection } from "@/app/components/CategoryExplorerSection";
import { FeaturedProductsSection } from "@/app/components/FeaturedProductSection";
import { HeroImageSection } from "@/app/components/HeroImageSection";
import { PromotionalBannerSection } from "@/app/components/PromotionalBannerSection";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export const Home = (): JSX.Element => {

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

  // Product data
  const products = [
    {
      name: "Brocade Front Slit - Anarkali",
      color: "Ivory",
      price: "₹ 33,500",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/beige-gold-bela-maharani-lehenga-set-1.png",
      tag: "#WeddingTrousseau",
    },
    {
      name: "Amra Embroidery - Pakistani Suit",
      color: "Ivory & Peach",
      price: "₹ 30,500",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/flowers-1.png",
      tag: "#ShahiAdaayein",
    },
    {
      name: "Maheshwari Silk - Pakistani Suit",
      color: "Ivory",
      price: "₹ 26,500",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/a-gharara-fit-for-the-spotlight-by-sureena-chowdhri-1.png",
      tag: "#Royalty",
    },
  ];

  

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="5489:169"
    >
      <div className="bg-white overflow-hidden w-full relative">
        

        {/* Hero Section */}
        <section className="w-full mt-4 md:mt-8 relative" aria-labelledby="hero-heading">
          <HeroImageSection />
          {/* <Button
            className="absolute top-[200px] md:top-[368px] left-1/2 transform -translate-x-1/2 md:left-[721px] md:transform-none bg-[#4b3d34] text-white rounded-[11.37px] border-[0.95px] border-dashed [font-family:'Roboto',Helvetica] text-sm md:text-[17.1px] flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            aria-label="Shop Now"
            onClick={() => alert('Shop Now functionality coming soon!')}
          >
            Shop Now
            <span className="sr-only">Go to shop section</span>
            <div className="relative w-[18px] h-[18px] md:w-[22.74px] md:h-[22.74px]">
              <img
                className="absolute w-3 h-3 md:w-4 md:h-4 top-1 left-1"
                alt="Arrow icon"
                src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-431--stroke-.svg"
              />
            </div>
          </Button> */}
        </section>

        {/* Featured Products Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="featured-products-heading">
          <FeaturedProductsSection />
          <img
            className="absolute w-[100px] h-[102px] md:w-[166px] md:h-[170px] top-[2px] md:left-[732px] -translate-x-1/2"
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
            {/* <div className="md:w-[342px] h-[300px] md:mt-22 md:h-[485px] bg-[url(https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-2.png)] bg-cover bg-[100%_100%] relative">
              <div className="absolute w-[40px] h-[40px] md:w-[61px] md:h-[61px] top-[100px] md:top-[212px] left-1/2 transform -translate-x-1/2 md:left-[140px] md:transform-none">
                <div className="relative w-[35px] h-[35px] md:w-[53px] md:h-[53px] top-1 left-1 bg-[url(https://c.animaapp.com/mdh9p58vtKPJ88/img/vector.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[12px] h-[15px] md:w-[17px] md:h-[22px] top-[10px] md:top-[15px] left-[10px] md:left-5"
                    alt="Vector"
                    src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-5.svg"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Category Explorer Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="category-explorer-heading">
          <CategoryExplorerSection />
          {/* <div className="absolute w-full flex flex-col md:flex-row justify-center gap-4 md:gap-8 top-[150px] md:top-[297px] px-4 md:px-0">
            <img
              className="w-full md:w-[360px] h-auto md:h-[368px]"
              alt="Category highlight 1"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-3.png"
            />
            <img
              className="w-full md:w-[360px] h-auto md:h-[368px]"
              alt="Category highlight 2"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-4.png"
            />
            <img
              className="w-full md:w-[360px] h-auto md:h-[368px]"
              alt="Category highlight 3"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-5.png"
            />
          </div> */}
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
          <div className="flex flex-col md:flex-row w-full px-4 md:px-[153px] gap-4 md:gap-6">
            {products.map((product, index) => (
              <div key={index} className="flex-1">
                <div className={`flex flex-col gap-4 md:gap-[22.67px] ${index % 2 === 0 ? 'lg:mt-22' : ''}`}>
                  <img
                    className="w-full h-[200px] md:h-[464px] object-contain"
                    alt={product.name}
                    src={product.image}
                  />

                  <div className="flex flex-col gap-3 md:gap-[15.11px] md:px-8">
                    <div className="flex items-center justify-between w-full">
                      <Badge className="bg-[#4b3d34] text-white rounded-[75.56px] border-[0.76px] border-dashed px-2 md:px-[12.09px] py-0 md:py-[7.56px] h-auto">
                        <span className="font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px]">
                          {product.tag}
                        </span>
                      </Badge>

                      <Button className="bg-[#4b3d34] text-white rounded-[9.07px] border-[0.76px] border-dashed px-3 md:px-[18.14px] py-2 md:py-[13.6px] h-auto relative">
                        <span className="font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px] mr-1">
                          Shop Now
                        </span>
                        <div className="relative w-[15px] h-[15px] md:w-[18.14px] md:h-[18.14px]">
                          <img
                            className="absolute w-2 h-2 md:w-3 md:h-3 top-[2px] md:top-[3px] left-[2px] md:left-[3px]"
                            alt="Vector stroke"
                            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-431--stroke-.svg"
                          />
                        </div>
                      </Button>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-[10.58px] justify-center">
                      <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] tracking-[0] mt-[-0.76px] text-center">
                        {product.name}
                      </h3>

                      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-[15.11px] justify-center">
                        <div className="flex items-center gap-2 md:gap-[6.05px]">
                          <span className="font-normal text-[#81807E] text-xs md:text-[13.6px] leading-[15px] md:leading-[20.4px] text-center">
                            Color
                          </span>
                          <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                          <span className="font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            {product.color}
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
        </section>

        {/* Promotional Banner Section */}
        <section className="w-full mt-8 md:mt-16 relative" aria-labelledby="promotional-banner-heading">
          <PromotionalBannerSection />
          {/* <div className="absolute w-full flex flex-col md:flex-row justify-center gap-4 md:gap-8 top-[150px] md:top-[297px] px-4 md:px-0">
            <img
              className="w-full md:w-[360px] h-auto md:h-[368px]"
              alt="Promotion highlight 1"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-6.png"
            />
            <img
              className="w-full md:w-[360px] h-auto md:h-[368px]"
              alt="Promotion highlight 2"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-7.png"
            />
            <img
              className="w-full md:w-[360px] h-auto md:h-[368px]"
              alt="Promotion highlight 3"
              src="https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-8.png"
            />
          </div> */}
        </section>

        {/* Elevate Your Wardrobe Section */}
        <section className="w-full mt-12 md:mt-24 relative" aria-labelledby="elevate-wardrobe-heading">
          <div className="w-full h-[400px] md:h-[722px] bg-[url(/Elevate.png)] bg-cover bg-[50%_50%] relative">
            <div className="flex flex-col sm:w-full md:w-[722px] items-start gap-4 absolute top-[50px] md:top-[179px] left-4 md:left-[667px] px-4 md:px-0">
              <h2 id="elevate-wardrobe-heading" className="w-full md:w-[731px] mt-[-1.00px] mr-[-39.00px] font-bold text-[#4F482C] text-2xl md:text-[58px] leading-[30px] md:leading-[69.6px] [font-family:'Akatab',Helvetica] tracking-[0]">
                ELEVATE YOUR WARDROBE
              </h2>
              <div className="relative self-stretch font-normal text-[#1F1F1F] text-sm md:text-lg leading-[20px] md:leading-[27px] [font-family:'Akatab',Helvetica] tracking-[0]">
                {"Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here."}
              </div>
            </div>
            <Button
              className="absolute top-[200px] md:top-[351px] left-4 md:left-[667px] bg-[#4b3d34] text-white rounded-[9.07px] border-[0.76px] border-none [font-family:'Akatab',Helvetica] text-xs md:text-sm flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label="Shop Now"
              onClick={() => alert('Shop Now functionality coming soon!')}
            >
              Shop Now
              <span className="sr-only">Go to shop section</span>
              <div className="relative w-[15px] h-[15px] md:w-[18.14px] md:h-[18.14px]">
                <img
                  className="absolute w-2 h-2 md:w-3 md:h-3 top-[2px] md:top-[3px] left-[2px] md:left-[3px]"
                  alt="Arrow icon"
                  src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-431--stroke-.svg"
                />
              </div>
            </Button>
            <div className="absolute sm:w-full md:w-[516px] h-16 md:h-24 bottom-[50px]  right-0 bg-[#B8A893] flex items-center justify-center">
              <div className="[font-family:'Akatab',Helvetica] font-normal text-white text-lg md:text-[24px] tracking-[0] leading-[25px] md:leading-9 px-4 md:px-0">
                #BridesOfAakaarStudio
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}; 