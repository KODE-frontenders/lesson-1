import React from "react";
import PropTypes from "prop-types";

export const ToggleSwitch = ({ toggleTheme, theme }) => {
  const isLight = theme === "dark";

  return <input type="checkbox" checked={isLight} onClick={toggleTheme} />;
};

ToggleSwitch.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  theme: "light",
};
