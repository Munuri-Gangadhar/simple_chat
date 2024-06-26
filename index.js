const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const { join } = require('node:path');
const {Server} = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
});

server.listen(3000,()=>{
    console.log('Server is listening at 3000');
})