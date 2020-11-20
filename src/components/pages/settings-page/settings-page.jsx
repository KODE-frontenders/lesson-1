import React from "react";
import { ToggleSwitch } from "components/atoms/toggle-switch/toggle-switch";
import { Header } from "components/templates/header/header";

export const SettingsPage = ({ toggleTheme }) => {
  return (
    <>
      <Header title="Settings" linkTo="todos" />

      <ul>
        <li>
          <span>Theme</span>
          <ToggleSwitch toggleTheme={toggleTheme}  />
        </li>
      </ul>
    </>
  );
};

SettingsPage.propTypes = {};
