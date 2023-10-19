import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { layout, left, right, top, bottom } from "./index.css";

export default component$(() => {
  return (
    <div class={layout}>
      <div class={left}>left side</div>
      <div class={right}>
        <div class={top}></div>
        <div class={bottom}></div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "KSOX-transfer",
  meta: [
    {
      name: "description",
      content: "Transfer crypto",
    },
  ],
};
