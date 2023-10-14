import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const layoutRow = style({
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateRows: "36px 1fr",
  backgroundColor: vars.color.backgroundHighlight,
  gap: "1px",
});

export const layoutColumn = style({
  display: "grid",
  gridTemplateColumns: "36px 1fr",
  gap: "1px",
  backgroundColor: vars.color.backgroundHighlight,
});
