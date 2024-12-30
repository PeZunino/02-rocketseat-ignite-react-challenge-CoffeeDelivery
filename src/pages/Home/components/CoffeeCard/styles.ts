import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding-bottom: 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  background: ${({ theme }) => theme.colors["base-card"]};

  img {
    width: 7.5rem;

    margin-top: -40px;
  }

  > p {
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.titleS};
  }
  > span {
    margin: 0.5rem 1.25rem;

    text-align: center;

    color: ${({ theme }) => theme.colors["base-label"]};

    ${({ theme }) => theme.fonts.textS};
  }
`;

export const Tag = styled.div`
  padding: 0.25rem 0.8rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 999px;

  display: inline-block;

  color: ${({ theme }) => theme.colors["yellow-dark"]};
  background: ${({ theme }) => theme.colors["yellow-light"]};

  ${({ theme }) => theme.fonts.tag};

  & + & {
    margin-left: 0.25rem;
  }
`;

export const CardFooter = styled.div`
  width: 13rem;
  margin-top: auto;

  display: flex;
  align-items: center;

  position: relative;

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    ${({ theme }) => theme.fonts.textS};
  }
  p span {
    ${({ theme }) => theme.fonts.titleM};
  }
  div {
    margin-left: 1.5rem;
    margin-right: 0.5rem;
  }
`;

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean;
}
export const AddToCartButton = styled.button<AddToCartButtonProps>`
  line-height: 0;

  svg {
    padding: 0.5rem;
    border-radius: 6px;

    top: 0;
    position: absolute;

    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  #cart {
    background-color: ${({ theme }) => theme.colors.purple};
    opacity: ${({ isChecked }) => (isChecked ? 0 : 1)};
  }
  &:hover #cart {
    background-color: ${({ theme }) => theme.colors["purple-dark"]};
  }
  #check {
    opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  &:hover #check {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;
