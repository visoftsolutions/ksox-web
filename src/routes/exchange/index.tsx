import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { index } from "./index.css";

export default component$(() => {
  return <div class={index}></div>;
});

export const head: DocumentHead = {
  title: "KSOX-exchange",
  meta: [
    {
      name: "description",
      content: "Exchange crypto",
    },
  ],
};
