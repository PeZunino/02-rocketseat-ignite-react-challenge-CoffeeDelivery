import coffeeCupIlustration from "../../assets/coffee_illustration.svg";

import { useTheme } from "styled-components";
import {
  Content,
  Hero,
  HeroListItem,
  HeroList,
  HeroTitle,
  CoffeeList,
  CoffeeListItem,
  ListItemFotterOptions,
  ListItemTag,
} from "./styles";
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

export function Home() {
  const {
    handleAddToCart,
    handleDecrementCoffeeAmount,
    handleIncrementCoffeeAmount,
    preOrder,
  } = useContext(OrderContext);

  const theme = useTheme();

  return (
    <>
      <Hero>
        <div>
          <HeroTitle>
            <p>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </p>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeroTitle>

          <HeroList>
            <div>
              <HeroListItem>
                <ShoppingCart
                  weight="fill"
                  color={theme["white-200"]}
                  style={{ background: theme["yellow"] }}
                  size={32}
                />
                <p>Compra simples e segura</p>
              </HeroListItem>
              <HeroListItem>
                <Timer
                  weight="fill"
                  color={theme["white-200"]}
                  style={{ background: theme["yellow-dark"] }}
                  size={32}
                />
                <p>Entregua rápida e rastreada</p>
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
                <p>Embalagem mantem o café intacto</p>
              </HeroListItem>
              <HeroListItem>
                <Coffee
                  weight="fill"
                  color={theme["white-200"]}
                  style={{ background: theme["purple"] }}
                  size={32}
                />
                <p>Seu café chega fresquinho até você</p>
              </HeroListItem>
            </div>
          </HeroList>
        </div>
        <img
          src={coffeeCupIlustration}
          alt="copo de café do coffee delivery com fundo amarelo e grãos"
        />
      </Hero>
      <Content>
        <p>Nossos cafés</p>

        <CoffeeList>
          <CoffeeList>
            {preOrder.map(({ coffee }) => (
              <CoffeeListItem key={coffee.id}>
                <img src={coffee.image} />
                <ListItemTag>
                  {coffee.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </ListItemTag>

                <p>{coffee.title}</p>
                <p>{coffee.description}</p>

                <ListItemFotterOptions>
                  <p>
                    <span>R$ </span>
                    {String(coffee.price).padEnd(4, "0").replace(".", ",")}
                  </p>

                  <div>
                    <button>
                      <Minus
                        size={32}
                        color={theme["purple"]}
                        onClick={() => handleDecrementCoffeeAmount(coffee.id)}
                      />
                    </button>
                    <span>
                      {
                        preOrder.find((item) => item.coffee.id == coffee.id)
                          ?.amount
                      }
                    </span>
                    <button>
                      <Plus
                        size={32}
                        color={theme["purple"]}
                        onClick={() => handleIncrementCoffeeAmount(coffee.id)}
                      />
                    </button>
                  </div>

                  <button onClick={() => handleAddToCart(coffee.id)}>
                    <ShoppingCartSimple
                      weight="fill"
                      color={theme["white-200"]}
                      style={{ background: theme["purple"] }}
                      size={32}
                    />
                  </button>
                </ListItemFotterOptions>
              </CoffeeListItem>
            ))}
          </CoffeeList>
        </CoffeeList>
      </Content>
    </>
  );
}
