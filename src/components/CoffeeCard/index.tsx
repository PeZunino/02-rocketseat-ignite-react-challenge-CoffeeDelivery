import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import {
  CardFooter,
  CardIncreaseDecreaseOption,
  CardContainer,
  Tag,
} from "./styles";
import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import { coffees } from "../../../data.json";
import { CartItemsContext } from "../../context/CartContext";

export type ICoffee = (typeof coffees)[0];

interface CoffeeCardProps {
  coffee: ICoffee;
}
export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { description, id, image, price, tags, title } = coffee;
  const { colors } = useTheme();
  const { handleNewItemInCart } = useContext(CartItemsContext);

  const [amount, setAmount] = useState(1);

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

        <button onClick={handleConfirmItem}>
          <ShoppingCartSimple weight="fill" size={38} color={colors.white} />
        </button>
      </CardFooter>
    </CardContainer>
  );
}
