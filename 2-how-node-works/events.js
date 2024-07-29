const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There is new Sale!");
});

myEmitter.on("newSale", () => {
  console.log("Cutomer Name: Anas.");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There is now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

/**
 * Another Example
 */

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Recieved!");
  res.end("Request Recieved!");
});

server.on("request", (req, res) => {
  console.log("Another Request Recieved!");
});

server.on("close", (req, res) => {
  console.log("Server Closed!");
});

server.listen(5000, () => {
  console.log("http://localhost:5000");
});
