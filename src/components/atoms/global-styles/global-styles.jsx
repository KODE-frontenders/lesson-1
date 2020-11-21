import { createGlobalStyle } from "styled-components";
import "fontsource-roboto";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
