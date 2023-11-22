import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { dummyOrderBookBuys } from "./dummyOrderBookBuys";
import { dummyOrderBookSells } from "./dummyOrderBookSells";
import { dummyTradeHistory } from "./dummyTradeHistory";
import greenUpArrow from "~/media/icons/dark_theme/greenUpArrow.svg";
import {
  orderbook,
  viewSwitch,
  orderbookActive,
  tradeHistoryActive,
  generalLayout,
  sellsList,
  buysList,
  leftLabel,
  rightLabel,
  switchButton,
  twoPartGrid,
  marketPrice,
  highlight,
  absoluteFill,
  relative,
  gap,
  redHighlight,
  greenHighlight,
  greenText,
  redText,
  price,
  trade,
  tradeList,
  labelGrid3,
  labelGrid4,
  tradeElement,
} from "./orderbook.css";

export default component$(() => {
  const content = useSignal("orderbook");

  return (
    <div class={generalLayout}>
      <div class={viewSwitch}>
        <div
          class={[
            switchButton,
            `${content.value === "orderbook" && orderbookActive}`,
          ]}
          onClick$={() => (content.value = "orderbook")}
        >
          Orderbook
        </div>
        <div
          class={[
            switchButton,
            `${content.value === "tradeHistory" && tradeHistoryActive}`,
          ]}
          onClick$={() => (content.value = "tradeHistory")}
        >
          Trade History
        </div>
      </div>
      {(() => {
        switch (content.value) {
          case "orderbook":
            return (
              <div class={orderbook}>
                <div class={labelGrid4}>
                  <div class={leftLabel}>Price(USDT)</div>
                  <div class={rightLabel}>Qty(BTC)</div>
                  <div class={rightLabel}>Total(BTC)</div>
                  <div class={rightLabel}>Total(USDT)</div>
                </div>

                <div class={relative}>
                  <div class={[absoluteFill, sellsList]}>
                    {dummyOrderBookSells.map((element) => (
                      <div class={[twoPartGrid, gap]} key={element.id}>
                        <div class={twoPartGrid}>
                          <div class={[leftLabel, redText]}>
                            {element.price}
                          </div>
                          <div class={rightLabel}>{element.qty}</div>
                        </div>

                        <div class={[twoPartGrid, relative]}>
                          <div class={rightLabel}>{element.total1}</div>
                          <div class={rightLabel}>{element.total2}</div>
                          <div class={[highlight, redHighlight]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div class={marketPrice}>
                  <div class={price}>37.222.45</div>
                  <img
                    width="12"
                    height="12"
                    src={greenUpArrow}
                    alt="price arrow"
                  />
                </div>

                <div class={relative}>
                  <div class={[absoluteFill, buysList]}>
                    {dummyOrderBookBuys.map((element) => (
                      <div class={[twoPartGrid, gap]} key={element.id}>
                        <div class={twoPartGrid}>
                          <div class={[leftLabel, greenText]}>
                            {element.price}
                          </div>
                          <div class={rightLabel}>{element.qty}</div>
                        </div>

                        <div class={[twoPartGrid, relative]}>
                          <div class={rightLabel}>{element.total1}</div>
                          <div class={rightLabel}>{element.total2}</div>
                          <div class={[highlight, greenHighlight]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          case "tradeHistory":
            return (
              <div class={trade}>
                <div class={labelGrid3}>
                  <div class={leftLabel}>Time</div>
                  <div class={rightLabel}>Price</div>
                  <div class={rightLabel}>Size</div>
                </div>
                <div class={relative}>
                  <div class={[absoluteFill, tradeList]}>
                    {dummyTradeHistory.map((trade) => (
                      <div
                        key={trade.id}
                        class={[
                          tradeElement,
                          gap,
                          trade.assetType === "tradeHistoryBuy"
                            ? greenText
                            : redText,
                        ]}
                      >
                        <div class={leftLabel}>{trade.time}</div>
                        <div class={rightLabel}>{trade.price}</div>
                        <div class={rightLabel}>{trade.size}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Orderbook",
  meta: [
    {
      name: "description",
      content: "Table of sales and buys for the asset",
    },
  ],
};
