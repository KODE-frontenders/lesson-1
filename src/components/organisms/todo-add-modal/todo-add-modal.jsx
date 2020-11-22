import React from "react";
import { TodoAddForm } from "components/organisms/todo-add-form/todo-add-form";
import PropTypes from "prop-types";
import { ModalTemplate } from "components/templates/modal/modal";
import styled from "styled-components";

const StyledModalTemplate = styled(ModalTemplate)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TodoAddModal = ({ isVisible, onCancel }) => {
  return isVisible ? (
    <StyledModalTemplate>
      {/* // TODO: set onSubmit callbacks, remove temp value */}
      <TodoAddForm onSubmit={() => {}} onCancel={onCancel} />
    </StyledModalTemplate>
  ) : null;
};


TodoAddModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};
TodoAddModal.defaultProps = {
  isVisible: true,
};
