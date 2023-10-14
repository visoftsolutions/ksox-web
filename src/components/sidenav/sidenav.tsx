import { component$ } from "@builder.io/qwik";
import { sidenav } from "./sidenav.css";

export const SideNav = component$(() => {
  return <div class={sidenav}></div>;
});
