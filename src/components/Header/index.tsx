import {
  HeaderContainer,
  LocationContainer,
  CartButtonContainer,
} from "./styles";
import coffeeDeliveryLogo from "../../assets/navbar-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

export function Header() {
  const { colors } = useTheme();

  const { cartItems } = useCart();

  const cartItemsAmount = cartItems.length;
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} />
      </NavLink>

      <aside>
        <LocationContainer>
          <MapPin weight="fill" size={22} color={colors.purple} />
          <p>Porto Alegre, RS</p>
        </LocationContainer>

        <CartButtonContainer>
          <NavLink to="/checkout">
            {cartItemsAmount > 0 ? <span>{cartItemsAmount}</span> : null}
            <ShoppingCart
              weight="fill"
              size={22}
              color={colors["yellow-dark"]}
            />
          </NavLink>
        </CartButtonContainer>
      </aside>
    </HeaderContainer>
  );
}
