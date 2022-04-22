const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.2.22',
    port: 50541 
  });
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {  
    console.log('connected!');
  })

  conn.on('data', (data) => {
    console.log('The server says: ', data);
  })
  return conn;
};

module.exports = connect;
