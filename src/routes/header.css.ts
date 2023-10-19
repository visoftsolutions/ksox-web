import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { vars } from "~/theme.css";

const mobile: ComplexStyleRule = {
  display: "none",
  gridTemplateColumns: "1fr",
};

const desktop: ComplexStyleRule = {
  display: "block",
  gridTemplateColumns: "auto 1fr",
};

export const header = style([
  mobile,
  {
    backgroundColor: vars.color.background,
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
