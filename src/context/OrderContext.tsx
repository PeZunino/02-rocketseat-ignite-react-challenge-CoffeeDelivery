import { createContext, ReactNode, useEffect, useState } from "react";
import { coffees } from "../../data.json";

interface OrderContextProps {
  cartItems: CoffeeOrder[];
  preOrder: CoffeeOrder[];
  handleIncrementCoffeeAmount: (id: string) => void;
  handleDecrementCoffeeAmount: (id: string) => void;
  handleAddToCart: (id: string) => void;
  setItemsInCart: (order: CoffeeOrder) => void;
}

type ICoffee = (typeof coffees)[0];
export interface CoffeeOrder {
  coffee: ICoffee;
  amount: number;
}
interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cartItems, setCartItems] = useState<CoffeeOrder[]>([]);
  const [preOrder, setPreOrder] = useState<CoffeeOrder[]>([]);

  function handleIncrementCoffeeAmount(id: string) {
    const updatedOrderList = preOrder.map((item) => {
      if (item.coffee.id == id) {
        return {
          coffee: item.coffee,
          amount: item.amount + 1,
        } as CoffeeOrder;
      }
      return item;
    });
    setPreOrder(updatedOrderList);
  }

  function handleDecrementCoffeeAmount(id: string) {
    const updatedOrderList = preOrder.map((item) => {
      if (item.coffee.id == id && item.amount > 1) {
        return {
          coffee: item.coffee,
          amount: item.amount - 1,
        } as CoffeeOrder;
      }
      return item;
    });
    setPreOrder(updatedOrderList);
  }

  function handleAddToCart(id: string) {
    preOrder.map((item) => {
      if (item.coffee.id == id) {
        setItemsInCart(item);
      }
    });
    const updatedOrderList = preOrder.map((item) => {
      if (item.coffee.id == id && item.amount > 1) {
        return {
          coffee: item.coffee,
          amount: 1,
        } as CoffeeOrder;
      }
      return item;
    });
    setPreOrder(updatedOrderList);
  }

  function setItemsInCart(order: CoffeeOrder) {
    setCartItems((state) => [...state, order]);
  }

  useEffect(() => {
    const availableItems = coffees.map(
      (item) => ({ coffee: item, amount: 1 } as CoffeeOrder)
    );
    setPreOrder(availableItems);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleDecrementCoffeeAmount,
        handleIncrementCoffeeAmount,
        setItemsInCart,
        preOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
