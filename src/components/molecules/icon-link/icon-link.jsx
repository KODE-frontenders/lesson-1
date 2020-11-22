import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HomeIcon } from "shared/icons/home-icon.svg";
import { ReactComponent as SettingsIcon } from "shared/icons/settings-icon.svg";
import { Link } from "react-router-dom";

// TODO: move to component constants
const ROUTES_ICONS_MAP = {
  todos: <HomeIcon />,
  settings: <SettingsIcon />,
};

export const IconLink = ({ route }) => {
  const path = `/${route}`;

  return <Link to={path}>{ROUTES_ICONS_MAP[route]}</Link>;
};

IconLink.propTypes = {
  route: PropTypes.string.isRequired,
};

IconLink.defaultProps = {
  route: "settings",
};
