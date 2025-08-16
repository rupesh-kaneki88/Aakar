
'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { Separator } from './ui/Separator';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/Sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/Select';

export default function Sidebar() {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('newest');

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleColorChange = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filters = (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <Separator />
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Sort By</h3>
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator className="my-4" />
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex justify-between">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="500"
          max="5000"
          value={priceRange[0]}
          onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min="500"
          max="5000"
          value={priceRange[1]}
          onChange={e => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
      </div>
      <Separator className="my-4" />
      <div>
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="grid grid-cols-3 gap-2">
          {colors.map(color => (
            <Button
              key={color}
              variant={selectedColors.includes(color) ? 'default' : 'outline'}
              onClick={() => handleColorChange(color)}
            >
              {color}
            </Button>
          ))}
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        <h3 className="font-semibold mb-2">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? 'default' : 'outline'}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block w-full">{filters}</div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full">Filters</Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-white">{filters}</SheetContent>
        </Sheet>
      </div>
    </>
  );
}
