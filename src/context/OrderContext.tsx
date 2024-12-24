import { createContext, ReactNode, useEffect, useState } from "react";
import { coffees } from "../../data.json";

interface OrderContextProps {
  cartItems: CoffeeOrder[];
  preOrder: CoffeeOrder[];
  handleIncrementCoffeeAmount: (id: string) => void;
  handleDecrementCoffeeAmount: (id: string) => void;
  handleAddToCart: (coffee: ICoffee, amount: number) => void;
  handleDecrementFromCart: (id: string) => void;
  handleIncrementCart: (id: string) => void;
  removeFromCart: (id: string) => void;
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

  function handleAddToCart(coffee: ICoffee, amount: number) {
    const hasInCart = cartItems.find((item) => item.coffee == coffee);

    if (hasInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.coffee == coffee) {
          return {
            amount: item.amount + amount,
            coffee,
          } as CoffeeOrder;
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems((state) => [...state, { amount, coffee }]);
    }

    const updatedOrderList = preOrder.map((item) => {
      if (item.coffee.id == coffee.id && item.amount > 1) {
        return {
          coffee: item.coffee,
          amount: 1,
        } as CoffeeOrder;
      }
      return item;
    });

    setPreOrder(updatedOrderList);
  }

  function handleDecrementFromCart(id: string) {
    const updatedOrderList = cartItems.map((item) => {
      if (item.coffee.id == id && item.amount > 1) {
        return {
          coffee: item.coffee,
          amount: item.amount - 1,
        } as CoffeeOrder;
      }
      return item;
    });
    setCartItems(updatedOrderList);
  }
  function handleIncrementCart(id: string) {
    const updatedOrderList = cartItems.map((item) => {
      if (item.coffee.id == id) {
        return {
          coffee: item.coffee,
          amount: item.amount + 1,
        } as CoffeeOrder;
      }
      return item;
    });
    setCartItems(updatedOrderList);
  }
  function removeFromCart(id: string) {
    console.log("here");
    console.log(id);
    const updatedOrderList = cartItems.filter((item) => item.coffee.id != id);
    setCartItems(updatedOrderList);
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
        handleDecrementFromCart,
        handleIncrementCart,
        removeFromCart,
        preOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
