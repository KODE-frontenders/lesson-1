import React from "react";
import { IconLink } from "./icon-link";

export default {
  title: "Molecules/IconLink",
  component: IconLink,
};

const Template = (args) => <IconLink {...args} />;

export const ToTodosPage = Template.bind({});
ToTodosPage.args = {
  route: "todos",
};

export const ToSettingsPage = Template.bind({});
ToSettingsPage.args = {
  route: "settings",
};
