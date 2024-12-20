import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem;
  min-width: 64rem;
  padding: 2.0625rem 0rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.theme["white-200"]};

  @media (max-width: 1024px) {
    padding-left: 0.5rem;
  }
`;

export const NavBar = styled.nav`
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;

    display: flex;
    align-items: center;

    border-radius: 6px;
    color: ${(props) => props.theme["purple-dark"]};
    background-color: ${(props) => props.theme["purple-light"]};

    font-size: 0.875rem;
  }

  a {
    padding: 0.5rem;

    line-height: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-light"]};
  }
`;
