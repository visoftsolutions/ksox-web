import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const layout = style({
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateColumns: "300px 1fr",
  height: "100%",
  backgroundColor: vars.color.backgroundHighlight,
  gap: "1px",
});

export const side = style({
  backgroundColor: vars.color.background,
});

export const left = style([side, {}]);

export const right = style({
  display: "grid",
  gridAutoFlow: "row",
  gridTemplateRows: "1fr 200px",
  gap: "1px",
});

export const top = style([side, {}]);

export const bottom = style([side, {}]);
