import styled from "styled-components";

export const Content = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  gap: 6.375rem;

  > div {
    width: 32.875rem;

    > p:nth-child(1) {
      color: ${({ theme }) => theme.colors["yellow-dark"]};

      ${({ theme }) => theme.fonts.titleL};
    }

    > p:nth-child(2) {
      margin-bottom: 2.5rem;

      color: ${({ theme }) => theme.colors["base-subtitle"]};

      ${({ theme }) => theme.fonts.textL};
    }
  }
  section {
    padding: 2.5rem;

    background: linear-gradient(#fafafa 0 0) padding-box,
      linear-gradient(to right, #dbac2c, #8047f8) border-box;
    border-radius: 6px 36px;

    border: 1px solid transparent;
  }
`;

export const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  display: flex;

  svg {
    width: 2rem;

    padding: 0.4rem 0.2rem;
    margin-right: 0.75rem;

    border-radius: 999px;
  }

  div {
    flex: 1;

    color: ${({ theme }) => theme.colors["base-text"]};

    span {
      font-weight: bold;
    }
  }
`;
