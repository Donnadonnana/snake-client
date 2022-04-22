const net = require('net');
const { IP, PORT } = require("./constants");
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {  
    console.log('Successfully connected to game server!');
  })

  conn.on('data', (data) => {
    console.log('The server says: ', data);
  })

  conn.on('connect', () => {
  conn.write('Say: Hiii');
  })
  
  // conn.on('connect', () => {
  // conn.write('Say: Hii');
  // });
  
  return conn;
};

module.exports = connect;
