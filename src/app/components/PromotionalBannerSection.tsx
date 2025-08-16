'use client'

import { ArrowRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent } from "@/app/components/ui/Card";
import { mockProducts } from "@/lib/mockProducts";
import { Product } from "@/lib/types";
import Link from "next/link";

export const PromotionalBannerSection = (): React.JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Veerangana');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName); 
  };

  // Collection categories data
  const collectionCategories = [
    { name: "Nazm", active: selectedCategory === "Nazm" },
    { name: "Shahi Adaayein", active: selectedCategory === "Shahi Adaayein" },
    { name: "Veerangana", active: selectedCategory === "Veerangana" },
    { name: "Suhaagan Saaj", active: selectedCategory === "Suhaagan Saaj" },
    { name: "Noor-e-Nazakat", active: selectedCategory === "Noor-e-Nazakat" },
    { name: "Mehfil-e-Mohabbat", active: selectedCategory === "Mehfil-e-Mohabbat" },
  ];

  useEffect(() => {
    const filtered = mockProducts.filter(product => product.brand === selectedCategory);
    
    // If less than 3 products, fill with random ones
    if (filtered.length < 3) {
      const remainingSlots = 3 - filtered.length;
      const otherProducts = mockProducts.filter(product => product.brand !== selectedCategory);
      const shuffledOtherProducts = [...otherProducts].sort(() => 0.5 - Math.random());
      
      for (let i = 0; i < remainingSlots; i++) {
        if (shuffledOtherProducts[i]) {
          filtered.push(shuffledOtherProducts[i]);
        }
      }
    }
    setDisplayedProducts(filtered.slice(0, 3)); // Ensure exactly 3 are displayed
  }, [selectedCategory]);

  return (
    <section className="flex flex-col lg:w-[1206px] items-start rounded-[15.11px] overflow-hidden border-[1.51px] border-dashed border-neutral-800 md:mx-[153px]">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-6 md:gap-[37.78px] p-4 md:p-[60.45px] relative w-full border-b-[1.51px] border-dashed border-neutral-800 overflow-hidden">
        <div className="flex flex-col items-start w-full">
          <h2 className="w-full mt-[-0.76px] font-extrabold text-[#4b3d34] text-xl md:text-[36.3px] leading-normal [font-family:'Akatab',Helvetica] tracking-[0]">
            EXPLORE OUR COLLECTION
          </h2>
          <p className="w-full font-normal text-[#4b3d34] text-xs md:text-[13.6px] leading-[18px] md:leading-[20.4px] [font-family:'Akatab',Helvetica] tracking-[0]">
            At AAKAAR, our customers are the heartbeat of our brand.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-[10.58px]">
          {collectionCategories.map((category, index) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              className={`h-auto px-3 md:px-[18.14px] py-2 md:py-[13.6px] rounded-[9.07px] border-[0.76px] border-dashed ${
                category.active
                  ? "bg-[#c2b4a2] hover:bg-[#c2b4a2] border-none"
                  : "bg-transparent border-[#333333] hover:bg-transparent"
              }`}
              aria-pressed={category.active}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span
                className={`font-mono font-normal text-xs md:text-[13.6px] leading-[18px] md:leading-[20.4px] ${
                  category.active ? "text-[#0F0F0F]" : "text-[#B3B3B2]"
                }`}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>

        <img
          className="absolute w-[200px] h-[200px] md:w-[446px] md:h-[446px] top-[-42px] md:top-[-85px] right-[-110px] md:right-[-220px] opacity-50 md:opacity-100"
          alt="Abstract design"
          src="https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-6.svg"
        />
      </div>

      {/* Products Grid */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row w-full border-b-[1.51px] border-dashed border-neutral-800">
          {displayedProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`flex-1 min-w-[300px] rounded-none bg-transparent shadow-none ${
                index < displayedProducts.length - 1
                  ? "border-b-[1.51px] md:border-r-[1.51px] md:border-b-0 border-dashed border-neutral-800"
                  : ""
              } border-t-0 border-b-0 border-l-0`}
            >
              <CardContent className="flex flex-col items-start gap-4 md:gap-[22.67px] p-4 md:p-[22.67px]">
                <img
                  className="w-full h-auto md:h-[448px] object-cover"
                  alt={product.name}
                  src={product.imageUrl}
                />

                <div className="flex flex-col items-start gap-3 md:gap-[15.11px] w-full">
                  <div className="flex items-center justify-between w-full">
                    <Badge className="px-2 md:px-[12.09px] py-1 md:py-[7.56px] bg-[#4b3d34] rounded-[75.56px] border-[0.76px] border-dashed hover:bg-[#4b3d34]">
                      <span className="font-normal text-white text-xs md:text-sm leading-[18px] md:leading-[21px]">
                        {product.brand}
                      </span>
                    </Badge>

                    <Link href={`/product/${product.id}`} scroll={true}>
                      <Button className="h-auto px-3 md:px-[18.14px] py-2 md:py-[13.6px] bg-[#4b3d34] rounded-[9.07px] border-[0.76px] border-none hover:bg-[#4b3d34] relative">
                        <span className="font-normal text-white text-xs md:text-sm leading-[18px] md:leading-[21px] mr-1">
                          Shop Now
                        </span>
                        <ArrowRightIcon className="h-[15px] w-[15px] md:h-[18.14px] md:w-[18.14px]" />

                        {/* Corner decorations */}
                        <img
                          className="absolute w-[10px] h-[10px] md:w-[13px] md:h-[13px] top-0 left-0"
                          alt="Shape"
                          src="https://c.animaapp.com/mdh9p58vtKPJ88/img/shape-2.svg"
                        />
                        <img
                          className="absolute w-[10px] h-[10px] md:w-[13px] md:h-[13px] top-0 right-0"
                          alt="Shape"
                          src="https://c.animaapp.com/mdh9p58vtKPJ88/img/shape-6.svg"
                        />
                        <img
                          className="absolute w-[10px] h-[10px] md:w-[13px] md:h-[13px] bottom-0 right-0"
                          alt="Shape"
                          src="https://c.animaapp.com/mdh9p58vtKPJ88/img/shape.svg"
                        />
                        <img
                          className="absolute w-[10px] h-[10px] md:w-[13px] md:h-[13px] bottom-0 left-0"
                          alt="Shape"
                          src="https://c.animaapp.com/mdh9p58vtKPJ88/img/shape-1.svg"
                        />
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-col items-start gap-2 md:gap-[10.58px] w-full">
                    <h3 className="w-full mt-[-0.76px] font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] tracking-[0]">
                      {product.name}
                    </h3>

                    <div className="flex md:flex-row flex-wrap items-start gap-8 md:gap-[15.11px]">
                      <div className="flex items-center gap-2 md:gap-[6.05px]">
                        <span className="font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                          Color
                        </span>
                        <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                        <span className="mt-[-0.76px] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px]">
                          {product.colors[0]?.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 md:gap-[6.05px]">
                        <span className="font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                          Price
                        </span>
                        <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                        <span className="mt-[-0.76px] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px]">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
