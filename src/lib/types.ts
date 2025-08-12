export interface Category {
    name: string;
    selected: boolean;
  }

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  category: string;
  color?: string;
  size?: string;
  description: string;
  mrpText: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  deliveryInfo: string;
  details: { title: string; content: string }[];
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

export interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}