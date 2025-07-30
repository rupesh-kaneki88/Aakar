'use client'

import { SearchIcon, ShoppingBagIcon, UserIcon, HeartIcon, FacebookIcon, TwitterIcon, LinkedinIcon, PinIcon, InstagramIcon, YoutubeIcon, MenuIcon, XIcon } from "lucide-react";
import React, { JSX, useState } from "react";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/app/components/ui/Navigation-menu";
import { CategoryExplorerSection } from "@/app/components/CategoryExplorerSection";
import { CollectionShowcaseSection } from "@/app/components/CollectionShowcaseSection";
import { FeaturedProductsSection } from "@/app/components/FeaturedProductSection";
import { HeroImageSection } from "@/app/components/HeroImageSection";
import { PromotionalBannerSection } from "@/app/components/PromotionalBannerSection";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export const Home = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  // Placeholder handlers for header icons
  const handleSearchClick = () => {
    alert('Search functionality coming soon!');
  };
  const handleUserClick = () => {
    alert('User menu coming soon!');
  };
  const handleWishlistClick = () => {
    alert('Wishlist functionality coming soon!');
  }
  const handleCartClick = () => {
    alert('Cart sidebar coming soon!');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="5489:169"
    >
      <div className="bg-white overflow-hidden w-full relative">
        {/* Header with logo and navigation */}
        <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-[140px] py-4 md:py-[37px] relative">
          {/* Mobile: Hamburger Menu, Desktop: Social Media Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile Hamburger Menu */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
              onClick={toggleSidebar}
              className="md:hidden w-8 h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              <MenuIcon className="w-6 h-6 text-[#4b3d34]" />
            </Button>

            {/* Desktop Social Media Icons */}
            <div className="hidden md:flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Meta (Facebook)"
                className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-9 h-9 flex items-center justify-center"
                onClick={() => window.open('https://www.facebook.com/', '_blank', 'noopener,noreferrer')}
              >
                <FacebookIcon className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="X (Twitter)"
                className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-9 h-9 flex items-center justify-center"
                onClick={() => window.open('https://x.com/', '_blank', 'noopener,noreferrer')}
              >
                <TwitterIcon className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-9 h-9 flex items-center justify-center"
                onClick={() => window.open('https://www.linkedin.com/', '_blank', 'noopener,noreferrer')}
              >
                <LinkedinIcon className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Pinterest"
                className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-9 h-9 flex items-center justify-center"
                onClick={() => window.open('https://www.pinterest.com/', '_blank', 'noopener,noreferrer')}
              >
                <PinIcon className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-9 h-9 flex items-center justify-center"
                onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')}
              >
                <InstagramIcon className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="YouTube"
                className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-9 h-9 flex items-center justify-center"
                onClick={() => window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer')}
              >
                <YoutubeIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>

          {/* Logo - Center on mobile, left on desktop */}
          <img
            className="w-[120px] h-[64px] md:w-[183px] md:h-[97px]"
            alt="Logo"
            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/group-6.png"
          />

          {/* Header Icons - Right side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop: Show all icons, Mobile: Show only bag */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open search"
                onClick={handleSearchClick}
                className="w-8 h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                <SearchIcon className="!w-6 !h-6 text-[#4b3d34]" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open user menu"
                onClick={handleUserClick}
                className="w-8 h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                <UserIcon className="!w-6 !h-6 text-[#4b3d34]" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open wishlist"
                onClick={handleWishlistClick}
                className="w-8 h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                <HeartIcon className="!w-6 !h-6 text-[#4b3d34]" aria-hidden="true" />
              </Button>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open shopping bag"
                onClick={handleCartClick}
                className="w-6 h-6 md:w-8 md:h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                <ShoppingBagIcon className="!w-4 !h-4 md:!w-6 md:!h-6 text-[#4b3d34]" aria-hidden="true" />
              </Button>
              <div className="[font-family:'Akatab',Helvetica] font-normal text-[#4b3d34] text-sm md:text-[17.1px]">
                <span className="font-bold">Bag </span>
                <span className="font-black">|</span>
                <span className="font-bold"> 0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        <div className={`fixed inset-0 z-50 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          />
          
          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header - Fixed */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <img
                  className="w-[100px] h-[53px]"
                  alt="Logo"
                  src="https://c.animaapp.com/mdh9p58vtKPJ88/img/group-6.png"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close navigation menu"
                  onClick={toggleSidebar}
                  className="w-8 h-8"
                >
                  <XIcon className="w-6 h-6 text-[#4b3d34]" />
                </Button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto">
                {/* Additional Mobile Menu Items */}
                <div className="mt-8 space-y-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      handleSearchClick();
                      toggleSidebar();
                    }}
                  >
                    <SearchIcon className="!w-5 !h-5 mr-3 text-[#4b3d34]" />
                    Search
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      handleUserClick();
                      toggleSidebar();
                    }}
                  >
                    <UserIcon className="!w-5 !h-5 mr-3 text-[#4b3d34]" />
                    Account
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    aria-label="Open wishlist"
                    onClick={() => {
                      handleUserClick();
                      toggleSidebar();
                    }}
                  >
                    <HeartIcon className="!w-5 !h-5 mr-3 text-[#4b3d34]" />
                    Wishlist
                  </Button>
                </div>

                {/* Navigation Menu */}
                <div className="p-4">
                  <nav className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#4b3d34] mb-4">Navigation</h3>
                    <ul className="space-y-2">
                      {navItems.map((item, index) => (
                        <li key={index}>
                          <button
                            className="w-full text-left [font-family:'Akatab',Helvetica] font-normal text-neutral-800 text-base tracking-[0] leading-[25.6px] cursor-pointer bg-transparent border-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary px-3 py-2 rounded hover:bg-gray-100"
                            aria-label={item.text}
                            tabIndex={0}
                            onClick={() => {
                              alert(`${item.text} navigation coming soon!`);
                              toggleSidebar();
                            }}
                          >
                            {item.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>

                </div>
              </div>

              {/* Social Media Links - Fixed Bottom */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-[#4b3d34] mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Meta (Facebook)"
                    className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-10 h-10 flex items-center justify-center"
                    onClick={() => window.open('https://www.facebook.com/', '_blank', 'noopener,noreferrer')}
                  >
                    <FacebookIcon className="w-6 h-6 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="X (Twitter)"
                    className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-10 h-10 flex items-center justify-center"
                    onClick={() => window.open('https://x.com/', '_blank', 'noopener,noreferrer')}
                  >
                    <TwitterIcon className="w-6 h-6 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="LinkedIn"
                    className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-10 h-10 flex items-center justify-center"
                    onClick={() => window.open('https://www.linkedin.com/', '_blank', 'noopener,noreferrer')}
                  >
                    <LinkedinIcon className="w-6 h-6 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Pinterest"
                    className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-10 h-10 flex items-center justify-center"
                    onClick={() => window.open('https://www.pinterest.com/', '_blank', 'noopener,noreferrer')}
                  >
                    <PinIcon className="w-6 h-6 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Instagram"
                    className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-10 h-10 flex items-center justify-center"
                    onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')}
                  >
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="YouTube"
                    className="rounded-full bg-[#4b3d34] cursor-pointer border-2 border-white hover:bg-[#3a2e25] transition-colors w-10 h-10 flex items-center justify-center"
                    onClick={() => window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer')}
                  >
                    <YoutubeIcon className="w-6 h-6 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav aria-label="Main navigation" className="hidden md:block mx-auto max-w-none justify-center">
          <ul className="flex gap-8 px-[153px] list-none">
            {navItems.map((item, index) => (
              <li key={index} className={item.width}>
                <button
                  className="[font-family:'Akatab',Helvetica] font-normal text-neutral-800 text-[17.1px] tracking-[0] leading-[25.6px] cursor-pointer bg-transparent border-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary px-1 rounded"
                  aria-label={item.text}
                  tabIndex={0}
                  onClick={() => alert(`${item.text} navigation coming soon!`)}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>

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
                Don't miss out – experience the epitome of fashion by
                clicking 'Buy Now' and embrace a world of chic elegance
                delivered to your doorstep. Your style journey begins here.
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

        {/* Collection Showcase Section */}
        <section className="w-full mt-8 md:mt-16" aria-labelledby="collection-showcase-heading">
          <CollectionShowcaseSection />
        </section>
      </div>
    </div>
  );
}; 