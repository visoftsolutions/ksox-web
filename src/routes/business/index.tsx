import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "KSOX-business",
  meta: [
    {
      name: "description",
      content: "Crypto business platform",
    },
  ],
};
