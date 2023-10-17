import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const mobile: ComplexStyleRule = {
  display: "none",
};

const desktop: ComplexStyleRule = {
  gridTemplateColumns: "auto 1fr",
};

export const header = style({
  backgroundColor: vars.color.background,
  "@media": {
    "screen and (min-width: 769px)": desktop,
    "screen and (max-width: 768px)": mobile,
  },
});
