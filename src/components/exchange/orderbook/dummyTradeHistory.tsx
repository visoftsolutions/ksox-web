const currentdate = new Date();

export const dummyTradeHistory = [
  {
    id: 1,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    id: 2,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    id: 3,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    id: 4,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    id: 5,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    id: 6,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
  {
    id: 7,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistoryBuy",
  },
  {
    id: 8,
    time:
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds(),
    price: Math.round(Math.random() * (37000 - 34000) + 34000).toFixed(2),
    size: (Math.random() * 1).toFixed(3),
    assetType: "tradeHistorySell",
  },
];
