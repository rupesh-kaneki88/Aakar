export interface Category {
    name: string;
    selected: boolean;
  }

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  collections: string[]; // Changed from category
  tags: string[]; // Added tags
  vendor?: string;
  description: string;
  mrpText: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  deliveryInfo: string;
  details: { title: string; content: string }[];
  merchandiseId?: string; // Added for Shopify variant ID
  handle: string; // Added for product URL slug
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: Product, quantity: number, selectedColor: string, selectedSize: string) => void;
  removeItem: (id: string, selectedColor: string, selectedSize: string) => void;
  updateQuantity: (id: string, selectedColor: string, selectedSize: string, quantity: number) => void;
  getCartItemCount: () => number;
  getCartTotal: () => number;
}

export interface WishlistContextType {
  wishlistItems: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
}