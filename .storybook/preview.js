
import { ThemeProvider } from "styled-components";
import React from "react";

export const decorators = [
  (Story, { args }) => (
    <ThemeProvider theme={args.theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
         actions: { argTypesRegex: "^on[A-Z].*" },
       };