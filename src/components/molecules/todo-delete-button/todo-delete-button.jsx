import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as TrashIcon } from "shared/icons/trash-icon.svg";

export const TodoDeleteButton = ({ onDelete }) => (
  <button type="button" onClick={onDelete}>
    <TrashIcon />
  </button>
);

TodoDeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
