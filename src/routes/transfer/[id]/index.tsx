import { component$ } from "@builder.io/qwik";
import { chat, conversation, message } from "./index.css";

export default component$(() => {
  return (
    <div class={conversation}>
      <div class={chat}>chat</div>
      <div class={message}>message</div>
    </div>
  );
});
