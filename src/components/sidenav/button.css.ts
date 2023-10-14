import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const button = style({
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  padding: "8px",
  borderRadius: "8px",
  transition: "background-color 0.3s ease-in-out",
  ":hover": {
    backgroundColor: vars.color.backgroundHighlight,
  },
});

export const iconSlot = style({
  width: "24px",
  height: "24px",
  aspectRatio: "square",
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
});
