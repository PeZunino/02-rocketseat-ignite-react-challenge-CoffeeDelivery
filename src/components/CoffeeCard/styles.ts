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
  margin-top: auto;

  display: flex;
  align-items: center;

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

  > button {
    line-height: 0;

    svg {
      padding: 0.5rem;
      border-radius: 6px;

      background-color: ${({ theme }) => theme.colors["purple-dark"]};
    }

    &:hover svg {
      background-color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;

export const CardIncreaseDecreaseOption = styled.div`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${({ theme }) => theme.colors["base-button"]};

  span {
    width: 1.25rem;
    text-align: center;

    color: ${({ theme }) => theme.colors["base-title"]};
    ${({ theme }) => theme.fonts.textM};
  }
  button svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }
  button:hover svg {
    color: ${({ theme }) => theme.colors["purple-dark"]};
  }
`;
