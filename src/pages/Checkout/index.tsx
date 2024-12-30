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
  const { cartItems, decrementAmount, incrementAmount } = useCart();

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
                  <RemoverItemButton>
                    <Trash size={16} color={colors.purple} />
                    <span>REMOVER</span>
                  </RemoverItemButton>
                </div>
              </div>
              <span>R$ {(coffee.price * amount).toFixed(2)}</span>
            </CartItem>
          ))}

          <p>
            Total de itens <span>R$ 29,90</span>
          </p>
          <p>
            Entrega <span>R$ 3,50</span>
          </p>
          <p>
            Total <span>R$ 33,20</span>
          </p>

          <ConfirmOrderButton form="form">CONFIRMAR PEDIDO</ConfirmOrderButton>
        </OrderResume>
      </aside>
    </ContentContainer>
  );
}
