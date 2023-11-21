import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  marketTendency,
  orderbook,
  viewSwitch,
  orderbookActive,
  tradeHistoryActive,
  tradeHistoryGrid,
  tradeHistoryLabels,
  tradeHistoryBuy,
  tradeHistorySell,
  tradeHistoryAssets,
  generalLayout,
  priceLabel,
  regularLabel,
  sellsList,
  noHighlight,
  priceSells,
  regularPosition,
  listRootRelative,
  listRootAbsolute,
  positionsGrid,
  buysList,
  priceBuys,
  highlightGreen,
  labelGrid,
  highlightRed,
  tradeHistoryAssetsList,
  sizeAsset,
} from "./orderbook.css";

const currentdate = new Date();

const dummyOrderBookBuys = [
  {
    price: "first",
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 0,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 1,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 2,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 3,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 4,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 5,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 6,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 7,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 8,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 9,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 9,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 9,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 9,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 9,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 9,
  },
];

const dummyOrderBookSells = [
  {
    price: "first",
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 10,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 20,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 30,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 40,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 50,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 60,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 70,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 80,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 90,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
  {
    price: 33332,
    qty: 0.022,
    total1: 1.233,
    total2: 222.222,
    id: 100,
  },
];
const dummyTradeHistory = [
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
];

export default component$(() => {
  const content = useSignal("orderbook");

  return (
    <div class={generalLayout}>
      <div class={viewSwitch}>
        <div
          class={`${content.value === "orderbook" && orderbookActive}`}
          onClick$={() => (content.value = "orderbook")}>
          Orderbook
        </div>
        <div
          class={`${content.value === "tradeHistory" && tradeHistoryActive}`}
          onClick$={() => (content.value = "tradeHistory")}>
          Trade History
        </div>
      </div>
      {(() => {
        switch (content.value) {
          case "orderbook":
            return (
              <div class={orderbook}>
                <div class={labelGrid}>
                  <div class={priceLabel}>Price(USDT)</div>
                  <div class={regularLabel}>Qty(BTC)</div>
                  <div class={regularLabel}>Total(BTC)</div>
                  <div class={regularLabel}>Total(USDT)</div>
                </div>
                <div class={listRootRelative}>
                  <div class={listRootAbsolute}>
                    <div class={sellsList}>
                      {dummyOrderBookSells.map((asset) => (
                        <div class={positionsGrid} key={asset.id}>
                          <div class={noHighlight}>
                            <div class={priceSells}>{asset.price}</div>
                            <div class={regularPosition}>{asset.qty}</div>
                          </div>

                          <div class={highlightRed}>
                            <div class={regularPosition}>{asset.total1}</div>
                            <div class={regularPosition}>{asset.total2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div class={marketTendency}>
                  <div>37.222.45</div>
                  <img
                    width="10"
                    height="12"
                    src="../../../../public/GeenArrow.svg"
                    alt="green arrow"
                  />
                </div>

                <div class={listRootRelative}>
                  <div class={listRootAbsolute}>
                    <div class={buysList}>
                      {dummyOrderBookBuys.map((asset) => (
                        <div class={positionsGrid} key={asset.id}>
                          <div class={noHighlight}>
                            <div class={priceBuys}>{asset.price}</div>
                            <div class={regularPosition}>{asset.qty}</div>
                          </div>

                          <div class={highlightGreen}>
                            <div class={regularPosition}>{asset.total1}</div>
                            <div class={regularPosition}>{asset.total2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          case "tradeHistory":
            return (
              <>
                <div class={tradeHistoryGrid}>
                  <div class={tradeHistoryLabels}>
                    <span>Time</span>
                    <span>Price</span>
                    <span class={sizeAsset}>Size</span>
                  </div>
                  <div class={listRootRelative}>
                    <div class={listRootAbsolute}>
                      <div class={tradeHistoryAssetsList}>
                        {dummyTradeHistory.map((asset) => (
                          <div
                            key={asset.time}
                            class={`${tradeHistoryAssets} ${
                              asset.assetType === "tradeHistoryBuy"
                                ? tradeHistoryBuy
                                : tradeHistorySell
                            }`}>
                            <div>{asset.time}</div>
                            <div>{asset.price}</div>
                            <div class={sizeAsset}>{asset.size}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
