import React from "react";
import { ReactComponent as PlusIcon } from "icons/plus-icon.svg";

export const TodoAddButton = ({ onToggle }) => {
  return (
    <button type="button" onClick={onToggle}>
      <PlusIcon />
    </button>
  );
};
