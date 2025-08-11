'use client'

import React, { useState } from "react";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent } from "@/app/components/ui/Card";

export const CategoryExplorerSection = (): React.JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Anarkalis');

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
  const products = [
    {
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-3.png",
      tag: "#ShahiAdaayein",
      name: "Amra Embroidery - Anarkali",
      color: "Mint Green",
      price: "₹ 27,500",
    },
    {
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-4.png",
      tag: "#WeddingTrousseau",
      name: "Tissue Silk - Anarkali",
      color: "Ivory",
      price: "₹ 23,500",
    },
    {
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/mask-group-5.png",
      tag: "#Royalty",
      name: "Chinon Crape - Anarkali",
      color: "Peach",
      price: "₹ 43,500",
    },
  ];

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
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex-1 p-4 md:p-[22.67px] ${index < products.length - 1 ? "border-b-[1.51px] md:border-r-[1.51px] md:border-b-0 border-dashed border-neutral-800" : ""}`}
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-0 flex flex-col gap-4 md:gap-[22.67px]">
                  <img
                    className="w-full h-[200px] md:h-[368px] object-cover"
                    alt={product.name}
                    src={product.image}
                  />

                  <div className="flex flex-col gap-3 md:gap-[15.11px]">
                    <div className="flex items-center justify-between w-full">
                      <Badge className="bg-[#4b3d34] text-white rounded-[75.56px] border-[0.76px] border-dashed px-2 md:px-[12.09px] py-1 md:py-[7.56px] h-auto">
                        <span className="[font-family:'Akatab',Helvetica] font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px]">
                          {product.tag}
                        </span>
                      </Badge>

                      <Button className="bg-[#4b3d34] text-white rounded-[9.07px] border-[0.76px] border-none px-3 md:px-[18.14px] py-2 md:py-[13.6px] h-auto relative">
                        <span className="[font-family:'Akatab',Helvetica] font-normal text-xs md:text-sm leading-[18px] md:leading-[21px] mt-[-0.76px] mr-1">
                          Shop Now
                        </span>
                        <div className="relative w-[15px] h-[15px] md:w-[18.14px] md:h-[18.14px]">
                          <img
                            className="absolute w-2 h-2 md:w-3 md:h-3 top-[2px] md:top-[3px] left-[2px] md:left-[3px]"
                            alt="Vector stroke"
                            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-431--stroke-.svg"
                          />
                        </div>
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
                    </div>

                    <div className="flex flex-col gap-2 md:gap-[10.58px]">
                      <h3 className="font-medium text-[#4e472c] text-sm md:text-[18.1px] leading-[20px] md:leading-[27.2px] [font-family:'Akatab',Helvetica] tracking-[0] mt-[-0.76px]">
                        {product.name}
                      </h3>

                      <div className="flex flex-col md:flex-row items-start gap-2 md:gap-[15.11px]">
                        <div className="flex items-center gap-2 md:gap-[6.05px]">
                          <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            Color
                          </span>
                          <div className="w-[3.02px] h-[3.02px] bg-dark-30 rounded-[1.51px]" />
                          <span className="[font-family:'Akatab',Helvetica] font-medium text-[#4b3d34] text-sm md:text-[15.1px] leading-[18px] md:leading-[22.7px] mt-[-0.76px]">
                            {product.color}
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
        ))}
      </div>
    </section>
  );
};
