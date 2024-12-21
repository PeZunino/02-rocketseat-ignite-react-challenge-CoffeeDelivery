import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  ContentContainer,
  CompleteOrderContainer,
  OrderDetailsContainer,
  OrderAddressContainer,
  OrderAddressTitle,
  OrderPaymentTypeContainer,
  OrderPaymentTypeTitle,
  PaymentType,
} from "./styles";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input";

export function Checkout() {
  const theme = useTheme();
  return (
    <ContentContainer>
      <CompleteOrderContainer>
        <p>Complete seu pedido</p>

        <OrderAddressContainer>
          <OrderAddressTitle>
            <MapPinLine size={22} color={theme["yellow-dark"]} />

            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </OrderAddressTitle>

          <form action="">
            <Input id="code" placeholder="CEP" />
            <Input id="street" width={"100%"} placeholder="Rua" />
            <div>
              <Input id="number" placeholder="Número" />

              <Input
                id="complement"
                width={"100%"}
                placeholder="Complemento"
                informativeText="Opcional"
              />
            </div>
            <div>
              <Input id="neighborhood" placeholder="Bairro" />
              <Input id="city" width={"10.25rem"} placeholder="Cidade" />
              <Input id="state" width={"3.75rem"} placeholder="UF" />
            </div>
          </form>
        </OrderAddressContainer>

        <OrderPaymentTypeContainer>
          <OrderPaymentTypeTitle>
            <CurrencyDollar size={22} color={theme["purple"]} />

            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega escolha a forma de pagar
              </span>
            </div>
          </OrderPaymentTypeTitle>

          <PaymentType>
            <button>
              <CreditCard size={16} color={theme.purple} />
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank size={16} color={theme.purple} />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Money size={16} color={theme.purple} />
              DINHEIRO
            </button>
          </PaymentType>
        </OrderPaymentTypeContainer>
      </CompleteOrderContainer>

      <OrderDetailsContainer>
        <p>Cafés selecionados</p>
        <div></div>
      </OrderDetailsContainer>
    </ContentContainer>
  );
}
