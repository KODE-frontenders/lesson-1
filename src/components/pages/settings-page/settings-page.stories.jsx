import React from "react";
import { SettingsPage } from "./settings-page";

export default {
  title: "Pages/SettingsPage",
  component: SettingsPage,
};

const Template = (args) => <SettingsPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
