import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TodoDeleteButton } from "components/molecules/todo-delete-button/todo-delete-button";
import { Checkbox } from "components/atoms/checkbox/checkbox"
import { Row, RowSpaceBetween } from "shared/ui/ui"

const StyledActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizeGrid.base}px 0px;
  border: none;
`;

const StyledInput = styled.input`
  padding: ${({ theme }) => theme.sizeGrid.triple}px;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 18px;
  }
`

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
      <StyledActionButtonsWrapper>
        <StyledActionButton type="button" onClick={onCancelHandler}>
          Cancel
        </StyledActionButton>
        <StyledActionButton type="submit">
          Done
        </StyledActionButton>
      </StyledActionButtonsWrapper>

      <RowSpaceBetween>
        <Row>
          <Checkbox />
          <StyledInput
            type="text"
            value={todoInputValue}
            onChange={onChangeHandler}
            placeholder="What do you want to do?"
          />
        </Row>

        <TodoDeleteButton onClick={onCancelHandler}/>
      </RowSpaceBetween>
    </form>
  );
};

TodoAddForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
