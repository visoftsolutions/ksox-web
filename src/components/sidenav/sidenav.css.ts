import { style } from "@vanilla-extract/css";

export const sidenav = style({
  display: "grid",
  gridTemplateRows: "repeat(6, 1fr)",
  gap: "2px",
});
