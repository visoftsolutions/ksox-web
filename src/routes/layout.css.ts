import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { backgroundHighlight } from "~/theme.css";

const layoutRowMobile: ComplexStyleRule = {
  gridTemplateRows: "1fr",
};

const layoutRowDesktop: ComplexStyleRule = {
  gridTemplateRows: "auto 1fr",
};

export const layoutRow = style([
  layoutRowMobile,
  backgroundHighlight,
  {
    height: "100%",
    display: "grid",
    gridAutoFlow: "row",
    gap: "1px",
    "@media": {
      [mediaQuery.desktop]: layoutRowDesktop,
    },
  },
]);

const layoutColumnMobile: ComplexStyleRule = {
  gridTemplateRows: "1fr auto",
  gridTemplateColumns: "1fr",
  gridAutoFlow: "row",
};

const layoutColumnDesktop: ComplexStyleRule = {
  gridTemplateRows: "1fr",
  gridTemplateColumns: "auto 1fr",
  gridAutoFlow: "column",
};

export const layoutColumn = style([
  layoutColumnMobile,
  backgroundHighlight,
  {
    display: "grid",
    gap: "1px",
    "@media": {
      [mediaQuery.desktop]: layoutColumnDesktop,
    },
  },
]);
