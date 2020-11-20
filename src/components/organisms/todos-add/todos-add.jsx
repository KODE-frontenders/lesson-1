import React from "react";
import { TodoAddModal } from "components/molecules/todo-add-modal/todo-add-modal";
import { TodoAddButton } from "components/molecules/todo-add-button/todo-add-button";

export const TodosAdd = () => {
  const [isModalVisible, setModalVisibility] = React.useState(false);

  const onToggleFormHandler = React.useCallback(
    () => setModalVisibility(!isModalVisible),
    [isModalVisible]
  );
  const onCancelHandler = React.useCallback(
    () => setModalVisibility(false),
    []
  );

  return (
    <>
      <TodoAddButton onToggle={onToggleFormHandler} />
      <TodoAddModal isVisible={isModalVisible} onCancel={onCancelHandler} />
    </>
  );
};
