import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const layoutRowMobile: ComplexStyleRule = {
  gridTemplateRows: "1fr",
};

const layoutRowDesktop: ComplexStyleRule = {
  gridTemplateRows: "auto 1fr",
};

export const layoutRow = style([layoutRowMobile, {
  height: "100%",
  display: "grid",
  gridAutoFlow: "row",
  backgroundColor: vars.color.backgroundHighlight,
  gap: "1px",
  "@media": {
    "screen and (min-width: 768px)": layoutRowDesktop,
  },
}]);

const layoutColumnMobile: ComplexStyleRule = {
  gridTemplateRows: "1fr auto",
  gridAutoFlow: "row",
};

const layoutColumnDesktop: ComplexStyleRule = {
  gridTemplateColumns: "auto 1fr",
  gridAutoFlow: "column",
};

export const layoutColumn = style([layoutColumnMobile, {
  display: "grid",
  backgroundColor: vars.color.backgroundHighlight,
  gap: "1px",
  "@media": {
    "screen and (min-width: 768px)": layoutColumnDesktop,
  },
}]);
