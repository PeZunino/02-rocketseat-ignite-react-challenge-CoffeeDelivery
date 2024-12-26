import { useContext } from "react";
import { CartItemsContext } from "../context/CartItems/CartItemsContext";

export function useCart() {
  return useContext(CartItemsContext);
}
