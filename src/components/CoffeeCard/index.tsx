import {
  CheckFat,
  Minus,
  Plus,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import {
  CardFooter,
  CardIncreaseDecreaseOption,
  CardContainer,
  Tag,
  AddToCartButton,
} from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";
import { coffees } from "../../../data.json";
import { useCart } from "../../hooks/useCart";
export type ICoffee = (typeof coffees)[0];

interface CoffeeCardProps {
  coffee: ICoffee;
}
export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { description, id, image, price, tags, title } = coffee;
  const { colors } = useTheme();

  const [amount, setAmount] = useState(1);
  const [checkVisibility, setCheckVisibility] = useState(false);
  const { handleNewItemInCart } = useCart();

  function handleIncrementAmount() {
    setAmount((state) => state + 1);
  }

  function handleDecrementAmount() {
    if (amount == 1) return;
    setAmount((state) => state - 1);
  }

  function handleConfirmItem() {
    handleNewItemInCart({ amount, coffee });
    setAmount(1);

    setCheckVisibility(true);
    setTimeout(() => {
      setCheckVisibility(false);
    }, 1500);
  }

  return (
    <CardContainer key={id}>
      <img src={image} />

      <div>
        {tags.map((tag) => (
          <Tag key={tag}>{tag.toUpperCase()}</Tag>
        ))}
      </div>

      <p>{title}</p>
      <span>{description}</span>

      <CardFooter>
        <p>
          R$ <span>{String(price).padEnd(4, "0").replace(".", ",")}</span>
        </p>

        <CardIncreaseDecreaseOption>
          <button onClick={handleDecrementAmount}>
            <Minus size={14} />
          </button>
          <span>{amount}</span>
          <button onClick={handleIncrementAmount}>
            <Plus size={14} />
          </button>
        </CardIncreaseDecreaseOption>

        <AddToCartButton
          onClick={handleConfirmItem}
          isChecked={checkVisibility}
        >
          <CheckFat weight="fill" size={38} color={colors.white} id="check" />

          <ShoppingCartSimple
            weight="fill"
            size={38}
            color={colors.white}
            id="cart"
          />
        </AddToCartButton>
      </CardFooter>
    </CardContainer>
  );
}
