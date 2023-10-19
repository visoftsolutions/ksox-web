import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const mobile: ComplexStyleRule = {
  gridRowStart: "2",
  gridRowEnd: "3",
};

const desktop: ComplexStyleRule = {
  gridColumnStart: "1",
  gridColumnEnd: "2",
};

export const nav = style([mobile, {
  backgroundColor: vars.color.background,
  "@media": {
    "screen and (min-width: 768px)": desktop,
  },
}]);
