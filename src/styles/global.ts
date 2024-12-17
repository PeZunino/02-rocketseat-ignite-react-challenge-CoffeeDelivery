import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  body, input, textarea, button{
    font-family: "Baloo 2", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;

    /* font-family: "Roboto", serif;
    font-weight: 700;
    font-style: normal; */
  }

  :focus{
    outline:0;
  }
`;
