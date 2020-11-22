import React from "react";
import { ReactComponent as PlusIcon } from "shared/icons/plus-icon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 16px 16px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.sizeGrid.double}px;
  margin: ${({ theme }) => theme.sizeGrid.double}px;
  line-height: 1;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 0;
  right: 0;

  &:hover {
    box-shadow: 0px 32px 32px ${({ theme }) => theme.colors.shadow},
      inset 0px 0px 8px 4px ${({ theme }) => theme.colors.shadow};
  }
`;

export const TodoAddButton = ({ onToggle }) => {
  return (
    <StyledButton type="button" onClick={onToggle}>
      <PlusIcon />
    </StyledButton>
  );
};
