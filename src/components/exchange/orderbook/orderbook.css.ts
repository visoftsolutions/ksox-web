import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const gap = style([
  {
    gap: "10px",
  },
]);

export const generalLayout = style([
  gap,
  {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    fontSize: "12px",
    fontFamily: "IBMPlexMono-Medium",
    padding: "10px",
    height: "calc(100% - 20px)",
    fontWeight: "bold",
    color: vars.color.subtext,
  },
]);

export const marketPrice = style([
  gap,
  {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto auto 1fr",
  },
]);

export const price = style([
  {
    color: vars.color.green,
    fontSize: "16px",
    fontWeight: "bolder",
  },
]);

export const priceSells = style([
  {
    display: "flex",
    justifyContent: "flexstart",
    color: vars.color.red,
  },
]);

export const priceBuys = style([
  {
    display: "flex",
    justifyContent: "flexstart",
    color: vars.color.green,
  },
]);

export const regularPosition = style([
  {
    display: "flex",
    justifyContent: "flex-end",
  },
]);

export const leftLabel = style([
  {
    justifyContent: "flex-start",
    textAlign: "left",
  },
]);

export const rightLabel = style([
  {
    justifyContent: "flex-end",
    textAlign: "right",
  },
]);

export const highlight = style([
  {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: "10px",
  },
]);

export const highlightRed = style([
  {
    display: "grid",
    marginLeft: "6px",
    height: "13px",
    gridTemplateColumns: "79.5px 79.5px",

    background: "#d43f4a",
  },
]);

export const highlightGreen = style([
  {
    display: "grid",
    marginLeft: "6px",
    height: "13px",
    gridTemplateColumns: "79.5px 79.5px",
    background: "#3d8e5d",
  },
]);

export const noHighlight = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
]);

export const labelGrid3 = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    color: vars.color.subtext,
  },
]);

export const labelGrid4 = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    alignItems: "center",
    color: vars.color.subtext,
  },
]);

export const buysList = style([
  {
    display: "flex",
    rowGap: "4px",
    flexDirection: "column",
  },
]);

export const sellsList = style([
  {
    display: "flex",
    rowGap: "4px",
    flexDirection: "column-reverse",
  },
]);

export const viewSwitch = style([
  {
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: "100px 100px 1fr",
    color: vars.color.subtext,
    background: vars.color.background,
    ":hover": {
      cursor: "pointer",
    },
  },
]);

export const switchButton = style([
  {
    paddingTop: "5px",
    paddingBottom: "5px",
    fontSize: "14px",
  },
]);

export const orderbookActive = style([
  {
    color: vars.color.text,
  },
]);

export const tradeHistoryActive = style([
  {
    color: vars.color.text,
  },
]);

export const trade = style([
  {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gap: "10px",
    fontSize: "12px",
  },
]);

export const tradeElement = style([
  {
    color: vars.color.subtext,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
]);
export const tradeList = style([
  {
    display: "flex",
    rowGap: "4px",
    flexDirection: "column",
  },
]);

export const twoPartGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
]);

export const relative = style([
  {
    position: "relative",
    overflow: "hidden",
  },
]);

export const absoluteFill = style([
  {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
]);

export const orderbook = style([
  {
    display: "grid",
    gridTemplateRows: "auto 1fr auto 1fr",
    gap: "10px",
    fontSize: "12px",
  },
]);

export const greenText = style([
  {
    color: vars.color.green,
  },
]);

export const redText = style([
  {
    color: vars.color.red,
  },
]);

export const greenHighlight = style([
  {
    backgroundColor: vars.color.green,
    opacity: 0.1,
  },
]);

export const redHighlight = style([
  {
    backgroundColor: vars.color.red,
    opacity: 0.1,
  },
]);
