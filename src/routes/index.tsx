import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <></>;
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
