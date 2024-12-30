import { createContext } from "react";
import { OrderComplementFormData } from "../../pages/Checkout/components/OrderDetailsForm";

interface OrderDetailsContextProps {
  orderDetails: OrderComplementFormData | undefined;
  updateOrderDetails: (orderDetails: OrderComplementFormData) => void;
}
export const OrderDetailsContext = createContext(
  {} as OrderDetailsContextProps
);
