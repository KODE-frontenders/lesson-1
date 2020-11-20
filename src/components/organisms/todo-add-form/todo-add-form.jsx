import React from "react";
import PropTypes from "prop-types";

export const TodoAddForm = ({ onCancel, onSubmit }) => {
  const [todoInputValue, setTodoInputValue] = React.useState("");

  const onChangeHandler = React.useCallback((e) => {
    const newValue = e.target.value;
    setTodoInputValue(newValue);
  }, []);

  const onCancelHandler = React.useCallback(() => {
    setTodoInputValue("");
    onCancel();
  }, [onCancel]);

  const onSubmitHandler = React.useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(todoInputValue);
      setTodoInputValue("");
    },
    [onSubmit, todoInputValue]
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <button type="button" onClick={onCancelHandler}>
        Cancel
      </button>
      <button type="submit">Done</button>

      <input
        type="text"
        value={todoInputValue}
        onChange={onChangeHandler}
        placeholder="What do you want to do?"
      />
    </form>
  );
};

TodoAddForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
