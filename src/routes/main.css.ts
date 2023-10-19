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

export const main = style([mobile, {
  backgroundColor: vars.color.background,
  "@media": {
    "screen and (min-width: 768px)": desktop,
  },
}]);
