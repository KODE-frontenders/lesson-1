import React from "react";
import { TodoAddForm } from "./todo-add-form";

export default {
  title: "Organisms/TodoAddForm",
  component: TodoAddForm,
};

const Template = (args) => <TodoAddForm {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onSubmit: () => {},
  onCancel: () => {},
};
