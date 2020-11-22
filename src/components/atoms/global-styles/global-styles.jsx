import { createGlobalStyle } from "styled-components";
import "fontsource-roboto";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, sans-serif;
    font-size: 18px;
    line-height: 1.33;
    
    transition: all 0.50s linear;
  }
`;
