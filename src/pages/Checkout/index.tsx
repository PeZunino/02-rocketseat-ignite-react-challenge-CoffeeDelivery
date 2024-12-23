import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
  Minus,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import {
  Content,
  Title,
  AddressContainer,
  ContainerHeader,
  Item,
  ItemOptions,
} from "./styles";

import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import { useContext } from "react";

export function Checkout() {
  const { cartItems } = useContext(OrderContext);
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
        <div>
          {cartItems.map(({ amount, coffee }) => (
            <Item key={coffee.id}>
              <img src={coffee.image} />

              <ItemOptions>
                <p>{coffee.title}</p>

                <div>
                  <div>
                    <button>
                      <Minus size={14} color={theme["purple"]} />
                    </button>
                    <span>{amount}</span>
                    <button>
                      <Plus size={14} color={theme["purple"]} />
                    </button>
                  </div>

                  <button>
                    <Trash size={14} color={theme["purple"]} />
                    RETIRAR
                  </button>
                </div>
              </ItemOptions>

              <p>
                <span>R$ </span>
                {String(coffee.price).padEnd(4, "0").replace(".", ",")}
              </p>
            </Item>
          ))}

          <p>
            Total de itens <span>R$ 19,80</span>
          </p>
          <p>
            Entrega <span>R$ 3,50</span>
          </p>
          <p>
            Total <span>R$ 23,30</span>
          </p>

          <NavLink to={"/success"}>CONFIRMAR PEDIDO</NavLink>
        </div>
      </aside>
    </Content>
  );
}
