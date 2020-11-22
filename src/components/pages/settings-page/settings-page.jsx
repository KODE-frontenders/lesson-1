import React from "react";
import { ToggleSwitch } from "components/atoms/toggle-switch/toggle-switch";
import { PageTemplate } from "components/templates/page/page";

export const SettingsPage = ({ toggleTheme }) => {
  return (
    <>
      <PageTemplate title="Settings" linkTo="todos">
        <ul>
          <li>
            <span>Theme</span>
            <ToggleSwitch toggleTheme={toggleTheme}  />
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

SettingsPage.propTypes = {};
