import { style } from "@vanilla-extract/css";
import { vars } from "~/theme.css";

export const orderbook = style([
  {
    display: "grid",
    gridTemplateRows: "42px 19px 210px 25px 210px",
    fontSize: "13px",
    padding: "10px",
    fontFamily: "IBMPlexMono-Medium",
  },
]);

export const marketTendency = style([
  {
    width: "fit-content",
    fontSize: "1rem",
    color: vars.color.green,
  },
]);

export const marketTendencyPosition = style([
  {
    display: "flex",
    alignItems: "center",
  },
]);

export const orderbookPriceSells = style([
  {
    display: "flex",
    justifyContent: "flexstart",
    color: vars.color.red,
  },
]);

export const orderbookPriceBuys = style([
  {
    display: "flex",
    justifyContent: "flexstart",
    color: vars.color.green,
  },
]);

export const orderbookSinglePosition = style([
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

export const orderbookPriceLabel = style([
  {
    color: vars.color.subtext,
    display: "flex",
    justifyContent: "flex-start",
  },
]);

export const orderbookSingleLabel = style([
  {
    color: vars.color.subtext,
    display: "flex",
    justifyContent: "flex-end",
  },
]);

export const orderbookList = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
]);

export const orderbookHighlightRed = style([
  {
    display: "grid",
    marginLeft: "6px",
    height: "13px",
    gridTemplateColumns: "79.5px 79.5px",

    background: "#d43f4a",
  },
]);

export const orderbookHighlightGreen = style([
  {
    display: "grid",
    marginLeft: "6px",
    height: "13px",
    gridTemplateColumns: "79.5px 79.5px",
    background: "#3d8e5d",
  },
]);

export const orderbookNoHighlight = style([
  {
    display: "grid",
    gridTemplateColumns: "82.5px 82.5px",
  },
]);

export const orderbookLabelList = style([
  {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    alignItems: "center",
  },
]);

export const orederbookPositionsGrid = style([
  {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    overflow: "hidden",
  },
]);

export const orederbookSellsReverse = style([
  {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-around",
    overflow: "hidden",
  },
]);

export const viewSwitch = style([
  {
    display: "grid",
    alignItems: "flex-start",
    marginTop: "4px",
    color: vars.color.subtext,

    ":hover": {
      cursor: "pointer",
    },
  },
]);

export const viewSwitchGrid = style([
  {
    display: "grid",
    alignItems: "start",
    rowGap: "10px",
    gridTemplateColumns: "100px 100px 1fr",
    color: vars.color.subtext,
  },
]);

export const orderbookActive = style([
  {
    color: vars.color.text,
  },
]);

export const tradeHistoryActive = style([
  {
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: "100px 100px 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "1px",
    color: vars.color.text,
  },
]);

export const tradeHistoryGrid = style([
  {
    display: "grid",
    gridTemplateRows: "21px 1fr",
  },
]);

export const tradeHistoryLabels = style([
  {
    color: vars.color.subtext,
    display: "grid",
    gridTemplateColumns: "140px 1fr 1fr",
  },
]);

export const tradeHistoryAssets = style([
  {
    color: vars.color.subtext,
    display: "grid",
    gridTemplateColumns: "140px 1fr 1fr",
    gridTemplateRows: "21px",
  },
]);
export const tradeHistoryAssetsGrid = style([
  {
    gridTemplateRows: "21px",
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

export const tradeHistorySize = style([
  {
    display: "flex",
    justifyContent: "flex-end",
  },
]);
export const dd = style([
  {
    display: "flex",
    flexDirection: "row",
  },
]);
