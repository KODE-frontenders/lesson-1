import React from "react";
import { PageTemplate } from "components/templates/page/page";
import { TodoList } from "components/organisms/todo-list/todo-list";
import { TodosAdd } from "components/organisms/todos-add/todos-add";

export const TodosPage = () => {
  return (
      <PageTemplate title="Toduber" linkTo="settings">
        <TodoList />
        <TodosAdd />
      </PageTemplate>
  );
};
