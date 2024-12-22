import styled from "styled-components";

export const Content = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 2.5rem;

  display: flex;
  gap: 2rem;

  section {
    width: 40rem;

    > div,
    footer {
      padding: 2.5rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme["white-300"]};
    }

    footer div button {
      width: 11.16rem;
      padding: 1rem;

      display: inline-flex;
      align-items: center;

      border-radius: 6px;
      color: ${(props) => props.theme["gray-300"]};
      background-color: ${(props) => props.theme["white-500"]};

      font-size: 0.75rem;

      svg {
        margin-right: 0.75rem;
      }
      & + button {
        margin-left: 0.75rem;
      }
    }
  }

  aside {
    flex: 1;
  }
`;

export const AddressContainer = styled.div`
  margin-bottom: 0.75rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form input:first-child {
    display: block;
    width: 12.5rem;
  }

  form div {
    display: flex;
    gap: 0.75rem;
  }

  form div:nth-of-type(1) input:nth-of-type(2) {
    flex: 1;
  }
  form div:nth-of-type(2) {
    justify-content: end;

    input:nth-of-type(2) {
      width: 10.25rem;
    }
    input:last-child {
      width: 3.75rem;
    }
  }

  input {
    padding: 0.75rem;

    border: 0;
    border-radius: 4px;
    background: ${(props) => props.theme["white-400"]};
  }
`;

export const Title = styled.p`
  margin-bottom: 1rem;

  font-family: "Baloo 2", serif;
  font-weight: bold;
  font-size: 1.125rem;
`;
export const ContainerHeader = styled.header`
  margin-bottom: 2rem;

  display: flex;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["gray-400"]};
  }

  span {
    color: ${(props) => props.theme["gray-300"]};

    font-size: 0.875rem;
  }
`;
