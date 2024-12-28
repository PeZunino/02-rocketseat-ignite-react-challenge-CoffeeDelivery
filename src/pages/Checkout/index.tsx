import { useTheme } from "styled-components";
import {
  ContentContainer,
  AddressFormContainer,
  PaymentTypeContainer,
  OrderResume,
  ContainerTitle,
  Input,
  AddressForm,
  RemoverItemButton,
  CartItem,
  ConfirmOrderButton,
} from "./styles.ts";
import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
  Trash,
} from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart.tsx";
import { IncreaseDecreaseAmountButton } from "../../components/IncreaseDecreaseAmountButton/index.tsx";
export function Checkout() {
  const { colors } = useTheme();
  const { cartItems, decrementAmount, incrementAmount } = useCart();

  return (
    <ContentContainer>
      <main>
        <h3>Complete seu pedido</h3>
        <AddressFormContainer>
          <ContainerTitle>
            <MapPinLine size={22} color={colors["yellow-dark"]} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </ContainerTitle>

          <AddressForm action="">
            <div>
              <label htmlFor="code" />
              <Input type="text" placeholder="CEP" id="code" />
            </div>
            <div>
              <label htmlFor="street" />
              <Input type="text" placeholder="Rua" id="street" />
            </div>
            <div>
              <label htmlFor="number" />
              <Input type="text" placeholder="Número" id="number" />
              <label htmlFor="complement" />
              <Input type="text" placeholder="Complemento" id="complement" />
            </div>
            <div>
              <label htmlFor="neighborhood" />
              <Input type="text" placeholder="Bairro" id="neighborhood" />
              <label htmlFor="city" />
              <Input type="text" placeholder="Cidade" id="city" />
              <label htmlFor="state" />
              <Input type="text" placeholder="UF" id="state" />
            </div>
          </AddressForm>
        </AddressFormContainer>

        <PaymentTypeContainer>
          <ContainerTitle>
            <CurrencyDollar size={22} color={colors.purple} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que desejar
                pagar
              </span>
            </div>
          </ContainerTitle>

          <form action="">
            <input name="paymentType" type="radio" id="credit" value="credit" />
            <label htmlFor="credit">
              <CreditCard size={16} color={colors.purple} />
              <span>CARTÃO DE CRÉDITO</span>
            </label>
            <input name="paymentType" type="radio" id="debit" value="debit" />
            <label htmlFor="debit">
              <Bank size={16} color={colors.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </label>
            <input name="paymentType" type="radio" id="money" value="money" />
            <label htmlFor="money">
              <Money size={16} color={colors.purple} />
              <span>DINHEIRO</span>
            </label>
          </form>
        </PaymentTypeContainer>
      </main>

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

          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </OrderResume>
      </aside>
    </ContentContainer>
  );
}
