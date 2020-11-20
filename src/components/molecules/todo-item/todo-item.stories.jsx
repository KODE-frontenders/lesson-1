import React from "react";
import { TodoItem } from "./todo-item";

export default {
  title: "Molecules/TodoItem",
  component: TodoItem,
};

const Template = (args) => <TodoItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  todo: { id: "sdtnst", title: "test", completed: false },
  toggleTodoAction: () => {},
  deletoTodoAction: () => {},
};

export const Completed = Template.bind({});
Completed.args = {
  todo: { id: "sdtnst", title: "test", completed: true },
  toggleTodoAction: () => {},
  deletoTodoAction: () => {},
};
