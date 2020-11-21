import React from "react";
import { ReactComponent as PlusIcon } from "shared/icons/plus-icon.svg";
import styled, { ThemeContext } from "styled-components";

const StyledButton = styled.button`
  line-height: 1;
  padding: ${(props) => props.size}px;
  margin: ${(props) => props.size}px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 24px 32px ${(props) => props.theme.colors.darkGray};
`;

export const TodoAddButton = ({ onToggle }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <StyledButton type="button" theme={theme} size={16} onClick={onToggle}>
      <PlusIcon />
    </StyledButton>
  );
};
