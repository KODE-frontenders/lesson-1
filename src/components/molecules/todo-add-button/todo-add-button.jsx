import React from "react";
import { ReactComponent as PlusIcon } from "shared/icons/plus-icon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 16px 16px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.sizeGrid.double}px;
  line-height: 1;
  border-radius: 50%;
  border: none;
`;

export const TodoAddButton = ({ onToggle }) => {
  return (
    <StyledButton type="button" onClick={onToggle}>
      <PlusIcon />
    </StyledButton>
  );
};
