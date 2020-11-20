import React from "react";
import { TodosAdd } from "./todos-add";

export default {
  title: "Organisms/TodosAdd",
  component: TodosAdd,
};

const Template = (args) => <TodosAdd {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
