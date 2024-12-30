import { Content, Item } from "./styles";
import deliveryIllustration from "../../assets/delivery-illustration.svg";
import { Timer, MapPin, CurrencyDollar } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useOrderDetails } from "../../hooks/useOrderDetails";

enum PaymentType {
  "credit" = "Cartão de Crédito",
  "debit" = "Cartão de Débito",
  "money" = "Dinheiro",
}
export function Success() {
  const { colors } = useTheme();
  const { orderDetails } = useOrderDetails();

  return (
    <Content>
      <div>
        <p>Uhu! Pedido confirmado</p>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <section>
          <Item>
            <MapPin
              weight="fill"
              color={colors.background}
              style={{ background: colors.purple }}
              size={32}
            />
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {orderDetails?.street}, {orderDetails?.number}{" "}
                </span>
                {orderDetails?.neighborhood} - {orderDetails?.city},{" "}
                {orderDetails?.state}
              </p>
            </div>
          </Item>

          <Item>
            <Timer
              weight="fill"
              color={colors.background}
              style={{ background: colors.yellow }}
              size={32}
            />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </Item>
          <Item>
            <CurrencyDollar
              color={colors.background}
              style={{ background: colors["yellow-dark"] }}
              size={32}
            />
            <div>
              <p>Pagamento na entrega</p>
              <span>
                {orderDetails?.paymentType
                  ? PaymentType[orderDetails.paymentType]
                  : null}
              </span>
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
