import { style } from "@vanilla-extract/css";
import { background } from "~/theme.css";

export const index = style([
  background,
  {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    color: "white",
  },
]);
