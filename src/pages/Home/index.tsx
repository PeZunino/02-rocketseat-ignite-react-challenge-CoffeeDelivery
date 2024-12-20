import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
// Coffee, Package  , Timer
import coffeeIllustration from "../../assets/coffee_illustration.svg";
import {
  HeroContainer,
  HomeContainer,
  HeroTitle,
  HeroList,
  HeroListItem,
  ImageContainer,
} from "./styles";
// , ImageContainer
import { useTheme } from "styled-components";
export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <HeroContainer>
        <HeroTitle>
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </span>
        </HeroTitle>
        <HeroList>
          <div>
            <HeroListItem>
              <ShoppingCart
                weight="fill"
                color={theme["white-200"]}
                style={{ background: theme["yellow-dark"] }}
                size={32}
              />
              <span>Compra simples e segura</span>
            </HeroListItem>

            <HeroListItem>
              <Timer
                weight="fill"
                color={theme["white-200"]}
                style={{ background: theme.yellow }}
                size={32}
              />
              <span>Entrega rápida e rastreada</span>
            </HeroListItem>
          </div>

          <div>
            <HeroListItem>
              <Package
                weight="fill"
                color={theme["white-200"]}
                style={{ background: theme["gray-300"] }}
                size={32}
              />
              <span>Embalagem mantem o café intacto</span>
            </HeroListItem>

            <HeroListItem>
              <Coffee
                weight="fill"
                color={theme["white-200"]}
                style={{ background: theme.purple }}
                size={32}
              />
              <span>Seu café chega fresquinho até você</span>
            </HeroListItem>
          </div>
        </HeroList>
      </HeroContainer>

      <ImageContainer>
        <img
          src={coffeeIllustration}
          alt="copo de café do coffee delivery com fundo amarelo e grãos"
        />
      </ImageContainer>
    </HomeContainer>
  );
}
{
  /* <div>
        <h1>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </span>

        <div>
          <ShoppingCart
            weight="fill"
            color={theme["white-200"]}
            style={{ background: theme["yellow-dark"] }}
            size={32}
          />
          <span>Compra simples e segura</span>
          <Package
            weight="fill"
            color={theme["white-200"]}
            style={{ background: theme["gray-300"] }}
            size={32}
          />
          <span>Embalagem mantem o café intacto</span>
        </div>
        <div>
          <Timer
            weight="fill"
            color={theme["white-200"]}
            style={{ background: theme.yellow }}
            size={32}
          />
          <span>Entrega rápida e rastreada</span>
          <Coffee
            weight="fill"
            color={theme["white-200"]}
            style={{ background: theme.purple }}
            size={32}
          />
          <span>Seu café chega fresquinho até você</span>
        </div>
      </div> */
}

{
  /* <ImageContainer>
        <img
          src={coffeeIllustration}
          alt="copo de café do coffee delivery com fundo amarelo e grãos"
        />
      </ImageContainer> */
}
{
  /* 
  <li>
            <ShoppingCart size={16} />
            <span>Compra simples e segura</span>
          </li>

          <li>
            <Package size={16} />
            <span>Embalagem mantem o café intacto</span>
          </li>
          
          <li>
            <Timer size={16} />

            <span>Entrega rápida e rastreada</span>
          </li>
          
          <li>
            <Coffee size={16} />
            <span>O café chega fresquinho até você</span>
          
          </li> 
          */
}
