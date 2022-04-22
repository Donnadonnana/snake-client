const connect = require("./client");
const input = require("./input");

console.log("Connecting ...");
connect();

input.setupInput();