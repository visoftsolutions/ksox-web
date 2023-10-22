import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

const background = style({
  backgroundColor: vars.color.background,
});

export const index = style([
  background,
  {
    height: "100%",
  },
]);
