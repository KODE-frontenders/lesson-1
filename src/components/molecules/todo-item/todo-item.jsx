import React from "react";
import { TTodo } from "shared/types";
import { func } from "prop-types";
import { Checkbox } from "components/atoms/checkbox/checkbox";
import { TodoDeleteButton } from "components/molecules/todo-delete-button/todo-delete-button";
import styled from "styled-components";

const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.sizeGrid.double}px 0px;
  margin: 0px ${({ theme }) => theme.sizeGrid.double}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledSpan = styled.span`
  margin-left: ${({ theme }) => theme.sizeGrid.base}px;
  color: ${({ isDone, theme }) => isDone && theme.colors.gray};
  text-decoration: ${({ isDone }) => isDone && "line-through"};
`;

export const TodoItem = ({ todo, toggleTodoAction, deleteTodoAction }) => {
  const onToggleHandler = React.useCallback(() => toggleTodoAction(), [
    toggleTodoAction,
  ]);
  const onDeleteHandler = React.useCallback(() => deleteTodoAction(), [
    deleteTodoAction,
  ]);

  return (
    <StyledListItem>
      <StyledLabel>
        <Checkbox isDone={todo.isDone} onToggle={onToggleHandler} />
        <StyledSpan isDone={todo.isDone}>{todo.title}</StyledSpan>
      </StyledLabel>

      <TodoDeleteButton onDelete={onDeleteHandler} />
    </StyledListItem>
  );
};

TodoItem.propTypes = {
  todo: TTodo.isRequired,
  toggleTodoAction: func.isRequired,
  deleteTodoAction: func.isRequired,
};
