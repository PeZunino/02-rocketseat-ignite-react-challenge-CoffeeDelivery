import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  button{
    border :0;
    background: transparent;
    cursor: pointer;
  }
  body, input, textarea, button{
    font-family: "Roboto", serif;
    font-weight: 400;
    font-size: 1rem;
  
  }

  :focus{
    outline:0;
  }


`;
