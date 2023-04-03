var Logger = require("./logger");

var Shopper = require("./shopper");

var Store = require("./store");

var logger = new Logger().getInstance();

logger.log("starting app...");

var ridhwan = new Shopper("ridhwan", 500000);

var ridhwan_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",

    qty: 5,

    price: 75000,
  },

  {
    item: "Knit Hat",

    qty: 20,

    price: 5000,
  },
]);

logger.log("finished config...");

console.log(`${logger.count} logs total`);

logger.logs.map((log) => console.log(`${log.message}`));
