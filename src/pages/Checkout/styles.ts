import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
`;

export const CompleteOrderContainer = styled.div`
  width: 40rem;
  height: 40.5625rem;

  > p {
    font-family: "Baloo 2", serif;
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

export const OrderAddressContainer = styled.div`
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  padding-bottom: 4.3125rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["white-300"]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div:nth-child(3),
    div:nth-child(4) {
      display: flex;
      gap: 0.75rem;
    }

    > div:last-of-type {
      margin-top: 1.8125rem;
      justify-content: end;
    }
  }
`;

export const OrderAddressTitle = styled.div`
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

export const OrderPaymentTypeTitle = styled(OrderAddressTitle)``;

export const OrderPaymentTypeContainer = styled.div`
  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["white-300"]};
`;

export const PaymentType = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    width: 11.16rem;
    padding: 1rem;

    display: flex;
    align-items: center;

    border-radius: 6px;
    color: ${(props) => props.theme["gray-300"]};
    background-color: ${(props) => props.theme["white-500"]};

    font-size: 0.75rem;
  }

  svg {
    margin-right: 0.75rem;
  }
`;

export const OrderDetailsContainer = styled.div`
  flex: 1;

  > p {
    font-family: "Baloo 2", serif;
    font-weight: bold;
    font-size: 1.125rem;
  }
`;
