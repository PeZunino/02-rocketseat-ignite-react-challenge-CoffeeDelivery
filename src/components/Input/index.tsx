import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  informativeText?: string;
}

export function Input({ width, id, informativeText, ...props }: InputProps) {
  return (
    <InputContainer width={width} informativeText={informativeText}>
      <label htmlFor={id} />
      <input id={id} {...props} type="text" />
    </InputContainer>
  );
}
