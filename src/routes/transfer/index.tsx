import { component$ } from "@builder.io/qwik";
import { index, threads } from "./index.css";
import Threads from "./threads";

export default component$(() => {
  return (
    <div class={index}>
      <div class={threads}>
        <Threads></Threads>
      </div>
    </div>
  );
});
