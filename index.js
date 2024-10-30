const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  console.log('User connected');
  
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
