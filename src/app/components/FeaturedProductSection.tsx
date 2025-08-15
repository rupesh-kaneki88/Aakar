import React from "react";
import { Card, CardContent } from "@/app/components/ui/Card";

export const FeaturedProductsSection = (): React.JSX.Element => {
  // Data for statistics cards
  const statsData = [
    {
      value: "1,500 +",
      description: "Indian Enthnic Products",
    },
    {
      value: "250 +",
      description: "New arrivals every month.",
    },
    {
      value: "30%",
      description: "OFF on selected items",
    },
    {
      value: "95%",
      description: "Customer Satisfaction Rate",
    },
  ];

  return (
    <Card className="flex flex-col lg:w-[1206px] items-start rounded-[15.11px] overflow-hidden border-[1.51px] border-dashed border-neutral-800 mt-8 md:mt-[46px] mx-4 md:mx-[153px]">
      <CardContent className="flex flex-col md:flex-row items-center w-full p-0">
        <div className="flex flex-col md:w-[603px] items-start gap-4 md:gap-[22.67px] pt-8 md:pt-[75.56px] pb-6 md:pb-[60.45px] px-4 md:px-[60.45px] flex-1 border-b-[1.51px] md:border-r-[1.51px] md:border-b-0 [border-bottom-style:dashed] md:[border-right-style:dashed] border-neutral-800">
          <h2 className=" font-extrabold text-[#4b3d34] text-xl md:text-[36.27px] leading-[normal] font-[Akatab] tracking-[0] pr-9 md:pr-0">
            ELEVATE YOUR STYLE WITH AAKAAR STUDIO
          </h2>
          <p className="self-stretch font-semibold text-[#676665] text-xs md:text-[13.6px] leading-[18px] md:leading-[20.4px] font-[Akatab] tracking-[0]">
            Explore a world of fashion at AAKAAR Studio, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>

        <div className="flex flex-col items-center justify-end flex-1 self-stretch">
          <div className="grid grid-cols-2 w-full border-b-[1.51px] [border-bottom-style:dashed] border-[#4b3d34]">
            {statsData.slice(0, 2).map((stat, index) => (
              <div
                key={`stat-${index}`}
                className={`flex flex-col items-start gap-2 md:gap-[12.09px] pt-6 md:pt-[90.68px] pb-4 md:pb-[37.78px] px-3 md:px-[37.78px] ${
                  index === 0
                    ? "border-r-[1.51px] [border-right-style:dashed] border-[#4b3d34]"
                    : ""
                }`}
              >
                <h3 className="self-stretch font-bold text-[#4b3d34] text-lg md:text-[37.8px] leading-[25px] md:leading-[56.7px] font-[Akatab] tracking-[0]">
                  {stat.value}
                </h3>
                <p className="self-stretch font-[Akatab] font-normal text-[#676665] text-xs md:text-[13.6px] tracking-[0] leading-[15px] md:leading-[20.4px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 w-full">
            {statsData.slice(2, 4).map((stat, index) => (
              <div
                key={`stat-${index + 2}`}
                className={`flex flex-col items-start gap-2 md:gap-[12.09px] px-3 md:px-[37.78px] py-4 md:py-[52.89px] ${
                  index === 0
                    ? "border-r-[1.51px] [border-right-style:dashed] border-[#4b3d34]"
                    : ""
                }`}
              >
                <h3 className="self-stretch font-bold text-[#4b3d34] text-lg md:text-[37.8px] leading-[25px] md:leading-[56.7px] font-[Akatab] tracking-[0]">
                  {stat.value}
                </h3>
                <p className="self-stretch font-[Akatab] font-normal text-[#676665] text-xs md:text-[13.6px] tracking-[0] leading-[15px] md:leading-[20.4px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
