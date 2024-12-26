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
