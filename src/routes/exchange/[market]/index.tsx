import { component$ } from "@builder.io/qwik";
import { type RequestHandler, routeLoader$ } from "@builder.io/qwik-city";
import { parseMarket } from "./parseMarket";
import {
  buySell,
  chart,
  chartOrderbook,
  desktopLayout,
  header,
  headerDesktop,
  headerMain,
  headerMobile,
  layout,
  mainPosition,
  mobileLayout,
  orderbook,
  panel,
  position,
} from "./index.css";
import { IconButton } from "~/components/iconButton/iconButton";
import AccountSvg from "~/media/icons/dark_theme/account.svg?jsx";
import ChartSvg from "~/media/icons/dark_theme/chart.svg?jsx";
import OrderbookSvg from "~/media/icons/dark_theme/orderbook.svg?jsx";
import PositionsSvg from "~/media/icons/dark_theme/positions.svg?jsx";
import TradesSvg from "~/media/icons/dark_theme/trades.svg?jsx";
import Orderbook from "~/components/exchange/orderbook/orderbook";

export const onRequest: RequestHandler = ({ params, redirect, sharedMap }) => {
  try {
    const market = parseMarket(params.market);
    sharedMap.set("quoteAsset", market.quoteAsset);
    sharedMap.set("baseAsset", market.baseAsset);
  } catch (error) {
    redirect(300, "/");
  }
};

export const useMarket = routeLoader$(({ sharedMap }) => {
  return {
    quoteAsset: sharedMap.get("quoteAsset") as string,
    baseAsset: sharedMap.get("baseAsset") as string,
  };
});

export default component$(() => {
  const { quoteAsset, baseAsset } = useMarket().value;
  console.log(quoteAsset);
  console.log(baseAsset);

  return (
    <div class={headerMain}>
      <div class={header}>
        {/* mobile */}
        <div class={headerMobile}>
          <IconButton>
            <AccountSvg style={{ height: "24px" }} q:slot="icon"></AccountSvg>
            {/* <div q:slot="text">Home</div> */}
          </IconButton>
          <IconButton>
            <ChartSvg style={{ height: "24px" }} q:slot="icon"></ChartSvg>
            {/* <div q:slot="text">Home</div> */}
          </IconButton>
          <IconButton>
            <OrderbookSvg
              style={{ height: "24px" }}
              q:slot="icon"
            ></OrderbookSvg>
            {/* <div q:slot="text">Home</div> */}
          </IconButton>
          <IconButton>
            <PositionsSvg
              style={{ height: "24px" }}
              q:slot="icon"
            ></PositionsSvg>
            {/* <div q:slot="text">Home</div> */}
          </IconButton>
          <IconButton>
            <TradesSvg style={{ height: "24px" }} q:slot="icon"></TradesSvg>
            {/* <div q:slot="text">Home</div> */}
          </IconButton>
        </div>
        {/* desktop */}
        <div class={headerDesktop}></div>
      </div>

      <div class={layout}>
        {/* mobile */}
        <div class={mobileLayout}>
          <div class={panel}></div>
        </div>

        {/* desktop */}
        <div class={desktopLayout}>
          <div class={mainPosition}>
            <div class={chartOrderbook}>
              <div class={chart}></div>
              <div class={orderbook}>
                <Orderbook />
              </div>
            </div>
            <div class={position}></div>
          </div>
          <div class={buySell}></div>
        </div>
      </div>
    </div>
  );
});
