const express = require('express')
const socket = require('socket.io')

// setting the server
const app = express()
const server = app.listen(3000,()=>{
    console.log("listening to port 3000.")
})
app.use(express.static('public'))

//scoket set-up
const io = socket(server)
io.on('connection',(socket)=>{
    console.log('made socket connection', socket.id);
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
})


