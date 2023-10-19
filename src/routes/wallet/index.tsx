import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: "KSOX-wallet",
  meta: [
    {
      name: "description",
      content: "Crypto wallet",
    },
  ],
};
