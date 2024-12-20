import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  body, input, textarea, button{
    font-family: "Roboto", serif;
    font-weight: 400;
    font-size: 1rem;
    /* font-family:     font-family: "Baloo 2", serif;
    font-weight: 700;
    font-style: normal; */
  }

  :focus{
    outline:0;
  }


`;
