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

  > div:nth-child(1) {
    padding: 0.5rem;

    display: flex;
    align-items: center;

    border-radius: 6px;
    color: ${(props) => props.theme["purple-dark"]};
    background-color: ${(props) => props.theme["purple-light"]};

    font-size: 0.875rem;
  }

  > div:nth-child(2) {
    padding: 0.5rem;

    position: relative;

    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-light"]};

    line-height: 0;
  }
`;

export const ItemsCount = styled.strong`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  top: -10px;
  right: -10px;
  position: absolute;

  border-radius: 999px;
  color: ${(props) => props.theme["white-100"]};
  background-color: ${(props) => props.theme["yellow-dark"]};

  font-weight: bold;
  font-size: 0.75rem;
`;
