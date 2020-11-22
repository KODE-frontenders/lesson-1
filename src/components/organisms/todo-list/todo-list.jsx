import React from "react";
import { TodoItem } from "../../molecules/todo-item/todo-item";
import { TTodos } from "shared/types";
import { ReactComponent as TodosSkeleton } from "shared/icons/todos-skeleton.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSkeleton = styled(TodosSkeleton)`
  color: ${({ theme }) => theme.colors.gray};
`;

/**
 *
 * @param todos {todo[]} список тудушек
 * @param isLoading {boolean} состояние загрузки тудушек
 */
export const TodoList = ({ todos, isLoading }) => {
  if (isLoading) {
    return <StyledSkeleton />;
  }

  if (todos.length === 0) {
    return <p>Nothing here 🤷‍♂️</p>;
  }

  return (
    <ul>
      {todos.map((t) => (
        <TodoItem todo={t} key={t.id} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: TTodos,
  isLoading: PropTypes.bool,
};

TodoList.defaultProps = {
  todos: [],
  isLoading: false,
};
