import { Content, Item } from "./styles";
import deliveryIllustration from "../../assets/delivery-illustration.svg";
import { Timer, MapPin, CurrencyDollar } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
export function Success() {
  const theme = useTheme();
  return (
    <Content>
      <div>
        <p>Uhu! Pedido confirmado</p>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <section>
          <Item>
            <MapPin
              weight="fill"
              color={theme["white-200"]}
              style={{ background: theme["purple"] }}
              size={32}
            />
            <div>
              <p>
                Entrega em <span>Rua João Daniel , 102 </span>Farrapos - Porto
                Alegre, RS
              </p>
            </div>
          </Item>

          <Item>
            <Timer
              weight="fill"
              color={theme["white-200"]}
              style={{ background: theme["yellow"] }}
              size={32}
            />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </Item>
          <Item>
            <CurrencyDollar
              color={theme["white-200"]}
              style={{ background: theme["yellow-dark"] }}
              size={32}
            />
            <div>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </div>
          </Item>
        </section>
      </div>
      <img
        src={deliveryIllustration}
        alt="ilustração rapaz entregando pedido de moto"
      />
    </Content>
  );
}
