import React from "react";
import { TodoItem } from "./todo-item";

export default {
  title: "Molecules/TodoItem",
  component: TodoItem,
};

const Template = (args) => <TodoItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  todo: { id: "sdtnst", title: "test", isDone: false },
  toggleTodoAction: () => {},
  deletoTodoAction: () => {},
};

export const isDone = Template.bind({});
isDone.args = {
  todo: { id: "sdtnst", title: "test", isDone: true },
  toggleTodoAction: () => {},
  deletoTodoAction: () => {},
};
