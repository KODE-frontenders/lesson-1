import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HomeIcon } from "shared/icons/home-icon.svg";
import { ReactComponent as SettingsIcon } from "shared/icons/settings-icon.svg";

// TODO: move to component constants
const ROUTES_ICONS_MAP = {
  todos: <HomeIcon />,
  settings: <SettingsIcon />,
};

export const IconLink = ({ route }) => (
  // TODO: add routing
  // TODO: replace a tag by Link component
  <a href="./">{ROUTES_ICONS_MAP[route]}</a>
);

IconLink.propTypes = {
  route: PropTypes.string.isRequired,
};

IconLink.defaultProps = {
  route: "todos",
};
