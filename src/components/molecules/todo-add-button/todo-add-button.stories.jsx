import React from "react";
import { TodoAddButton } from "./todo-add-button";
import { lightTheme, darkTheme } from "shared/theme";

export default {
  title: "Molecules/TodoAddButton",
  component: TodoAddButton,
  args: { theme: lightTheme },
};

const Template = (args) => <TodoAddButton {...args} />;

export const Basic = Template.bind({});

export const Dark = Template.bind({});
Dark.args = { theme: darkTheme };
