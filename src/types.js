import { shape, string, bool, arrayOf } from "prop-types";

export const TTodo = shape({
  id: string,
  isDone: bool,
  title: string,
});

export const TTodos = arrayOf(TTodo);
