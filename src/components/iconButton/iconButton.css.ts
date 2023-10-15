import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const mobile: ComplexStyleRule = {
  padding: "16px",
};

const desktop: ComplexStyleRule = {
  padding: "8px",
};

export const button = style({
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  borderRadius: "8px",
  transition: "background-color",
  transitionDuration: vars.transitions.duration,
  transitionTimingFunction: vars.transitions.timingFunction,
  ":hover": {
    backgroundColor: vars.color.backgroundHighlight,
  },
  cursor: "pointer",
  "@media": {
    "screen and (min-width: 769px)": desktop,
    "screen and (max-width: 768px)": mobile,
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
