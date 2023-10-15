import { component$ } from "@builder.io/qwik";
import { header, leftSide, rightSide, title } from "./header.css";
import { Connect } from "../connect/connect";
import BellSvg from "~/media/icons/dark_theme/bell.svg?jsx";
import { IconButton } from "~/components/iconButton/iconButton";

export const Header = component$(() => {
  return (
    <div class={header}>
      <div class={leftSide}>
        <div class={title}>KSOX Finance</div>
      </div>
      <div class={rightSide}>
        <IconButton>
          <BellSvg q:slot="icon"></BellSvg>
          {/* <div q:slot="text">Home</div> */}
        </IconButton>
        <Connect></Connect>
      </div>
    </div>
  );
});
