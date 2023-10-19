import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

const mobile: ComplexStyleRule = {
  flexFlow: "row wrap",
};

const desktop: ComplexStyleRule = {
  flexFlow: "column",
};

export const sidenav = style([
  mobile,
  {
    display: "flex",
    gap: "2px",
    justifyItems: "center",
    justifyContent: "center",
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
