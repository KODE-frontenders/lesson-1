import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TrashIcon } from "shared/icons/trash-icon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizeGrid.base}px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-right: 0; 
  line-height: 1;
  transition: color ease-out 0.13s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TodoDeleteButton = ({ onDelete }) => (
                <StyledButton type="button" onClick={onDelete}>
                  <TrashIcon />
                </StyledButton>
              );

TodoDeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
