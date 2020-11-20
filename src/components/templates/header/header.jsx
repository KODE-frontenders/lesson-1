import React from "react";
import { IconLink } from "components/molecules/icon-link/icon-link";

export const Header = ({ title, linkTo }) => {
  return (
    <header>
      <h1>{title}</h1>
      <IconLink route={linkTo} />
    </header>
  );
};
