import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const limitOrderWrapper = style({
  margin: "10px 10px 10px 10px",
});

export const limitOrderGrid = style({
  display: "grid",
  gridTemplateRows: "repeat 1fr",
  justifyItems: "center",
  alignContent: "center",
});

export const buttonsField = style({
  width: "100%",
  backgroundColor: vars.color.divider,
  display: "flex",
  flexFlow: "row",
  justifyContent: "center",
  borderRadius: "4px",
});

export const buyButton = style({
  color: vars.color.subtext,
  background: vars.color.divider,
  transition: "background 0.3s",
  padding: "6px 16px",
  minWidth: "50%",
  border: "0px",
  borderRadius: "4px",
  cursor: "pointer",
});

export const buyButtonActive = style({
  background: vars.color.green,
  color: vars.color.text,
});

export const sellButton = style({
  color: vars.color.subtext,
  transition: "background 0.3s",
  background: vars.color.divider,
  padding: "6px 16px",
  minWidth: "50%",
  height: "35px",
  border: "0px",
  borderRadius: "4px",
  cursor: "pointer",
});
export const sellButtonActive = style({
  background: vars.color.red,
  color: vars.color.text,
});

export const limitField = style({
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  columnGap: "16px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  listStyle: "none",
  margin: "0px",
  padding: "0px",
  cursor: "pointer",
});

export const limitChoice = style({
  color: vars.color.subtext,
});

export const limitChoiceActive = style({
  color: vars.color.blue,
});

export const limitMarketTpslActive = style({
  color: vars.color.blue,
});
