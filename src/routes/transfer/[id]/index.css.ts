import { style } from "@vanilla-extract/css";
import { background } from "../layout.css";

export const conversation = style({
  display: "grid",
  gridTemplateRows: "1fr 100px",
  gap: "1px",
});

export const chat = style([background, {}]);

export const message = style([background, {}]);
