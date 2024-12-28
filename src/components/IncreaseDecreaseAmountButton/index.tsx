import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

interface IncreaseDecreaseAmountButtonProps {
  amount: number;
  increaseAmount: (state: number) => void;
  decreaseAmount: (state: number) => void;
}

export function IncreaseDecreaseAmountButton({
  amount,
  decreaseAmount,
  increaseAmount,
}: IncreaseDecreaseAmountButtonProps) {
  return (
    <Container>
      <button onClick={() => decreaseAmount(amount)}>
        <Minus size={14} />
      </button>
      <span>{amount}</span>
      <button onClick={() => increaseAmount(amount)}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
