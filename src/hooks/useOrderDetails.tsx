import { useContext } from "react";
import { OrderDetailsContext } from "../context/OrderDetails/OrderDetailsContext";

export function useOrderDetails() {
  return useContext(OrderDetailsContext);
}
