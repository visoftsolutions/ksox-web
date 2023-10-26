import { type ComplexStyleRule, style } from "@vanilla-extract/css";
import { mediaQuery } from "~/breakpoint.css";
import { background } from "~/theme.css";

const headerMainDesktop: ComplexStyleRule = {
  gridTemplateRows: "48px 1fr",
};

export const headerMain = style({
  height: "100%",
  display: "grid",
  gridTemplateRows: "1fr auto",
  gap: "1px",
  "@media": {
    [mediaQuery.desktop]: headerMainDesktop,
  },
});

export const header = style([
  background,
  {
    display: "grid",
    gridRowStart: "2",
    gridRowEnd: "3",
    justifyItems: "center",
    justifyContent: "center",
    "@media": {
      [mediaQuery.desktop]: {
        gridRowStart: "1",
        gridRowEnd: "2",
      },
    },
  },
]);

export const headerMobile = style({
  display: "flex",
  flexFlow: "row wrap",
  gap: "2px",
  justifyItems: "center",
  justifyContent: "center",
  "@media": {
    [mediaQuery.desktop]: {
      display: "none",
    },
  },
});

export const headerDesktop = style({
  display: "none",
  "@media": {
    [mediaQuery.desktop]: {
      display: "grid",
    },
  },
});

const layoutDesktop: ComplexStyleRule = {
  gridRowStart: "2",
  gridRowEnd: "3",
};

export const layout = style({
  display: "grid",
  gridRowStart: "1",
  gridRowEnd: "2",
  "@media": {
    [mediaQuery.desktop]: layoutDesktop,
  },
});

export const mobileLayout = style({
  display: "grid",
  gap: "1px",
  "@media": {
    [mediaQuery.desktop]: {
      display: "none",
    },
  },
});

export const desktopLayout = style({
  display: "none",
  gridTemplateColumns: "1fr 300px",
  gap: "1px",
  "@media": {
    [mediaQuery.desktop]: {
      display: "grid",
    },
  },
});

export const buySell = style([background, {}]);

export const mainPosition = style({
  display: "grid",
  gridTemplateRows: "1fr 350px",
  gap: "1px",
});

export const position = style([background, {}]);

export const chartOrderbook = style({
  display: "grid",
  gridTemplateColumns: "1fr 350px",
  gap: "1px",
});

export const chart = style([background, {}]);

export const orderbook = style([background, {}]);

export const panel = style([background, {}]);
