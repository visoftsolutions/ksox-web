import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  buttonsField,
  buyButton,
  buyButtonActive,
  limitChoice,
  limitField,
  limitMarketTpslActive,
  limitOrderGrid,
  limitOrderWrapper,
  sellButton,
  sellButtonActive,
} from "./limitOrder.css";

export default component$(() => {
  const buySellChoice = useSignal("buy");
  const limitMarketTpsl = useSignal("limit");
  return (
    <div class={limitOrderWrapper}>
      <div class={limitOrderGrid}>
        <div class={buttonsField}>
          <button
            class={[
              `${buyButton} ${
                buySellChoice.value === "buy" && buyButtonActive
              }`,
            ]}
            onClick$={() => (buySellChoice.value = "buy")}>
            Buy
          </button>
          <button
            class={[
              `${sellButton} ${
                buySellChoice.value === "sell" && sellButtonActive
              }`,
            ]}
            onClick$={() => (buySellChoice.value = "sell")}>
            Sell
          </button>
        </div>
        <ul class={limitField}>
          <li
            class={`${limitChoice} ${
              limitMarketTpsl.value === "limit" && limitMarketTpslActive
            }`}
            onClick$={() => (limitMarketTpsl.value = "limit")}>
            Limit
          </li>
          <li
            class={`${limitChoice} ${
              limitMarketTpsl.value === "market" && limitMarketTpslActive
            }`}
            onClick$={() => (limitMarketTpsl.value = "market")}>
            Market
          </li>
          <li
            class={`${limitChoice} ${
              limitMarketTpsl.value === "tpsl" && limitMarketTpslActive
            }`}
            onClick$={() => (limitMarketTpsl.value = "tpsl")}>
            TP/SL
          </li>
        </ul>
        <div>
          <span>availble balnce</span>
          <span>USDT</span>
        </div>
        <div>
          <span>Order Price</span>
          <input></input>
          <span>USDT</span>
        </div>
        <div>
          <span>Qty</span>
          <input></input>
          <span>BTC</span>
        </div>
        <div>
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
            id="myRange"
          />
        </div>
        <div>
          <span>Order Value</span>
          <input></input>
          <span>USDT</span>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Limit Order",
  meta: [
    {
      name: "description",
      content: "Window for meaking orders",
    },
  ],
};
