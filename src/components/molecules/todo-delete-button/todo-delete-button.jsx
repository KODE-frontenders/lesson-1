import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TrashIcon } from "shared/icons/trash-icon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizeGrid.base}px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;

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
