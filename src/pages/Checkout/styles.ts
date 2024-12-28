import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  main {
    width: 40rem;
  }
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

export const AddressFormContainer = styled.div`
  height: 26.875rem;

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
`;

export const PaymentTypeContainer = styled.div`
  height: 12.9375rem;

  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  form {
    display: flex;
    gap: 0.75rem;
  }

  label {
    width: 11.16rem;

    padding-top: 1rem;
    padding-bottom: 1rem;
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
      margin-left: 1rem;
      margin-right: 0.75rem;
    }

    span {
      line-height: 0;
    }
  }

  input {
    display: none;
  }
  input[type="radio"]:checked + label {
    border: 1px solid ${({ theme }) => theme.colors["purple"]};
    background-color: ${({ theme }) => theme.colors["purple-light"]};
  }
`;

export const PaymentTypeButton = styled.label`
  width: 11.16rem;

  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors["base-text"]};

  background-color: ${({ theme }) => theme.colors["base-button"]};

  ${({ theme }) => theme.fonts.buttonM};

  svg {
    margin-left: 1rem;
    margin-right: 0.75rem;
  }

  span {
    line-height: 0;
  }
`;

export const ContainerTitle = styled.div`
  margin-bottom: 2rem;

  display: flex;

  svg {
    margin-right: 0.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.textM};
  }
  span {
    color: ${({ theme }) => theme.colors["base-text"]};

    ${({ theme }) => theme.fonts.textS};
  }
`;

export const AddressForm = styled.form`
  div {
    margin-bottom: 1rem;

    display: flex;
  }
  div:last-of-type {
    padding-top: 1.8125rem;

    justify-content: end;
  }
  input {
    width: 12.5rem;

    border: 1px solid;
    border-color: ${({ theme }) => theme.colors["base-button"]};

    background-color: ${({ theme }) => theme.colors["base-input"]};
  }
  #street {
    width: 100%;
  }
  #complement {
    flex: 1;
  }
  #city {
    width: 10.25rem;
  }
  #state {
    width: 5rem;
  }
`;

export const Input = styled.input`
  height: 2.625rem;

  padding: 0.75rem;
  border: 0;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors["base-text"]};
  background-color: ${({ theme }) => theme.colors["base-input"]};

  ${({ theme }) => theme.fonts.textS};

  & + label {
    margin-right: 0.75rem;
  }
`;

export const OrderResume = styled.div`
  padding: 2.5rem;
  height: 31.125rem;

  border-radius: 6px 44px;

  background: blue;
`;
