import { useContext } from "react";
import { CartItemsContext } from "../context/CartContext";

export function useCart() {
  return useContext(CartItemsContext);
}
