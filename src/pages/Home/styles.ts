import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 70rem;

  margin: 0 auto;

  main {
    > p {
      margin-top: 2rem;
      margin-bottom: 3.375rem;
      color: ${(props) => props.theme["gray-400"]};

      font-family: "Baloo 2", serif;
      font-weight: 800;
      font-size: 2rem;
    }
    > div {
      width: 70rem;
      display: flex;
      flex-wrap: wrap;
      column-gap: 2rem;
    }
  }
`;

export const HeroContainer = styled.div`
  height: 34rem;

  min-width: 36.75rem;
  width: 100%;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;

  display: flex;
  gap: 3.5rem;
`;
export const HeroTitle = styled.div`
  height: 12rem;

  h1 {
    font-family: "Baloo 2", serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 140%;
    color: ${(props) => props.theme["gray-500"]};
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.25rem;
    line-height: 140%;
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const HeroList = styled.div`
  padding-top: 4.125rem;
  display: flex;
  gap: 2.5rem;
  color: ${(props) => props.theme["gray-300"]};

  svg {
    margin-right: 0.75rem;
    padding: 0.5rem 0.2rem 0.5rem 0.2rem; // padding 0.2 p/ svg de carrinho nao cortar na lateral
    border-radius: 999px;
  }
`;

export const HeroListItem = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 1.25rem;
  }
`;

export const CoffeeItem = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  margin-bottom: 2.5rem;
  background: ${(props) => props.theme["white-300"]};
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
  }
  > p {
    font-family: "Baloo 2", serif;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-500"]};
  }
  > span {
    font-size: 0.875rem;
    display: inline-block;
    padding: 0rem 1rem;
    text-align: center;
    color: ${(props) => props.theme["gray-200"]};
  }
  img {
    transform: translateY(-20px);
  }
`;
export const Tag = styled.div`
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};

  & + & {
    margin-left: 0.25rem;
  }
`;
export const CoffeBuyActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.06rem;
  margin-bottom: 1.25rem;
  width: 100%;
  p {
    color: ${(props) => props.theme["gray-200"]};
    font-size: 0.875rem;
    span {
      color: ${(props) => props.theme["gray-300"]};
      font-family: "Baloo 2", serif;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
  div {
    margin-left: 1.43rem;
    margin-right: 0.5rem;
    width: 4.5rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme["white-500"]};
    border-radius: 6px;
  }
  button {
    line-height: 0;
  }
  svg {
    border-radius: 6px;
    padding: 0.5rem;
  }
`;
