import React from "react";
import PropTypes from "prop-types";

export const Checkbox = ({ completed, onToggle }) => (
  <input type="checkbox" checked={completed} onClick={onToggle} />
);

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
