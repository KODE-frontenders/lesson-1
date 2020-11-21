import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./shared/theme";
import { useDarkMode } from "shared/hooks/use-dark-mode";
import { GlobalStyles } from "components/atoms/global-styles/global-styles";
import { SettingsPage } from "components/pages/settings-page/settings-page";
import { TodosPage } from "components/pages/todos-page/todos-page";

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
          {/* TODO: add router */}
          <TodosPage />
          <SettingsPage toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </React.StrictMode>
  )
}

render(<Root />, document.getElementById("root"));
