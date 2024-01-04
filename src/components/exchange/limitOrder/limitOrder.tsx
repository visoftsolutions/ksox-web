import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  buttons,
  buyButtonActive,
  buySellButton,
  comissions,
  inputField,
  sectionGrid,
  sectionWrapper,
  sellButtonActive,
  comissionChoice,
  comissionChoiceActive,
  inputFieldAndLabel,
  input,
  inputMiddleLabel,
  balance,
  belowFieldInfo,
  balanceValue,
} from "./limitOrder.css";

export default component$(() => {
  const buySellChoice = useSignal("buy");
  const limitMarketTpsl = useSignal("limit");
  return (
    <div class={sectionWrapper}>
      <div class={sectionGrid}>
        <div class={buttons}>
          <button
            class={[
              `${buySellButton} ${
                buySellChoice.value === "buy" && buyButtonActive
              }`,
            ]}
            onClick$={() => (buySellChoice.value = "buy")}>
            Buy
          </button>
          <button
            class={[
              `${buySellButton} ${
                buySellChoice.value === "sell" && sellButtonActive
              }`,
            ]}
            onClick$={() => (buySellChoice.value = "sell")}>
            Sell
          </button>
        </div>
        <ul class={comissions}>
          <li
            class={`${comissionChoice} ${
              limitMarketTpsl.value === "limit" && comissionChoiceActive
            }`}
            onClick$={() => (limitMarketTpsl.value = "limit")}>
            Limit
          </li>
          <li
            class={`${comissionChoice} ${
              limitMarketTpsl.value === "market" && comissionChoiceActive
            }`}
            onClick$={() => (limitMarketTpsl.value = "market")}>
            Market
          </li>
          <li
            class={`${comissionChoice} ${
              limitMarketTpsl.value === "tpsl" && comissionChoiceActive
            }`}
            onClick$={() => (limitMarketTpsl.value = "tpsl")}>
            TP/SL
          </li>
        </ul>
        <div class={balance}>
          <span>Availble Balnce</span>
          <span class={balanceValue}>--USDT</span>
        </div>
        <div class={input}>
          <label>Order Price</label>
          <div class={inputFieldAndLabel}>
            <input class={inputField}></input>
            <span class={inputMiddleLabel}>USDT</span>
          </div>
        </div>
        <div class={input}>
          <label>Qty</label>
          <div class={inputFieldAndLabel}>
            <input class={inputField}></input>
            <span class={inputMiddleLabel}>BTC</span>
          </div>
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
        <div class={input}>
          <label>Order Value</label>
          <div class={inputFieldAndLabel}>
            <input class={inputField}></input>
            <span class={inputMiddleLabel}>USDT</span>
          </div>
          <div class={belowFieldInfo}>
            <span>--USD</span>
          </div>
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
