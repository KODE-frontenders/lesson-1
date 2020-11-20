import React from "react";
import { Header } from "components/templates/header/header";
import { Body } from "components/templates/body/body";
import { TodoList } from "components/organisms/todo-list/todo-list";
import { TodosAdd } from "components/organisms/todos-add/todos-add";

export const TodosPage = () => {
  return (
    <div>
      <Header title="Toduber" linkTo="settings" />

      <Body>
        <TodoList />
        <TodosAdd />
      </Body>
    </div>
  );
};
