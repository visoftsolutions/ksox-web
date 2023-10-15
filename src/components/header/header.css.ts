import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const headerGrid = style({
  display: "grid",
  gridAutoFlow: "column",
  gap: "8px",
  justifyItems: "center",
  justifyContent: "center",
  alignItems: "center",
});

export const header = style([
  headerGrid,
  {
    paddingLeft: "8px",
    paddingRight: "8px",
    height: "100%",
    gridTemplateColumns: "auto 1fr auto",
  },
]);

export const leftSide = style([
  headerGrid,
  {
    gridColumnStart: "1",
    gridColumnEnd: "2",
  },
]);

export const rightSide = style([
  headerGrid,
  {
    gridColumnStart: "3",
    gridColumnEnd: "4",
  },
]);

export const title = style({
  fontWeight: "bolder",
  letterSpacing: "1px",
  fontSize: "20px",
  color: vars.color.subtext,
});
