import { ReactNode, useState } from "react";
import { CartItemsContext, ICartItem } from "./CartItemsContext";

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  function decrementAmount(id: string) {
    setCartItems((state) =>
      state.map((item) => {
        if (item.coffee.id == id) {
          return {
            amount: item.amount == 1 ? 1 : item.amount - 1,
            coffee: item.coffee,
          } as ICartItem;
        }
        return item;
      })
    );
  }
  function incrementAmount(id: string) {
    setCartItems((state) =>
      state.map((item) => {
        if (item.coffee.id == id) {
          return {
            amount: item.amount + 1,
            coffee: item.coffee,
          } as ICartItem;
        }
        return item;
      })
    );
  }

  function removeItem(id: string) {
    setCartItems(cartItems.filter((item) => item.coffee.id != id));
  }
  function clearCart() {
    setCartItems([]);
  }

  function addNewItem(newItem: ICartItem) {
    const alreadyInCart = cartItems.find(
      ({ coffee }) => coffee.id == newItem.coffee.id
    );

    setCartItems((state) => {
      if (!alreadyInCart) {
        return [...state, newItem];
      }
      return state.map(({ amount, coffee }) => {
        if (coffee.id == newItem.coffee.id) {
          return {
            amount: amount + newItem.amount,
            coffee,
          } as ICartItem;
        }
        return { amount, coffee };
      });
    });
  }
  return (
    <CartItemsContext.Provider
      value={{
        addNewItem,
        cartItems,
        decrementAmount,
        incrementAmount,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
