import React from "react";
import { ThemeSwitch } from "components/atoms/theme-switch/theme-switch";
import { PageTemplate } from "components/templates/page/page";
import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StyledUnorderedList = styled.ul`
  padding: 0;
`;


export const SettingsPage = ({ toggleTheme }) => {
  return (
    <>
      <PageTemplate title="Settings" linkTo="todos">
        <StyledUnorderedList>
          <StyledListItem>
            <span>Theme</span>
            <ThemeSwitch toggleTheme={toggleTheme} />
          </StyledListItem>
        </StyledUnorderedList>
      </PageTemplate>
    </>
  );
};

SettingsPage.propTypes = {};
