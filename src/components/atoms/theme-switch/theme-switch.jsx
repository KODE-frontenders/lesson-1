import React from "react";
import PropTypes from "prop-types";
import { ToggleSwitch } from "shared/ui/ui";
import { ThemeContext } from "styled-components";

export const ThemeSwitch = ({ toggleTheme, theme }) => {
  const { mode: themeMode } = React.useContext(ThemeContext);

  const isDark = themeMode === "dark";

  return <ToggleSwitch checked={isDark} onClick={toggleTheme} />;
};

ThemeSwitch.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
