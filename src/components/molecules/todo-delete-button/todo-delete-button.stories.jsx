import React from "react";
import { TodoDeleteButton } from "./todo-delete-button";

export default {
  title: "Molecules/TodoDeleteButton",
  component: TodoDeleteButton,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

const Template = (args) => <TodoDeleteButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onDelete: () => {},
};
