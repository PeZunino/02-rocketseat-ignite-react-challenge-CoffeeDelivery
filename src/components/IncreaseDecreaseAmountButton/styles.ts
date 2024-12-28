import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

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
