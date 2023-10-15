import { Slot, component$ } from "@builder.io/qwik";
import { button, iconSlot } from "./iconButton.css";

export const IconButton = component$(() => {
  return (
    <div class={button}>
      <div class={iconSlot}>
        <Slot name="icon"></Slot>
      </div>
    </div>
  );
});
