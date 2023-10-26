import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { backgroundHighlight } from "~/theme.css";

const mobile: ComplexStyleRule = {
  gridRowStart: "1",
  gridRowEnd: "2",
  gridColumnStart: "1",
  gridColumnEnd: "2",
};

const desktop: ComplexStyleRule = {
  gridRowStart: "1",
  gridRowEnd: "2",
  gridColumnStart: "2",
  gridColumnEnd: "3",
};

export const main = style([
  mobile,
  backgroundHighlight,
  {
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
