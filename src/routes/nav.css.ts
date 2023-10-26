import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { background } from "~/theme.css";

const mobile: ComplexStyleRule = {
  gridRowStart: "2",
  gridRowEnd: "3",
  gridColumnStart: "1",
  gridColumnEnd: "2",
};

const desktop: ComplexStyleRule = {
  gridRowStart: "1",
  gridRowEnd: "2",
  gridColumnStart: "1",
  gridColumnEnd: "2",
};

export const nav = style([
  mobile,
  background,
  {
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
