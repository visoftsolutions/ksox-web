import { Slot, component$ } from "@builder.io/qwik";
import { button, iconSlot } from "./button.css";

export const Button = component$(() => {
  return (
    <div class={button}>
      <div class={iconSlot}>
        <Slot name="icon"></Slot>
      </div>
    </div>
  );
});
