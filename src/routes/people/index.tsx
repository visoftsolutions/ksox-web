import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { index } from "./index.css";

export default component$(() => {
  return <div class={index}></div>;
});

export const head: DocumentHead = {
  title: "KSOX People",
  meta: [
    {
      name: "description",
      content: "Find people&manage friends",
    },
  ],
};
