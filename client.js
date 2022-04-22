const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.2.22',
    port: 50541 
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