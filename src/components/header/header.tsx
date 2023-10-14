import { component$ } from "@builder.io/qwik";
import { header } from "./header.css";

export const Header = component$(() => {
  return <div class={header}></div>;
});
