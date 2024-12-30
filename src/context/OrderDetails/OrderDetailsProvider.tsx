import { ReactNode, useState } from "react";
import { OrderDetailsContext } from "./OrderDetailsContext";
import { OrderComplementFormData } from "../../pages/Checkout/components/OrderDetailsForm";

interface OrderDetailsProviderProps {
  children: ReactNode;
}
export function OrderDetailsProvider({ children }: OrderDetailsProviderProps) {
  const [orderDetails, setOrderDetails] = useState<OrderComplementFormData>();

  function updateOrderDetails(orderDetails: OrderComplementFormData) {
    setOrderDetails(orderDetails);
  }

  return (
    <OrderDetailsContext.Provider value={{ orderDetails, updateOrderDetails }}>
      {children}
    </OrderDetailsContext.Provider>
  );
}
