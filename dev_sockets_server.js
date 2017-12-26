const WebSocketServer = require("websocketserver");
const server = new WebSocketServer("all", 7000);

const connectionList = new Set();
server.on("connection", function(id) {
    connectionList.add(id);
});

server.on('message', (data, id) => {
  const mes = server.unmaskMessage(data);
  console.log(mes)
  const str = server.convertToString(mes.message);
  console.log(str, id)
})

function randomNumber() {x
  return Math.round(Math.random() * 1000)
}

setInterval(function () { 
  connectionList.forEach((id) => {
    const now = new Date()
    const time = now.toTimeString().split(' ')[0]
    const operations = ['redact', 'reveal', 'store']

    const message = JSON.stringify(operations.map((op)=> {
      let o = {
        operation: op,
        data: {}
      }
      o.data[time] = randomNumber()
      return o
    }))
    
    server.sendMessage("all", message, id);
  })
}, 5000)