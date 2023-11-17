import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Orderbook from "~/components/exchange/orderbook/orderbook";

export default component$(() => {
  return <Orderbook />;
});

export const head: DocumentHead = {
  title: "KSOX Exchange BTC-USD",
  meta: [
    {
      name: "description",
      content: "Exchange crypto platform",
    },
  ],
};
