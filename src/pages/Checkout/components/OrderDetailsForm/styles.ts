import styled from "styled-components";

export const StyledForm = styled.form`
  height: 40.5625rem;
  width: 40rem;
`;
export const AddressFormContainer = styled.div`
  height: 26.875rem;

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};
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

export const AddressFormInputGrid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  > div:nth-child(3),
  > div:nth-child(4) {
    display: flex;
    column-gap: 0.75rem;
  }

  > div:nth-child(4) {
    align-self: end;
  }

  #code,
  #number,
  #neighborhood {
    width: 12.5rem;
  }

  #street {
    width: 35rem;
  }
  #complement {
    width: 21.75rem;
  }
  #city {
    width: 10.25rem;
  }
  #state {
    width: 3.75rem;
  }
`;

export const InputContainer = styled.label`
  position: relative;
  display: flex;

  input {
    height: 2.625rem;

    padding: 0.75rem;

    border: 1px solid transparent;
    border-radius: 4px;

    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};

    ${({ theme }) => theme.fonts.textS};

    & + label {
      margin-right: 0.75rem;
    }
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.colors["yellow-dark"]};
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors["base-text"]} !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors["base-input"]}
      inset !important;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -15px;
  left: 5px;

  color: ${({ theme }) => theme.colors.red};

  ${({ theme }) => theme.fonts.textXS};
`;

export const PaymentTypeContainer = styled.div`
  height: 12.9375rem;

  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-card"]};

  section {
    display: flex;
    gap: 0.75rem;
    position: relative;
  }

  label {
    border: 0;

    width: 11.16rem;

    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 6px;

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
