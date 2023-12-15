import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  buttonsField,
  buyButton,
  buyButtonActive,
  limitOrderGrid,
  limitOrderWrapper,
  sellButton,
  sellButtonActive,
} from "./limitOrder.css";

export default component$(() => {
  const isBuyActive = useSignal(true);
  return (
    <div class={limitOrderWrapper}>
      <div class={limitOrderGrid}>
        <div class={buttonsField}>
          <button
            class={[`${buyButton} ${isBuyActive.value ? buyButtonActive : ""}`]}
            onClick$={() => (isBuyActive.value = true)}>
            Buy
          </button>
          <button
            class={[
              `${sellButton} ${!isBuyActive.value ? sellButtonActive : ""}`,
            ]}
            onClick$={() => (isBuyActive.value = false)}>
            Sell
          </button>
        </div>
        <div>
          <span>Limit</span>
        </div>
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
