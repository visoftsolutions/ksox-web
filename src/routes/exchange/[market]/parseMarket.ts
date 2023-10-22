export const parseMarket = (market: string) => {
  const regex = /^(\w+)-(\w+)$/;
  const match = market.match(regex);
  if (match) {
    return {
      quoteAsset: match[1].toUpperCase(),
      baseAsset: match[2].toUpperCase(),
    };
  } else {
    throw new Error("Cound not parse market");
  }
};
