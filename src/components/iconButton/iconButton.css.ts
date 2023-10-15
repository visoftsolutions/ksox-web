import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const button = style({
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  padding: "8px",
  borderRadius: "8px",
  transition: "background-color",
  transitionDuration: vars.transitions.duration,
  transitionTimingFunction: vars.transitions.timingFunction,
  ":hover": {
    backgroundColor: vars.color.backgroundHighlight,
  },
  cursor: "pointer",
});

export const iconSlot = style({
  width: "24px",
  height: "24px",
  aspectRatio: "square",
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
});
