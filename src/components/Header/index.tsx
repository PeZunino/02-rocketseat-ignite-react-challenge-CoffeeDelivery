import { NavLink } from "react-router-dom";
import imgLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={imgLogo}
        alt="copo termico de café com logo da Rocketseat e título ao lado escrito Coffee Delivery"
      />
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </LocationContainer>

        <NavLink to={"/checkout"}>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
