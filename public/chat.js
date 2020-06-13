const socket = io.connect('http://localhost:3000')


//ref
const message = document.getElementById('message')
const person = document.getElementById('handle')
const btn = document.getElementById('send')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

btn.addEventListener('click',function(event){
    socket.emit('chat',{
        message:message.value.trim(),
        person:person.value.trim()
    })
    message.value = "";
})

message.addEventListener('keypress',function(event){
    socket.emit('typing',person.value)
})

socket.on('chat',function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><i class="fa fa-user-circle-o" aria-hidden="true"></i><strong>' + data.person + ': </strong>' + data.message + '</p>';
})
socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});