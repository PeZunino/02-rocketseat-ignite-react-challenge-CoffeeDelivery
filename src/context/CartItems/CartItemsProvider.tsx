import { ReactNode, useEffect, useReducer } from "react";
import { CartItemsContext, ICartItem } from "./CartItemsContext";
import { cartItemsReducer } from "../../reducer/cartItems/reducer";
import {
  addItemToCartAction,
  cleanCartAction,
  decrementItemAction,
  incrementItemAction,
  removeItemAction,
} from "../../reducer/cartItems/actions";
interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, dispatch] = useReducer(
    cartItemsReducer,
    [],
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-items-state-1.0.0"
      );
      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);
      else return initialState;
    }
  );

  function decrementAmount(id: string) {
    dispatch(decrementItemAction(id));
  }
  function incrementAmount(id: string) {
    dispatch(incrementItemAction(id));
  }

  function removeItem(id: string) {
    dispatch(removeItemAction(id));
  }
  function cleanCart() {
    dispatch(cleanCartAction());
  }

  function addNewItem(item: ICartItem) {
    dispatch(addItemToCartAction(item));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems);
    localStorage.setItem("@coffee-delivery:cart-items-state-1.0.0", stateJSON);
  });

  return (
    <CartItemsContext.Provider
      value={{
        addNewItem,
        cartItems,
        decrementAmount,
        incrementAmount,
        removeItem,
        cleanCart,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
