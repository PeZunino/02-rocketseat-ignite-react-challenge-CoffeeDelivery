import { HeaderContainer, LocationContainer, CartButton } from "./styles";
import coffeeDeliveryLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartItemsContext } from "../../context/CartContext";

export function Header() {
  const { colors } = useTheme();

  const { cartItems } = useContext(CartItemsContext);

  const cartItemsAmount = cartItems.length;
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} />

      <aside>
        <LocationContainer>
          <MapPin weight="fill" size={22} color={colors.purple} />
          <p>Porto Alegre, RS</p>
        </LocationContainer>

        <CartButton>
          {cartItemsAmount > 0 ? <span>{cartItemsAmount}</span> : null}
          <ShoppingCart weight="fill" size={22} color={colors["yellow-dark"]} />
        </CartButton>
      </aside>
    </HeaderContainer>
  );
}
