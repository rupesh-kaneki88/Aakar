import React from "react";
import { Separator } from "@/app/components/ui/Separator";
import { Button } from "@/app/components/ui/Button";
import { FacebookIcon, TwitterIcon, LinkedinIcon, PinIcon, InstagramIcon, YoutubeIcon } from "lucide-react";

export const CollectionShowcaseSection = (): React.ReactNode => {
  // Collection categories data
  const categories = [
    {
      name: "HENLEY SHIRT",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-5.svg",
    },
    {
      name: "SHARARA SUITS",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-3.svg",
    },
    {
      name: "GARARA SUITS",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-9.svg",
    },
    {
      name: "LONG-SLEEVE SUITS",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-8.svg",
    },
    {
      name: "PAKISTANI SUITS",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-4.svg",
    },
    {
      name: "INDO-WESTERN",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-1.svg",
    },
    {
      name: "INDIEE LUXEE",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design.svg",
    },
    {
      name: "ANARKALIS",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-7.svg",
    },
    {
      name: "POLO DRESS",
      image: "https://c.animaapp.com/mdh9p58vtKPJ88/img/abstract-design-5.svg",
    },
  ];

  // Footer links data
  const homeLinks = ["Why Us", "About Us", "Testimonials", "FAQ's"];
  const productLinks = ["All Suits", "Collection", "Indiee Luxee"];

  return (
    <footer className="flex flex-col w-full items-center border-t-[1.57px] border-dashed border-neutral-800">
      {/* Categories marquee section */}
      <div className="w-full overflow-hidden relative py-6 md:py-[39.38px]">
        <div className="flex w-max animate-scroll whitespace-nowrap gap-2 md:gap-[12.6px] px-4 md:px-0">
          {/* Original + Duplicate content for seamless looping */}
          {[...categories, ...categories].map((category, index) => (
            <React.Fragment key={index}>
              <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-[#333333] text-sm md:text-[23.6px] tracking-[0] leading-[20px] md:leading-[28.3px] whitespace-nowrap">
                {category.name}
              </div>
              {index % categories.length !== categories.length - 1 && (
                <img
                  className="relative w-[30px] h-[30px] md:w-[47.25px] md:h-[47.25px]"
                  alt="Abstract design"
                  src={category.image}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>


      {/* Divider image */}

      <div className="w-full h-[66px] flex items-center justify-between px-4 md:px-44 bg-[#ffffff] md:h-66 border-t-[1.57px] border-dashed border-neutral-800">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/aakar_studio_logo.png" alt="Aakar Studio Logo" className="h-20 md:h-34" />
        </div>

        {/* Social Media Icons on the right */}
        <div className="flex items-center gap-2 md:gap-3 bg-[#4B3D34] rounded-lg px-3 md:px-4 py-2 md:py-3 md:h-20">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Meta (Facebook)"
            className="rounded-full bg-transparent cursor-pointer border-2 border-white hover:bg-white/10 transition-colors w-6 h-6 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => window.open('https://www.facebook.com/', '_blank', 'noopener,noreferrer')}
          >
            <FacebookIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="X (Twitter)"
            className="rounded-full bg-transparent cursor-pointer border-2 border-white hover:bg-white/10 transition-colors w-6 h-6 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => window.open('https://x.com/', '_blank', 'noopener,noreferrer')}
          >
            <TwitterIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="LinkedIn"
            className="rounded-full bg-transparent cursor-pointer border-2 border-white hover:bg-white/10 transition-colors w-6 h-6 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => window.open('https://www.linkedin.com/', '_blank', 'noopener,noreferrer')}
          >
            <LinkedinIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Pinterest"
            className="rounded-full bg-transparent cursor-pointer border-2 border-white hover:bg-white/10 transition-colors w-6 h-6 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => window.open('https://www.pinterest.com/', '_blank', 'noopener,noreferrer')}
          >
            <PinIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Instagram"
            className="rounded-full bg-transparent cursor-pointer border-2 border-white hover:bg-white/10 transition-colors w-6 h-6 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')}
          >
            <InstagramIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="YouTube"
            className="rounded-full bg-transparent cursor-pointer border-2 border-white hover:bg-white/10 transition-colors w-6 h-6 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer')}
          >
            <YoutubeIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Button>
        </div>
      </div>
      {/* <img
        className="relative w-full"
        alt="Sub container"
        src="https://c.animaapp.com/mdh9p58vtKPJ88/img/sub-container.svg"
      /> */}

      {/* Footer content */}
      <div className="flex flex-col items-center w-full border-t-[1.57px] border-dashed border-neutral-800">
        {/* Main footer sections */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[63px] px-4 md:px-[127.57px] py-8 md:py-[63px] w-full border-b-[1.57px] border-dashed border-neutral-800">
          {/* Home section */}
          <div className="flex flex-col items-start gap-4 md:gap-[23.62px] flex-1">
            <h3 className="w-full mt-[-0.79px] font-medium text-[#4e472c] text-base md:text-[17.3px] leading-normal [font-family:'Akatab',Helvetica] tracking-[0]">
              Home
            </h3>

            <div className="flex flex-wrap items-center gap-2 md:gap-[12.6px] w-full">
              {homeLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <div className="relative w-fit mt-[-0.79px] [font-family:'Akatab',Helvetica] font-normal text-[#4b3d34] text-sm md:text-[15.7px] tracking-[0] leading-[20px] md:leading-[23.6px] whitespace-nowrap">
                    {link}
                  </div>
                  {index < homeLinks.length - 1 && (
                    <div className="relative w-[3px] h-[3px] md:w-[4.72px] md:h-[4.72px] bg-dark-15 rounded-[1.5px] md:rounded-[2.36px]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Products section */}
          <div className="flex flex-col items-start gap-4 md:gap-[23.62px] flex-1">
            <h3 className="w-full mt-[-0.79px] font-medium text-[#4e472c] text-base md:text-[17.3px] leading-normal [font-family:'Akatab',Helvetica] tracking-[0]">
              Products
            </h3>

            <div className="flex flex-wrap items-center gap-2 md:gap-[12.6px] w-full">
              {productLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <div className="relative w-fit mt-[-0.79px] [font-family:'Akatab',Helvetica] font-normal text-[#4b3d34] text-sm md:text-[15.7px] tracking-[0] leading-[20px] md:leading-[23.6px] whitespace-nowrap">
                    {link}
                  </div>
                  {index < productLinks.length - 1 && (
                    <div className="relative w-[3px] h-[3px] md:w-[4.72px] md:h-[4.72px] bg-dark-15 rounded-[1.5px] md:rounded-[2.36px]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Newsletter section */}
          <div className="flex flex-col items-start gap-4 md:gap-[23.62px] flex-1">
            <h3 className="w-full mt-[-0.79px] font-medium text-[#4e472c] text-base md:text-[17.3px] leading-normal [font-family:'Akatab',Helvetica] tracking-[0]">
              Subscribe to Newsletter
            </h3>

            <div className="flex items-center justify-between px-3 md:px-[18.9px] py-2 md:py-[14.17px] w-full bg-[#dfe5e5] rounded-[9.45px]">
              <div className="relative w-fit mt-[-0.79px] [font-family:'Akatab',Helvetica] font-normal text-[#4e472c] text-xs md:text-[14.2px] tracking-[0] leading-[18px] md:leading-[21.3px] whitespace-nowrap">
                Your Email
              </div>

              <div className="relative w-[15px] h-[15px] md:w-[18.9px] md:h-[18.9px]">
                <img
                  className="absolute w-[12px] h-[10px] md:w-[15px] md:h-[13px] top-[2px] md:top-[3px] left-[1px] md:left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/mdh9p58vtKPJ88/img/vector-4.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-[127.57px] py-6 md:py-[39.38px] w-full gap-4 md:gap-0">
          <div className="relative w-fit mt-[-0.79px] [font-family:'Akatab',Helvetica] font-normal text-[#4e472c] text-xs md:text-[14.2px] tracking-[0] leading-[18px] md:leading-[21.3px] whitespace-nowrap">
            © 2025 AAKAAR Studio. All rights reserved.
          </div>

          <div className="inline-flex items-center gap-2 md:gap-[8.66px]">
            <div className="relative w-fit mt-[-0.79px] [font-family:'Akatab',Helvetica] font-normal text-[#4e472c] text-xs md:text-[14.2px] tracking-[0] leading-[18px] md:leading-[21.3px] whitespace-nowrap">
              Terms &amp; Conditions
            </div>

            <Separator orientation="vertical" className="h-full" />

            <div className="relative w-fit mt-[-0.79px] [font-family:'Akatab',Helvetica] font-normal text-[#4e472c] text-xs md:text-[14.2px] tracking-[0] leading-[18px] md:leading-[21.3px] whitespace-nowrap">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};