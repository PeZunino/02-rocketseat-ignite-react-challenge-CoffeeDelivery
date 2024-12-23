import { createContext, ReactNode, useState } from "react";
import { ICoffee } from "../pages/Home";

interface OrderContextProps {
  order: ICoffee[];
  setOrder: (order: ICoffee[]) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderList, setOrderList] = useState<ICoffee[]>([]);

  function setOrder(order: ICoffee[]) {
    setOrderList((state) => [...state, ...order]);
  }

  return (
    <OrderContext.Provider value={{ order: orderList, setOrder: setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
