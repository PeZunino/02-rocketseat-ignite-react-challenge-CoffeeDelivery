import styled from "styled-components";

export const Content = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  gap: 6.375rem;

  > div {
    width: 32.875rem;

    > p:first-of-type {
      color: ${(props) => props.theme["yellow-dark"]};

      font-family: "Baloo 2", serif;
      font-weight: 800;
      font-size: 2rem;
    }

    > p:last-of-type {
      margin-bottom: 2.5rem;

      color: ${(props) => props.theme["gray-400"]};

      font-size: 1.25rem;
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
    color: ${(props) => props.theme["gray-300"]};
    span {
      font-weight: bold;
    }
  }
`;
