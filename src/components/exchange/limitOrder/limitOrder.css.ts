import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const sectionWrapper = style({
  margin: "10px 10px 10px 10px",
});

export const sectionGrid = style({
  display: "grid",
  gap: "24px",
  gridTemplateRows: "repeat 1fr",
  justifyItems: "center",
  alignContent: "center",
});

export const buttons = style({
  width: "100%",
  backgroundColor: vars.color.divider,
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  borderRadius: "4px",
});

export const buySellButton = style({
  color: vars.color.subtext,
  background: vars.color.divider,
  transition: "background 0.3s",
  padding: "6px 16px",
  minWidth: "50%",
  height: "32px",
  border: "0px",
  borderRadius: "4px",
  cursor: "pointer",
});

export const buyButtonActive = style({
  background: vars.color.green,
  color: vars.color.text,
});

export const sellButtonActive = style({
  background: vars.color.red,
  color: vars.color.text,
});

export const comissions = style({
  width: "100%",
  fontSize: "14px",
  display: "flex",
  flexFlow: "row nowrap",
  columnGap: "12px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  listStyle: "none",
  margin: "0px",
  padding: "0px",
  cursor: "pointer",
});

export const comissionChoice = style({
  color: vars.color.subtext,
  ":hover": { color: vars.color.blue },
});

export const comissionChoiceActive = style({
  color: vars.color.blue,
});

export const balance = style({
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  color: vars.color.subtext,
  fontSize: "small",
});

export const input = style({
  display: "flex",
  fontSize: "small",
  flexFlow: "column nowrap",
  gap: "4px",
  width: "100%",
  color: vars.color.subtext,
});

export const inputFieldAndLabel = style({
  position: "relative",
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  color: vars.color.text,
  fontSize: "small",
  width: "100%",
  background: vars.color.divider,
  borderRadius: "4px",
  height: "32px",
});

export const inputField = style({
  width: "100%",
  borderRadius: "4px",
  background: vars.color.divider,
  border: "1px solid transparent",
  transition: "border 0.2s",
  height: "100%",
  ":focus-visible": { outline: vars.color.blue },
  ":focus": { borderColor: vars.color.blue },
  paddingLeft: "16px",
});

export const inputMiddleLabel = style({
  position: "absolute",
  right: "16px",
});
