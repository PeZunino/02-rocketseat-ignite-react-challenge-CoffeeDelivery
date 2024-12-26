import { ICoffee } from "../../components/CoffeeCard";
import { createContext } from "react";

export interface ICartItem {
  coffee: ICoffee;
  amount: number;
}

interface CartContextProps {
  cartItems: ICartItem[];
  handleNewItemInCart: (item: ICartItem) => void;
}

export const CartItemsContext = createContext({} as CartContextProps);
