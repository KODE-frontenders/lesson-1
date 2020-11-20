import React from "react";
import { TodoItem } from "../../molecules/todo-item/todo-item";
import { TTodos } from "types";
import { ReactComponent as TodosSkeleton } from "icons/todos-skeleton.svg";
import PropTypes from "prop-types";

/**
 *
 * @param todos {todo[]} список тудушек
 * @param isLoading {boolean} состояние загрузки тудушек
 */
export const TodoList = ({ todos, isLoading }) => {
  if (isLoading) {
    return <TodosSkeleton />;
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
