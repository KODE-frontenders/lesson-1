import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./shared/theme";
import { useDarkMode } from "shared/hooks/use-dark-mode";
import { GlobalStyles } from "components/atoms/global-styles/global-styles";
import { Routing } from "components/organisms/routing/routing"

const Root = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  
  const themeStyles = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={themeStyles}>
        <GlobalStyles />
        <Routing toggleTheme={toggleTheme}  />
      </ThemeProvider>
    </React.StrictMode>
  );
}

render(<Root />, document.getElementById("root"));
