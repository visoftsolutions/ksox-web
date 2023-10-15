import { component$ } from "@builder.io/qwik";
import { sidenav } from "./sidenav.css";
import { IconButton } from "~/components/iconButton/iconButton";

import HomeSvg from "~/media/icons/dark_theme/logo.svg?jsx";
import TransferSvg from "~/media/icons/dark_theme/transfer.svg?jsx";
import ChartSvg from "~/media/icons/dark_theme/chart.svg?jsx";
import WalletSvg from "~/media/icons/dark_theme/wallet.svg?jsx";
import PeopleSvg from "~/media/icons/dark_theme/people.svg?jsx";
import SettingsSvg from "~/media/icons/dark_theme/settings.svg?jsx";

export const SideNav = component$(() => {
  return (
    <div class={sidenav}>
      <IconButton>
        <HomeSvg style={{ height: "24px" }} q:slot="icon"></HomeSvg>
        {/* <div q:slot="text">Home</div> */}
      </IconButton>
      <IconButton>
        <TransferSvg q:slot="icon"></TransferSvg>
        {/* <div q:slot="text">Home</div> */}
      </IconButton>
      <IconButton>
        <ChartSvg q:slot="icon"></ChartSvg>
        {/* <div q:slot="text">Home</div> */}
      </IconButton>
      <IconButton>
        <WalletSvg q:slot="icon"></WalletSvg>
        {/* <div q:slot="text">Home</div> */}
      </IconButton>
      <IconButton>
        <PeopleSvg q:slot="icon"></PeopleSvg>
        {/* <div q:slot="text">Home</div> */}
      </IconButton>
      <IconButton>
        <SettingsSvg q:slot="icon"></SettingsSvg>
        {/* <div q:slot="text">Home</div> */}
      </IconButton>
    </div>
  );
});
