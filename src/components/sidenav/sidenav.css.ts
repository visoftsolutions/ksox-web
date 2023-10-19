import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";

const mobile: ComplexStyleRule = {
  gridTemplateColumns: "repeat( auto-fit, minmax(60px, 1fr) )",
  gridTemplateRows: "none",
};

const desktop: ComplexStyleRule = {
  gridTemplateColumns: "none",
  gridTemplateRows: "repeat(6, 1fr)",
};

export const sidenav = style([
  mobile,
  {
    display: "grid",
    gap: "2px",
    justifyItems: "center",
    justifyContent: "center",
    "@media": {
      [mediaQuery.desktop]: desktop,
    },
  },
]);
