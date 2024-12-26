import { HeaderContainer, LocationContainer, CartButton } from "./styles";
import coffeeDeliveryLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

interface HeaderProps {
  cartItems: number;
}

export function Header({ cartItems }: HeaderProps) {
  const { colors } = useTheme();

  const hasItems = cartItems > 0;
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} />

      <aside>
        <LocationContainer>
          <MapPin weight="fill" size={22} color={colors.purple} />
          <p>Porto Alegre, RS</p>
        </LocationContainer>

        <CartButton>
          {hasItems ? <span>{cartItems}</span> : null}
          <ShoppingCart weight="fill" size={22} color={colors["yellow-dark"]} />
        </CartButton>
      </aside>
    </HeaderContainer>
  );
}
