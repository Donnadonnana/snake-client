const connect = require("./client");
const input = require("./input");

console.log("Connecting ...");
const connection = connect();

input.setupInput(connection);