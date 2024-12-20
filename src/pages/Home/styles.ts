import styled from "styled-components";

export const Hero = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 5.875rem;
  padding-bottom: 8.75rem;

  display: flex;
  gap: 3.5rem;

  > div {
    flex: 1;
  }

  @media (max-width: 1024px) {
    padding-left: 0.5rem;
  }
`;

export const HeroTitle = styled.div`
  > p:nth-child(1) {
    color: ${(props) => props.theme["gray-500"]};

    font-family: "Baloo 2", serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 140%;
  }

  > p:nth-child(2) {
    margin-top: 1rem;
    margin-bottom: 4.125rem;

    color: ${(props) => props.theme["gray-400"]};

    font-size: 1.25rem;
    line-height: 140%;
  }

  @media (max-width: 1024px) {
    > p:nth-child(1) {
      font-size: 2.5rem;
    }
  }
`;

export const HeroList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroListItem = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme["gray-300"]};

  > svg {
    padding: 0.4rem 0.2rem;
    margin-right: 0.75rem;

    border-radius: 999px;
  }

  & + & {
    margin-top: 1.25rem;
  }
`;

export const Content = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  > p {
    margin-bottom: 3.375rem;

    font-family: "Baloo 2", serif;
    font-weight: 800;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    padding-left: 0.5rem;
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
`;

export const CoffeeListItem = styled.div`
  height: 19.375rem;
  width: 16rem;
  margin-bottom: 2.5rem;
  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["white-300"]};

  img {
    transform: translateY(-20px);
  }

  p:nth-child(3) {
    color: ${(props) => props.theme["gray-500"]};

    font-family: "Baloo 2", serif;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p:nth-child(4) {
    color: ${(props) => props.theme["gray-200"]};

    margin-top: 0.5rem;
    margin-bottom: 2.0625rem;
    text-align: center;
    font-size: 0.875rem;
  }
`;

export const ListItemTag = styled.div`
  display: flex;
  gap: 0.25rem;
  p {
    width: fit-content;
    padding: 0.25rem 0.5rem;
    margin-bottom: 1rem;

    border-radius: 999px;
    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};

    font-size: 0.625rem;
    font-weight: bold;
  }
`;

export const ListItemFotterOptions = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;

  p {
    color: ${(props) => props.theme["gray-300"]};

    font-family: "Baloo 2", serif;
    font-weight: 800;
    font-size: 1.5rem;

    span {
      font-family: "Roboto", serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  div {
    margin-left: 1.4375rem;
    margin-right: 0.5rem;

    display: flex;
    align-items: center;

    border-radius: 6px;
    background: ${(props) => props.theme["white-500"]};
  }

  button {
    line-height: 0;
  }

  svg {
    padding: 0.3rem 0.5rem;

    border-radius: 6px;
  }
`;
