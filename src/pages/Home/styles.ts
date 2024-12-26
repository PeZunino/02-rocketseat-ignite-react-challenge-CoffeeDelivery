import styled from "styled-components";
import heroBackground from "../../assets/hero-bg.svg";

export const HeroContainer = styled.section`
  height: 34rem;

  padding-top: 5.875rem;
  padding-bottom: 6.75rem;

  background-image: url(${heroBackground});
`;

export const HeroContent = styled.div`
  width: 70rem;

  margin: 0 auto;

  display: flex;
  gap: 3.5rem;

  div {
    width: 36.75rem;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors["base-title"]};

  ${({ theme }) => theme.fonts.titleXL};
`;

export const HeroSubTitle = styled.p`
  color: ${({ theme }) => theme.colors["base-title"]};

  ${({ theme }) => theme.fonts.textL};
`;

export const HeroFooter = styled.footer`
  margin-top: 4.125rem;

  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
  }
`;
export const Info = styled.li`
  display: flex;
  align-items: center;

  svg {
    padding: 0.5rem 0.4rem;
    margin-right: 0.75rem;

    border-radius: 999px;
  }

  p {
    color: ${({ theme }) => theme.colors["base-text"]};

    ${({ theme }) => theme.fonts.textM};
  }

  & + & {
    margin-top: 1.25rem;
  }
`;

export const MainContent = styled.main`
  width: 70rem;

  margin: 0 auto;
  margin-bottom: 9.8rem;
  h2 {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.titleL};
  }

  > div {
    margin-top: 5.875rem;

    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`;

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding-bottom: 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  background: ${({ theme }) => theme.colors["base-card"]};

  img {
    width: 7.5rem;

    margin-top: -40px;
  }

  > p {
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    ${({ theme }) => theme.fonts.titleS};
  }
  > span {
    margin: 0.5rem 1.25rem;

    text-align: center;

    color: ${({ theme }) => theme.colors["base-label"]};

    ${({ theme }) => theme.fonts.textS};
  }
`;

export const Tag = styled.div`
  padding: 0.25rem 0.8rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 999px;

  display: inline-block;

  color: ${({ theme }) => theme.colors["yellow-dark"]};
  background: ${({ theme }) => theme.colors["yellow-light"]};

  ${({ theme }) => theme.fonts.tag};

  & + & {
    margin-left: 0.25rem;
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;

  display: flex;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    ${({ theme }) => theme.fonts.textS};
  }
  p span {
    ${({ theme }) => theme.fonts.titleM};
  }
  div {
    margin-left: 1.5rem;
    margin-right: 0.5rem;
  }

  > button {
    line-height: 0;

    svg {
      padding: 0.5rem;
      border-radius: 6px;

      background-color: ${({ theme }) => theme.colors["purple-dark"]};
    }

    &:hover svg {
      background-color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;

export const CardIncreaseDecreaseOption = styled.div`
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
