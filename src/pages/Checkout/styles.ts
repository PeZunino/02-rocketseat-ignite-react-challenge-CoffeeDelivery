import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  aside {
    flex: 1;
  }

  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.titleXS};
  }
`;

export const OrderResume = styled.div`
  padding: 2.5rem;
  height: 31.125rem;

  border-radius: 6px 44px;

  background-color: ${({ theme }) => theme.colors["base-card"]};

  > p {
    display: flex;
    justify-content: space-between;
  }
  > p + p {
    margin-top: 0.25rem;
  }
  > p:nth-of-type(1),
  p:nth-of-type(2) {
    color: ${({ theme }) => theme.colors["base-text"]};

    ${({ theme }) => theme.fonts.textS};
    span {
      ${({ theme }) => theme.fonts.textM};
    }
  }

  > p:nth-of-type(3) {
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.textL};
    font-weight: bold;
  }
`;

export const CartItem = styled.div`
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

  img {
    width: 4rem;
    margin-right: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.textM};
    margin-bottom: 0.5rem;
  }
  > div > div {
    height: 2rem;

    display: flex;
    gap: 0.5rem;
  }
  > span {
    flex: 1;
    text-align: end;

    color: ${({ theme }) => theme.colors["base-text"]};

    ${({ theme }) => theme.fonts.textM};
    font-weight: bold;
  }
`;
export const RemoverItemButton = styled.button`
  width: 5.68rem;
  height: 2rem;

  padding: 0.5rem;

  border-radius: 6px;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors["base-text"]};

  background-color: ${({ theme }) => theme.colors["base-button"]};

  ${({ theme }) => theme.fonts.buttonM};

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  svg {
    margin-right: 0.25rem;
  }

  span {
    line-height: 0;
  }
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;

  margin-top: 2rem;
  padding: 0.75rem 0rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.buttonG};

  text-align: center;
`;
