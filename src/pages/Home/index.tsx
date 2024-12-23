import coffeeCupIlustration from "../../assets/coffee_illustration.svg";
import { coffees } from "../../../data.json";

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
import { useState } from "react";

export function Home() {
  // const [orderList, setOrderList] = useState<typeof coffees>([]);
  const [menuList, setMenuList] = useState(coffees);

  const theme = useTheme();

  function handleAddCoffeeToPurchase(coffeeId: string) {
    const newCoffee = coffees.find((coffee) => coffee.id == coffeeId);

    if (!newCoffee) return;

    setMenuList((state) => [...state, newCoffee]);
  }

  function handleRemoveCoffeeFromPurchaseList(coffeeId: string) {
    if (countAmountOfCoffeeType(coffeeId) == 1) return;

    const coffeeTypeIndex = menuList.findIndex(
      (coffee) => coffee.id == coffeeId
    );

    setMenuList([
      ...menuList.slice(0, coffeeTypeIndex),
      ...menuList.slice(coffeeTypeIndex + 1),
    ]);
  }

  function countAmountOfCoffeeType(coffeeId: string) {
    return menuList.filter((item) => item.id == coffeeId).length;
  }

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
            {coffees.map((coffee) => (
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
                        onClick={() =>
                          handleRemoveCoffeeFromPurchaseList(coffee.id)
                        }
                      />
                    </button>
                    <span>{countAmountOfCoffeeType(coffee.id)}</span>
                    <button>
                      <Plus
                        size={32}
                        color={theme["purple"]}
                        onClick={() => handleAddCoffeeToPurchase(coffee.id)}
                      />
                    </button>
                  </div>

                  <button>
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
