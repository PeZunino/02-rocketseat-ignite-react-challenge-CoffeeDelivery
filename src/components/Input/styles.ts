import styled from "styled-components";

interface InputContainerProps {
  width: string | number | undefined;
  informativeText?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  border-radius: 4px;
  background: ${(props) => props.theme["white-400"]};
  width: ${(props) => props.width || "12.5rem"};

  input {
    width: ${(props) => props.width || "12.5rem"};
    padding: 0.75rem;
    border: 0;
    background: transparent;
  }

  position: relative;

  &::after {
    right: 0.75rem;
    top: 35%;

    display: block;
    position: absolute;

    color: ${(props) => props.theme["gray-200"]};

    font-style: italic;
    font-size: 0.75rem;

    content: ${(props) =>
      props.informativeText ? `"${props.informativeText}"` : ""};
  }
`;
