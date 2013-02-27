var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.get('/:resource', function (req, res) {
  res.sendfile(__dirname+'/web/'+req.params.resource);
});

app.get('/js/:resource', function (req, res) {
  res.sendfile(__dirname+'/web/js/'+req.params.resource);
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});