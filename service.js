let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({port: 8181});

let isConnect = false;
wss.on('connection', function (ws) {
  console.log('client connected');
  isConnect = true;
  ws.on('message', function (message) {
    console.log(message);
  });

  setInterval(() => {
    if (isConnect) {
      ws.send('remote message');
    }
  }, 10000);

});
