import React from "react";
import { ReactComponent as PlusIcon } from "shared/icons/plus-icon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 8px 16px 4px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.sizeGrid.double}px;
  margin: ${({ theme }) => theme.sizeGrid.double}px;
  transition: transform ease-in-out 0.13s, box-shadow ease-out 0.13s;
  line-height: 1;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 0;
  right: 0;

  &:hover {
    box-shadow: 0px 8px 20px 4px ${({ theme }) => theme.colors.shadow};
    transform: scale(103%);
  }
`;

export const TodoAddButton = ({ onToggle }) => {
  return (
    <StyledButton type="button" onClick={onToggle}>
      <PlusIcon />
    </StyledButton>
  );
};
