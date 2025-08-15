'use client'

import React, { JSX, useState, useRef, useEffect } from "react";
import { SearchIcon, ShoppingBagIcon, UserIcon, HeartIcon, FacebookIcon, TwitterIcon, LinkedinIcon, PinIcon, InstagramIcon, YoutubeIcon, MenuIcon, XIcon } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/app/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/app/components/ui/Navigation-menu";
import Link from 'next/link';
import { CartSidebar } from '@/app/components/CartSidebar';
import { useCart } from '@/app/providers/CartProvider';
import { useLoading } from '@/app/providers/LoadingProvider';

export const Header = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { getCartItemCount } = useCart();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (sidebarRef.current) {
      if (isSidebarOpen) {
        gsap.to(sidebarRef.current, { x: 0, duration: 1, ease: "power3.out" });
      } else {
        gsap.to(sidebarRef.current, { x: "-100%", duration: 2, ease: "power3.in" });
      }
    }
  }, [isSidebarOpen]);

  // Navigation menu items
  const navItems = [
    { text: "What's New", width: "w-[99px]", href: "/category/whats-new" },
    { text: "Straight Suits", width: "w-[114px]", href: "/category/straight-suits" },
    { text: "Sharara Suits", width: "w-[113px]", href: "/category/sharara-suits" },
    { text: "Pakistani Suits", width: "w-[124px]", href: "/category/pakistani-suits" },
    { text: "Anarkalis", width: "w-[77px]", href: "/category/anarkalis" },
    { text: "Garara Suits", width: "w-[104px]", href: "/category/garara-suits" },
    { text: "Indiee Luxee", width: "w-[107px]", href: "/category/indiee-luxee" },
    { text: "Collection", width: "w-[85px]", href: "/category/collection" },
    { text: "About Us", width: "w-[88px]", href: "/about-us" },
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
    setIsCartOpen(!isCartOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="bg-white md:pb-8">
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
        <Link href='/' onClick={handleLinkClick}>
          <img
            className="w-[120px] h-[64px] md:w-[183px] md:h-[97px]"
            alt="Logo"
            src="https://c.animaapp.com/mdh9p58vtKPJ88/img/group-6.png"
          />
        </Link>

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
            <Link href="/wishlist" onClick={handleLinkClick}>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open wishlist"
                className="w-8 h-8 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                <HeartIcon className="!w-6 !h-6 text-[#4b3d34]" aria-hidden="true" />
              </Button>
            </Link>
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
              <span className="font-bold"> {getCartItemCount()}</span>
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
        <div ref={sidebarRef} className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg" style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
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
                          <Link
                            href={item.href}
                            className="w-full text-left [font-family:'Akatab',Helvetica] font-normal text-neutral-800 text-base tracking-[0] leading-[25.6px] cursor-pointer bg-transparent border-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary px-3 py-2 rounded hover:bg-gray-100"
                            aria-label={item.text}
                            tabIndex={0}
                            onClick={() => { handleLinkClick(); toggleSidebar(); }}
                          >
                            {item.text}
                          </Link>
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
              <Link
                href={item.href}
                className="[font-family:'Akatab',Helvetica] font-normal text-neutral-800 text-[17.1px] tracking-[0] leading-[25.6px] cursor-pointer bg-transparent border-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary px-1 rounded"
                aria-label={item.text}
                tabIndex={0}
                onClick={handleLinkClick}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

