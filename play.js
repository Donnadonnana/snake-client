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
  conn.write('Name: DH');
  });
  
  // setInterval(() => {
  //   conn.write('Move: up');

  // }, 500)

  
  return conn;
};

const setupInput = ()=> {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) => {
    process.stdout.write('.');  
    if (key === '\u0003') { 
      process.exit()
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};







module.exports = {
  connect: connect,
  setupInput: setupInput
}
