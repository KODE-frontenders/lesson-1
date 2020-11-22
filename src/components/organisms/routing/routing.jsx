import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SettingsPage } from "components/pages/settings-page/settings-page";
import { TodosPage } from "components/pages/todos-page/todos-page";
import { NotFound } from "components/pages/not-found/not-found";

export const Routing = ({ toggleTheme }) => {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <SettingsPage toggleTheme={toggleTheme} />
        </Route>

        <Route path="/">
          <TodosPage />
        </Route>
        <Route path="/todos">
          <TodosPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
