import { type ComplexStyleRule, style } from "@vanilla-extract/css";

const mobile: ComplexStyleRule = {
  gridTemplateColumns: "repeat( auto-fit, minmax(60px, 1fr) )",
};

const desktop: ComplexStyleRule = {
  gridTemplateRows: "repeat(6, 1fr)",
};

export const sidenav = style([mobile, {
  display: "grid",
  gap: "2px",
  justifyItems: "center",
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 768px)": desktop,
  },
}]);
