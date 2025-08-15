import React from "react";
import { Button } from "@/app/components/ui/Button";
import { useLoading } from "@/app/providers/LoadingProvider";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroImageSection: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();

  const handleShopNowClick = () => {
    setIsLoading(true);
    // Simulate an asynchronous operation, e.g., fetching data or navigating
    setTimeout(() => {
      alert('Shop Now functionality coming soon!');
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <section className="relative w-full h-[300px] md:h-[595px] overflow-hidden">
      <div className="relative w-full h-full flex">
        {/* Right side image (full width for larger screens) */}
        <div className="relative flex-1 h-full">
          <img
            className="w-full h-full object-cover"
            alt="AAKAAR Studio models showcase"
            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/maxresdefault-2.png"
          />
        </div>

        {/* Gradient overlay with text */}
        <div className="absolute h-full inset-0 bg-[linear-gradient(90deg,rgba(223,229,229,1)_13%,rgba(223,229,229,0)_100%)] w-full md:w-[758px]">
          <div className="relative flex flex-col justify-center pl-4 md:pl-[153px] pr-4 md:pr-0 pt-28 md:pt-[192px] max-w-full md:max-w-[652px]">
            <span className=" text-sm md:text-[17px] text-[#262626] mb-2">
              The AAKAAR Studio
            </span>

            <h1 className=" text-2xl md:text-5xl leading-[30px] md:leading-[70.4px] text-[#4F482C]">
              <span className="font-semibold">
                Rooted in Tradition, Designed for{" "}
              </span>
              <span className="font-black">YOU</span>
            </h1>

            {/* <Button
              className="mt-4 bg-[#4e472c] text-white rounded-[11.37px] border-[0.95px] border-dashed font-roboto text-sm md:text-[17.1px] flex items-center gap-1 w-fit"
            >
              Shop Now
              <div className="relative w-[18px] h-[18px] md:w-[22.74px] md:h-[22.74px]">
                <img
                  className="absolute w-3 h-3 md:w-4 md:h-4 top-1 left-1"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-431--stroke-.svg"
                />
              </div>
            </Button> */}
            <Link href='/category/straight-suits'>
              <Button
                className="mt-4 bg-[#4B3D34] text-white rounded-[11.37px] border-[0.95px] border-none md:w-[150px] md:h-[60px] font-roboto text-sm md:text-[17.1px] flex items-center gap-1 w-fit"
                aria-label="Shop Now"
              >
                Shop Now
                <span className="sr-only">Go to shop section</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
