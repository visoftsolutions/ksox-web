import { component$ } from "@builder.io/qwik";
import { type RequestHandler, routeLoader$ } from "@builder.io/qwik-city";
import { parseMarket } from "./parseMarket";

export const onRequest: RequestHandler = ({ params, redirect, sharedMap }) => {
  try {
    const market = parseMarket(params.market);
    sharedMap.set("quoteAsset", market.quoteAsset);
    sharedMap.set("baseAsset", market.baseAsset);
  } catch (error) {
    redirect(300, "/");
  }
};

export const useMarket = routeLoader$(({ sharedMap }) => {
  return {
    quoteAsset: sharedMap.get("quoteAsset") as string,
    baseAsset: sharedMap.get("baseAsset") as string,
  };
});

export default component$(() => {
  const { quoteAsset, baseAsset } = useMarket().value;
  console.log(quoteAsset);
  console.log(baseAsset);

  return <></>;
});
