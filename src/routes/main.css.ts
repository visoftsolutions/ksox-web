import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const mobile: ComplexStyleRule = {
  gridRowStart: "1",
  gridRowEnd: "2",
};

const desktop: ComplexStyleRule = {
  gridColumnStart: "2",
  gridColumnEnd: "3",
};

export const main = style({
  backgroundColor: vars.color.background,
  "@media": {
    "screen and (min-width: 769px)": desktop,
    "screen and (max-width: 768px)": mobile,
  },
});
