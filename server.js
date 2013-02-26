var connect = require('connect');

// static web server
var httpServer = connect.createServer(
    connect.static(__dirname)
);

httpServer.listen(8080);

// socket io web socket server
var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
