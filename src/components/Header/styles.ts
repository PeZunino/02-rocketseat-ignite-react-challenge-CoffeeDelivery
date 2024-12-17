import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0rem;
  height: 6.5rem;

  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.theme["white-200"]};

  nav {
    height: 2.375rem;
    display: flex;
    align-items: center;
  }
  a {
    padding: 0.5rem;
    border-radius: 6px;
    line-height: 0;

    background-color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const LocationContainer = styled.div`
  height: 2.375rem;
  border-radius: 6px;
  margin-right: 0.75rem;
  padding: 0.5rem 0.625rem;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};

  font-size: 0.875rem;
`;
