import React from "react";
import { TodosPage } from "./todos-page";

import { Basic as TodoAddBasic } from "components/organisms/todos-add/todos-add.stories";
import { SeveralItems as TodoListSeveralItems } from "components/organisms/todo-list/todo-list.stories";

export default {
  title: "Pages/TodosPage",
  component: TodosPage,
};

const Template = (args) => <TodosPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <TodoListSeveralItems {...TodoListSeveralItems.args} />,
    <TodoAddBasic {...TodoAddBasic.args} />,
  ],
};
