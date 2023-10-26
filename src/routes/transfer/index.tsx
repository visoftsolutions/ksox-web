import { component$ } from "@builder.io/qwik";
import { index, threads } from "./index.css";
import Threads from "./threads";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={index}>
      <div class={threads}>
        <Threads></Threads>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "KSOX Transfer",
  meta: [
    {
      name: "description",
      content: "Transfer crypto",
    },
  ],
};
