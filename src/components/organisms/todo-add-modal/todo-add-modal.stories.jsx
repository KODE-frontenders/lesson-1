import React from "react";
import { TodoAddModal } from "./todo-add-modal";

export default {
  title: "Molecules/TodoAddModal",
  component: TodoAddModal,
};

const Template = (args) => <TodoAddModal {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Visible = Template.bind({});
Basic.args = {
  isVisible: true,
};
