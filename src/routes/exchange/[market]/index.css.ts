import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const background = style({
  backgroundColor: vars.color.background,
});

export const mainBuySell = style({
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  gap: "1px",
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
