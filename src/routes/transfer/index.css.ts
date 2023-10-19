import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { background } from "./layout.css";

export const index = style([background]);

const desktop: ComplexStyleRule = {
  display: "none",
};

const mobile: ComplexStyleRule = {
  display: "block",
};

export const threads = style([
  background,
  mobile,
  {
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
