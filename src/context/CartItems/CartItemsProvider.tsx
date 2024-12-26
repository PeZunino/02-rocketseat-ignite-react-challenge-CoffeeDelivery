import { ReactNode, useState } from "react";
import { CartItemsContext, ICartItem } from "./CartItemsContext";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  function handleNewItemInCart(newItem: ICartItem) {
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
        } as ICartItem;
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
