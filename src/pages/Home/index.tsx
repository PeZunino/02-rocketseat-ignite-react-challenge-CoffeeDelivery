import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubTitle,
  HeroFooter,
  Info,
  CoffeeCard,
  MainContent,
  Tag,
  CardFooter,
  CardIncreaseDecreaseOption,
} from "./styles.ts";
import heroImage from "../../assets/hero-img.svg";
import {
  Coffee,
  Minus,
  Package,
  ShoppingCart,
  Timer,
  Plus,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import availableCoffees from "../../../data.json";

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
          {availableCoffees.coffees.map((coffee) => (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.image} />

              <div>
                {coffee.tags.map((tag) => (
                  <Tag key={tag}>{tag.toUpperCase()}</Tag>
                ))}
              </div>

              <p>{coffee.title}</p>
              <span>{coffee.description}</span>

              <CardFooter>
                <p>
                  R${" "}
                  <span>
                    {String(coffee.price).padEnd(4, "0").replace(".", ",")}
                  </span>
                </p>

                <CardIncreaseDecreaseOption>
                  <button>
                    <Minus size={14} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} />
                  </button>
                </CardIncreaseDecreaseOption>

                <button>
                  <ShoppingCartSimple
                    weight="fill"
                    size={38}
                    color={colors.white}
                  />
                </button>
              </CardFooter>
            </CoffeeCard>
          ))}
        </div>
      </MainContent>
    </>
  );
}
