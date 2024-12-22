import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
} from "@phosphor-icons/react";
import { Content, Title, AddressContainer, ContainerHeader } from "./styles";
import { useTheme } from "styled-components";

export function Checkout() {
  const theme = useTheme();
  return (
    <Content>
      <section>
        <Title>Complete seu pedido</Title>

        <AddressContainer>
          <ContainerHeader>
            <MapPinLine size={22} color={theme["yellow-dark"]} />

            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </ContainerHeader>

          <form action="">
            <input id="code" aria-label="code" type="text" placeholder="CEP" />
            <input
              id="street"
              aria-label="street"
              type="text"
              placeholder="Rua"
            />

            <div>
              <input
                id="number"
                aria-label="number"
                type="text"
                placeholder="Número"
              />
              <input
                id="complement"
                aria-label="complement"
                type="text"
                placeholder="Complemento"
              />
            </div>

            <div>
              <input
                id="neighborhood"
                aria-label="neighborhood"
                type="text"
                placeholder="Bairro"
              />
              <input
                id="city"
                aria-label="city"
                type="text"
                placeholder="Cidade"
              />
              <input
                id="state"
                aria-label="state"
                type="text"
                placeholder="UF"
              />
            </div>
          </form>
        </AddressContainer>

        <footer>
          <ContainerHeader>
            <CurrencyDollar size={22} color={theme["purple"]} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega escolha a forma de pagar
              </span>
            </div>
          </ContainerHeader>
          <div>
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
          </div>
        </footer>
      </section>

      <aside>
        <Title>Cafés selecionados</Title>
      </aside>
    </Content>
  );
}
