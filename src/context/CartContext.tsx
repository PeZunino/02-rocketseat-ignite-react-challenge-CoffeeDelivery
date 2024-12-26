import { createContext, ReactNode, useState } from "react";
import { ICoffee } from "../components/CoffeeCard";

interface CartItem {
  coffee: ICoffee;
  amount: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}
interface CartContextProps {
  cartItems: CartItem[];
  handleNewItemInCart: (item: CartItem) => void;
}

export const CartItemsContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleNewItemInCart(newItem: CartItem) {
    const alreadyInCart = cartItems.find(
      ({ coffee }) => coffee.id == newItem.coffee.id
    );

    if (alreadyInCart == undefined) {
      setCartItems((state) => [...state, newItem]);
      return;
    }

    const updatedCartItems = cartItems.map(({ amount, coffee }) => {
      if (coffee.id == newItem.coffee.id) {
        return {
          amount: amount + newItem.amount,
          coffee,
        } as CartItem;
      }
      return { amount, coffee };
    });

    setCartItems(updatedCartItems);
  }
  return (
    <CartItemsContext.Provider value={{ handleNewItemInCart, cartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
}
