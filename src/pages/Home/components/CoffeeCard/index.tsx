import { CheckFat, ShoppingCartSimple } from "@phosphor-icons/react";
import { CardFooter, CardContainer, Tag, AddToCartButton } from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";
import { coffees } from "../../../../../data.json";
import { useCart } from "../../../../hooks/useCart";
import { IncreaseDecreaseAmountButton } from "../../../../components/IncreaseDecreaseAmountButton";
export type ICoffee = (typeof coffees)[0];

interface CoffeeCardProps {
  coffee: ICoffee;
}
export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { description, id, image, price, tags, title } = coffee;
  const { colors } = useTheme();

  const [amount, setAmount] = useState(1);
  const [checkVisibility, setCheckVisibility] = useState(false);
  const { addNewItem } = useCart();

  function handleIncrementAmount() {
    setAmount((state) => state + 1);
  }

  function handleDecrementAmount() {
    if (amount == 1) return;
    setAmount((state) => state - 1);
  }

  function handleConfirmItem() {
    addNewItem({ amount, coffee });
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

        <IncreaseDecreaseAmountButton
          amount={amount}
          increaseAmount={handleIncrementAmount}
          decreaseAmount={handleDecrementAmount}
        />

        <AddToCartButton
          onClick={handleConfirmItem}
          $isChecked={checkVisibility}
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
