import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubTitle,
  HeroFooter,
  Info,
  MainContent,
} from "./styles.ts";
import heroImage from "../../assets/hero-img.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { coffees } from "../../../data.json";
import { CoffeeCard } from "./components/CoffeeCard/index.tsx";

export function Home() {
  const { colors } = useTheme();
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <div>
            <HeroTitle>
              Encontre o café perfeito para qualquer hora do dia
            </HeroTitle>
            <HeroSubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </HeroSubTitle>
            <HeroFooter>
              <ul>
                <Info>
                  <ShoppingCart
                    weight="fill"
                    size={32}
                    color={colors.white}
                    style={{ background: colors["yellow-dark"] }}
                  />
                  <p>Compra simples e segura</p>
                </Info>
                <Info>
                  <Timer
                    weight="fill"
                    size={32}
                    color={colors.white}
                    style={{ background: colors.yellow }}
                  />
                  <p>Entrega rápida e rastreada</p>
                </Info>
              </ul>

              <ul>
                <Info>
                  <Package
                    weight="fill"
                    size={32}
                    color={colors.white}
                    style={{ background: colors["base-text"] }}
                  />
                  <p>Embalagem mantém o café intacto</p>
                </Info>
                <Info>
                  <Coffee
                    weight="fill"
                    size={32}
                    color={colors.white}
                    style={{ background: colors.purple }}
                  />
                  <p>O café chega fresquinho até você</p>
                </Info>
              </ul>
            </HeroFooter>
          </div>

          <img src={heroImage} />
        </HeroContent>
      </HeroContainer>

      <MainContent>
        <h2>Nossos Cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </MainContent>
    </>
  );
}
