import React from "react";
import { TodoList } from "./todo-list";

export default {
  title: "Organisms/TodoList",
  component: TodoList,
};

const Template = (args) => <TodoList {...args} />;

export const LoadedList = Template.bind({});
LoadedList.args = { isLoading: true };

export const EmptyList = Template.bind({});

export const OneItem = Template.bind({});
OneItem.args = {
  todos: [
    {
      title: "test",
      isDone: false,
      id: "stn*&ds*t&n^d",
    },
  ],
};

export const SeveralItems = Template.bind({});
SeveralItems.args = {
  todos: [
    {
      title: "test",
      isDone: false,
      id: "stn*&ds*t&n^d",
    },
    {
      title: "test",
      isDone: true,
      id: "stn*&ds*t^d",
    },
    {
      title: "stnstn stnstn stnstnstnt",
      isDone: false,
      id: "stnds*t&n^d",
    },
  ],
};
