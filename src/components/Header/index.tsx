import { NavLink } from "react-router-dom";
import imgLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer, ItemsCount, NavBar } from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

export function Header() {
  const { cartItems } = useContext(OrderContext);
  const theme = useTheme();

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img
          src={imgLogo}
          alt="copo termico de café com logo da Rocketseat e título ao lado escrito Coffee Delivery"
        />
      </NavLink>
      <NavBar>
        <div>
          <MapPin size={22} weight="fill" color={theme.purple} />
          Porto Alegre, RS
        </div>

        <div>
          <NavLink to={"/checkout"}>
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme["yellow-dark"]}
            />
          </NavLink>
          <ItemsCount>{cartItems.length}</ItemsCount>
        </div>
      </NavBar>
    </HeaderContainer>
  );
}
