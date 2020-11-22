import React from "react";
import { PageTemplate } from "components/templates/page/page";

export const NotFound = () => {
  return (
    <PageTemplate title="404!" linkTo="home">
      <p>Sorry, nothing here 🤷‍♂️</p>
    </PageTemplate>
  );
};
