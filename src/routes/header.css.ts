import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { background, vars } from "~/theme.css";

const mobile: ComplexStyleRule = {
  display: "none",
  gridTemplateColumns: "1fr",
};

const desktop: ComplexStyleRule = {
  display: "block",
  gridTemplateColumns: "auto 1fr",
};

export const header = style([
  mobile, background,
  {
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
