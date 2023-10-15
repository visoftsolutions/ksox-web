import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const connect = style({
  fontSize: "16px",
  fontWeight: "bold",
  border: "1px solid",
  borderColor: vars.color.blue,
  borderRadius: "8px",
  color: vars.color.blue,
  paddingTop: "4px",
  paddingBottom: "4px",
  paddingLeft: "12px",
  paddingRight: "12px",
  transition: "background-color, color",
  transitionDuration: vars.transitions.duration,
  transitionTimingFunction: vars.transitions.timingFunction,
  ":hover": {
    backgroundColor: vars.color.blue,
    color: vars.color.background,
  },
  cursor: "pointer",
});
