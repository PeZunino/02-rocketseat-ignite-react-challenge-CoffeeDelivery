import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./context/CartItems/CartItemsProvider";
import { OrderDetailsProvider } from "./context/OrderDetails/OrderDetailsProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderDetailsProvider>
            <Router />
          </OrderDetailsProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
