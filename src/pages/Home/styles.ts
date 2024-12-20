import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 70rem;
  height: 34rem;
  padding: 5.875rem 0;
  margin: 0 auto;

  display: flex;
  gap: 3.5rem;
`;

export const HeroContainer = styled.div`
  min-width: 36.75rem;
  width: 100%;
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
export const ImageContainer = styled.div`
  /* flex: 1; */
`;

/* height: 34rem;
  padding: 5.875rem 10rem 0rem 10rem;

  display: grid;
  grid-template-columns: 36.75rem auto;
  grid-gap: 3.5rem;

  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
    }
  }

  svg {
    padding: 8px;
    border-radius: 999px;
    margin-right: 10px;
  } */

// export const ListItem = styled.li`
//   display: flex;
//   div{

//   }
//   span {
//     font-size: 1rem;
//   }
// `;
/* grid-template-columns: ; */

/* div:nth-child(1) {
    flex: 1;
  }

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

  ul {
    display: flex;
    list-style: none;

    li{

    }
  } */
