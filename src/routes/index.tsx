import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { index } from "./index.css";

export default component$(() => {
  return <div class={index}></div>;
});

export const head: DocumentHead = {
  title: "KSOX Finance",
  meta: [
    {
      name: "description",
      content: "All in one platform for your crypto business",
    },
  ],
};
