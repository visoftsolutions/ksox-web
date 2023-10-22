import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { vars } from "~/theme.css";

export const background = style({
  backgroundColor: vars.color.background,
});

const layoutDesktop: ComplexStyleRule = {
  gridTemplateColumns: "300px 1fr",
  gridTemplateRows: "1fr",
};

const layoutMobile: ComplexStyleRule = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
};

export const layout = style([
  layoutMobile,
  {
    display: "grid",
    height: "100%",
    backgroundColor: vars.color.backgroundHighlight,
    gap: "1px",
    "@media": {
      [mediaQuery.desktop]: layoutDesktop,
    },
  },
]);

const leftDesktop: ComplexStyleRule = {
  display: "block",
};

const leftMobile: ComplexStyleRule = {
  display: "none",
};

export const left = style([
  background,
  leftMobile,
  {
    "@media": {
      [mediaQuery.desktop]: leftDesktop,
    },
  },
]);
