import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      
      if (existingItem) {
        toast({
          title: "Cart Updated",
          description: `${item.name} quantity updated to ${existingItem.quantity + quantity}`,
        });
        return prevItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      
      toast({
        title: "Added to Cart",
        description: `${quantity}x ${item.name} added to cart`,
      });
      return [...prevItems, { ...item, quantity }];
    });
  };

  const removeFromCart = (name: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
    toast({
      title: "Removed from Cart",
      description: "Item removed from your cart",
    });
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(name);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
