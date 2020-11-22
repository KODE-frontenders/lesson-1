import React from "react";
import { NotFound } from "./not-found";

export default {
  title: "Pages/NotFound",
  component: NotFound,
};

const Template = (args) => <NotFound {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
