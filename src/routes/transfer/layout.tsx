import { component$, Slot } from "@builder.io/qwik";
import { layout, left } from "./layout.css";
import Threads from "./threads";

export default component$(() => {
  return (
    <div class={layout}>
      <div class={left}>
        <Threads></Threads>
      </div>
      <Slot></Slot>
    </div>
  );
});
