import { ReactNode, useReducer } from "react";
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
  const [cartItems, dispatch] = useReducer(cartItemsReducer, []);

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
