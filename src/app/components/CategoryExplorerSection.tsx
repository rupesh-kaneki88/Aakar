'use client'

import React, { useState, useEffect } from "react";
import { mockProducts } from "@/lib/mockProducts";
import gsap from "gsap";
import { Product } from "@/lib/types";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { ArrowRight, HeartIcon } from "lucide-react";
import { useWishlist } from "@/app/providers/WishlistProvider";
import { toast } from "sonner";
import { Card, CardContent } from "@/app/components/ui/Card";
import Link from "next/link";

export const CategoryExplorerSection = (): React.JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { addItem, removeItem, isInWishlist } = useWishlist();

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName); 
  };

  // Category filter data
  const categories = [
    { name: "All", selected: selectedCategory === "All" },
    { name: "Straight Suits", selected: selectedCategory === "Straight Suits" },
    { name: "Anarkalis", selected: selectedCategory === "Anarkalis" },
    { name: "Sharara Suits", selected: selectedCategory === "Sharara Suits" },
    { name: "Pakistani Suits", selected: selectedCategory === "Pakistani Suits" },
    { name: "Garara Suits", selected: selectedCategory === "Garara Suits" },
  ];

  // Product data
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const getRandomProducts = (category: string): Product[] => {
    let filteredProducts: Product[] = [];
    if (category === "All") {
      filteredProducts = mockProducts;
    } else {
      filteredProducts = mockProducts.filter(
        (product) => product.category.toLowerCase().replace(/ /g, "-") === category.toLowerCase().replace(/ /g, "-")
      );
    }

    // Shuffle array and get 3 random products
    for (let i = filteredProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredProducts[i], filteredProducts[j]] = [
        filteredProducts[j],
        filteredProducts[i],
      ];
    }
    return filteredProducts.slice(0, 3);
  };

  useEffect(() => {
    setDisplayedProducts(getRandomProducts(selectedCategory));
  }, [selectedCategory]);

  return (
    <section className="lg:w-[1206px] flex flex-col rounded-[15.11px] overflow-hidden border-[1.51px] border-dashed border-neutral-800 relative md:mx-[153px]">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-6 md:gap-[37.78px] p-4 md:p-[60.45px] relative w-full border-b-[1.51px] border-dashed border-neutral-800 overflow-hidden">
        <div className="flex flex-col items-start w-full">
          <h2 className="w-full font-extrabold text-[#4b3d34] text-xl md:text-[36.3px] leading-normal [font-family:'Akatab',Helvetica] tracking-[0] mt-[-0.76px]">
            EXPLORE OUR CATEGORIES
          </h2>
          <p className="w-full font-normal text-[#4b3d34] text-xs md:text-[13.6px] leading-[18px] md:leading-[20.4px] [font-family:'Akatab',Helvetica] tracking-[0]">
            Each piece is crafted to enhance your fashion statement.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-[10.58px]">
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant={category.selected ? "default" : "outline"}
              className={`rounded-[9.07px] px-3 md:px-[18.14px] py-2 md:py-[13.6px] h-auto ${
                category.selected
                  ? "bg-[#C2B4A3]"
                  : "bg-transparent border-[0.76px] border-dashed border-[#333333]"
              }`}
              aria-pressed={category.selected}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span
                className={`font-mono font-normal text-xs md:text-[13.6px] leading-[18px] md:leading-[20.4px] mt-[-0.76px] ${
                  category.selected ? "text-[#0F0F0F]" : "text-[#B3B3B2]"
                }`}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>

        <img
          className="absolute w-[200px] h-[204px] md:w-[419px] md:h-[428px] top-[-38px] md:top-[-76px] right-[-180px] opacity-50 md:opacity-100"
          alt="Abstract design"
          src="https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-2.svg"
        />
      </div>

      {/* Products Grid */}
      <div className="flex flex-col md:flex-row w-full">
        {displayedProducts.length === 0 ? (
          <div className="w-full text-center py-8">
            <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] [font-family:'Akatab',Helvetica] tracking-[0] mt-[-0.76px] italic">
              No products available in this category.
            </h3>
          </div>
        ) : (
          displayedProducts.map((product, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex-1 p-4 md:p-[22.67px] ${index < displayedProducts.length - 1 ? "border-b-[1.51px] md:border-r-[1.51px] md:border-b-0 border-dashed border-neutral-800" : ""}`}
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col gap-4 md:gap-[22.67px]">
                  <img
                    className="w-full h-auto md:h-[368px] object-cover rounded-none"
                    alt={product.name}
                    src={product.imageUrl}
                  />

                  <div className="flex flex-col gap-3 md:gap-[15.11px]">
                    <div className="flex items-center justify-between w-full">
                      <Badge className="bg-[#4b3d34] text-white rounded-[75.56px] border-[0.76px] border-dashed px-2 md:px-[12.09px] py-1 md:py-[7.56px] h-auto">
                        <span className="[font-family:'Akatab',Helvetica] font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px]">
                          {product.name}
                        </span>
                      </Badge>

                      <Link href={`/product/${product.id}`} scroll={true}>
                        <Button className="bg-[#4b3d34] text-white rounded-[9.07px] border-[0.76px] border-none px-3 md:px-[18.14px] py-2 md:py-[13.6px] h-auto relative">
                          <span className="[font-family:'Akatab',Helvetica] font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px] mr-1">
                            Shop Now
                          </span>
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Add to wishlist"
                        onClick={() => {
                          if (isInWishlist(product.id)) {
                            removeItem(product.id);
                            toast.info(`${product.name} removed from wishlist.`);
                          } else {
                            addItem(product);
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

                    <div className="flex flex-col gap-2 md:gap-[10.58px]">
                      <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] [font-family:'Akatab',Helvetica] tracking-[0] mt-[-0.76px]">
                        {product.name}
                      </h3>

                      <div className="flex md:flex-row items-start gap-8 md:gap-[15.11px]">
                        <div className="flex items-center gap-2 md:gap-[6.05px]">
                          <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            Color
                          </span>
                          <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                          <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            {product.colors[0]?.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 md:gap-[6.05px]">
                          <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            Price
                          </span>
                          <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                          <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </React.Fragment>
        )))}
      </div>
    </section>
  );
};
