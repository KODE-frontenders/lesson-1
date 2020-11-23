import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "fontsource-roboto";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, sans-serif;
    font-size: 18px;
    line-height: 1.33;
    
    transition: background 0.50s ease-out;
  }
`;
