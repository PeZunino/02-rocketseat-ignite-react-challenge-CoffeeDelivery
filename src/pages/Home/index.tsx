import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  Minus,
  Plus,
} from "@phosphor-icons/react";
import coffeeIllustration from "../../assets/coffee_illustration.svg";
import { coffees } from "../../../data.json";
import {
  HeroContainer,
  HomeContainer,
  HeroTitle,
  HeroList,
  HeroListItem,
  CoffeeItem,
  CoffeBuyActions,
  Tag,
} from "./styles";

import { useTheme } from "styled-components";

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <HeroContainer>
        <div>
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
        </div>
        <img
          src={coffeeIllustration}
          alt="copo de café do coffee delivery com fundo amarelo e grãos"
        />
      </HeroContainer>

      <main>
        <p>Nossos cafés</p>

        <div>
          {coffees.map((coffee) => (
            <CoffeeItem>
              <img
                src={coffee.image}
                alt="xicara de café expresso tradicional"
              />
              <div>
                {coffee.tags.map((tag) => (
                  <Tag>{tag.toUpperCase()}</Tag>
                ))}
              </div>
              <p>{coffee.title}</p>
              <span>{coffee.description}</span>

              <CoffeBuyActions>
                <p>
                  R${" "}
                  <span>
                    {String(coffee.price).padEnd(4, "0").replace(".", ",")}
                  </span>
                </p>

                <div>
                  <button>
                    <Minus color={theme["purple-dark"]} size={32} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus color={theme["purple-dark"]} size={32} />
                  </button>
                </div>

                <ShoppingCart
                  weight="fill"
                  color={theme["white-200"]}
                  style={{ background: theme["purple-dark"] }}
                  size={36}
                />
              </CoffeBuyActions>
            </CoffeeItem>
          ))}
        </div>
      </main>
    </HomeContainer>
  );
}
