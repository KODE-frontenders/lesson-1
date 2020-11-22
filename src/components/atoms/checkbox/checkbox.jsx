import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input.attrs((props) => ({
  checked: props.checked || false,
}))`
  appearance: none;

  &::after {
    content: ${({ checked }) => (checked ? "'✓'" : "''")};
    width: ${({ theme }) => theme.sizeGrid.double}px;
    height: ${({ theme }) => theme.sizeGrid.double}px;
    border-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary : theme.colors.palette.grayColor};
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary : "transparent"};

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
  }

  &::before {
    content: ${({ checked }) => (checked ? "da" : "net")};
  }
`;

export const Checkbox = ({ completed, onToggle }) => (
         <StyledInput type="checkbox" checked={completed} onChange={onToggle} />
       );

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
