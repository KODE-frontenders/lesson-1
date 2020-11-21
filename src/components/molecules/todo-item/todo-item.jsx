import React from "react";
import { TTodo } from "shared/types";
import { func } from "prop-types";
import { Checkbox } from "components/atoms/checkbox/checkbox";
import { TodoDeleteButton } from "components/molecules/todo-delete-button/todo-delete-button";

export const TodoItem = ({ todo, toggleTodoAction, deleteTodoAction }) => {
  const onToggleHandler = React.useCallback(() => toggleTodoAction(), [
    toggleTodoAction,
  ]);
  const onDeleteHandler = React.useCallback(() => deleteTodoAction(), [
    deleteTodoAction,
  ]);

  return (
    <li>
      <Checkbox completed={todo.completed} onToggle={onToggleHandler} />

      <span>{todo.title}</span>

      <TodoDeleteButton onDelete={onDeleteHandler} />
    </li>
  );
};

TodoItem.propTypes = {
  todo: TTodo.isRequired,
  toggleTodoAction: func.isRequired,
  deleteTodoAction: func.isRequired,
};
