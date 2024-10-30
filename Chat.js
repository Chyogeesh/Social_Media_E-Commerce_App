import io from 'socket.io-client';
const socket = io('http://localhost:5000');

// Send message
const sendMessage = (message) => {
  socket.emit('message', message);
};

// Receive message
socket.on('message', (msg) => {
  console.log('New message: ', msg);
});
