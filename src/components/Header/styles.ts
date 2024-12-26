import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 70rem;

  margin: 0 auto;
  padding: 2rem 0rem;

  display: flex;
  justify-content: space-between;

  img {
    width: 5.309rem;
    height: 2.5rem;
  }

  aside {
    display: flex;
    gap: 0.75rem;
  }
`;

export const LocationContainer = styled.div`
  padding: 0.5rem;

  display: flex;
  align-items: center;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors["purple-light"]};

  p {
    color: ${({ theme }) => theme.colors["purple-dark"]};
    ${({ theme }) => theme.fonts.textS};
  }
`;

export const CartButton = styled.button`
  padding: 0.5rem;

  position: relative;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors["yellow-light"]};

  line-height: 0;

  span {
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors["white"]};
    border-radius: 999px;
    background: ${({ theme }) => theme.colors["yellow-dark"]};

    ${({ theme }) => theme.fonts.textXS};

    top: -20%;
    right: -20%;
    position: absolute;
  }
`;
