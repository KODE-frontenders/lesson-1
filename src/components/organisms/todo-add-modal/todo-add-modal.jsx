import React from "react";
import { TodoAddForm } from "components/organisms/todo-add-form/todo-add-form";
import PropTypes from "prop-types";

export const TodoAddModal = ({ isVisible, onCancel }) =>
  // TODO: set onSubmit callbacks, remove temp value
  isVisible ? <TodoAddForm onSubmit={() => {}} onCancel={onCancel} /> : null;

TodoAddModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};
TodoAddModal.defaultProps = {
  isVisible: true,
};
