import { useTheme } from "styled-components";

import {
  ContentContainer,
  OrderResume,
  RemoverItemButton,
  CartItem,
  ConfirmOrderButton,
} from "./styles.ts";
import { Trash } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart.tsx";
import { IncreaseDecreaseAmountButton } from "../../components/IncreaseDecreaseAmountButton/index.tsx";
import { OrderDetailsForm } from "./components/OrderDetailsForm/index.tsx";

export function Checkout() {
  const { colors } = useTheme();
  const { cartItems, decrementAmount, incrementAmount, removeItem } = useCart();

  const deliveryPrice = 3.5;

  const totalItemsPrice = cartItems.reduce((sum, item) => {
    return sum + item.coffee.price * item.amount;
  }, 0);

  const totalPrice = deliveryPrice + totalItemsPrice;
  return (
    <ContentContainer>
      <div>
        <h3>Complete seu pedido</h3>

        <OrderDetailsForm />
      </div>

      <aside>
        <h3>Cafés selecionados</h3>
        <OrderResume>
          {cartItems.map(({ coffee, amount }) => (
            <CartItem>
              <img src={coffee.image} />
              <div>
                <p>{coffee.title}</p>
                <div>
                  <IncreaseDecreaseAmountButton
                    amount={amount}
                    decreaseAmount={() => decrementAmount(coffee.id)}
                    increaseAmount={() => incrementAmount(coffee.id)}
                  />
                  <RemoverItemButton onClick={() => removeItem(coffee.id)}>
                    <Trash size={16} color={colors.purple} />
                    <span>REMOVER</span>
                  </RemoverItemButton>
                </div>
              </div>
              <span>
                R$ {(coffee.price * amount).toFixed(2).replace(".", ",")}
              </span>
            </CartItem>
          ))}

          <p>
            Total de itens
            <span>R$ {totalItemsPrice.toFixed(2).replace(".", ",")}</span>
          </p>
          <p>
            Entrega <span>R$ {deliveryPrice.toFixed(2).replace(".", ",")}</span>
          </p>
          <p>
            Total <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
          </p>

          <ConfirmOrderButton form="form">CONFIRMAR PEDIDO</ConfirmOrderButton>
        </OrderResume>
      </aside>
    </ContentContainer>
  );
}
