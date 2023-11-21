import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const generalLayout = style([
  {
    display: "grid",
    gridTemplateRows: "1fr 14fr",
    fontSize: "13px",
    padding: "10px",
    fontFamily: "IBMPlexMono-Medium",
    height: "calc(100% - 20px)",
  },
]);

export const marketTendency = style([
  {
    width: "fit-content",
    fontSize: "1rem",
    color: vars.color.green,
    display: "flex",
    alignItems: "center",
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
    color: vars.color.text,
  },
]);

export const orderbookLabel = style([
  {
    color: vars.color.subtext,
  },
]);

export const priceLabel = style([
  {
    color: vars.color.subtext,
    display: "flex",
    justifyContent: "flex-start",
  },
]);

export const regularLabel = style([
  {
    color: vars.color.subtext,
    display: "flex",
    justifyContent: "flex-end",
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

export const labelGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
    flexDirection: "column-reverse",
    rowGap: "4px",
  },
]);

export const viewSwitch = style([
  {
    display: "grid",
    alignItems: "start",
    rowGap: "10px",
    gridTemplateColumns: "100px 100px 1fr",
    color: vars.color.subtext,
    marginTop: "4px",

    ":hover": {
      cursor: "pointer",
    },
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

export const tradeHistoryGrid = style([
  {
    display: "grid",
    gridTemplateRows: "1fr 13fr",
  },
]);

export const tradeHistoryLabels = style([
  {
    color: vars.color.subtext,
    display: "grid",
    gridTemplateColumns: "2fr 1fr 2fr",
    alignItems: "center",
  },
]);

export const tradeHistoryAssets = style([
  {
    color: vars.color.subtext,
    display: "grid",
    gridTemplateColumns: "2fr 1fr 2fr",
  },
]);
export const tradeHistoryAssetsList = style([
  {
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
  },
]);

export const tradeHistoryBuy = style([
  {
    color: vars.color.green,
  },
]);

export const tradeHistorySell = style([
  {
    color: vars.color.red,
  },
]);

export const sizeAsset = style([
  {
    display: "flex",
    justifyContent: "flex-end",
  },
]);
export const dd = style([
  {
    display: "flex",
    position: "relative",
  },
]);

export const positionsGrid = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
]);

export const listRootRelative = style([
  {
    position: "relative",
    overflow: "hidden",
  },
]);

export const listRootAbsolute = style([
  {
    position: "absolute",
  },
]);

export const orderbook = style([
  {
    display: "grid",
    gridTemplateRows: "1fr 6fr 1fr 6fr",
    fontSize: "13px",
  },
]);
