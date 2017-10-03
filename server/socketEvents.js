export default function(io) {
  // Set socket.io listeners.
  io.on('connection', (socket) => {
    console.log('a socket client connected')

    socket.on('disconnect', () => {
      console.log('socket client disconnected')
    })

    socket.on('enter-conversation', (conversation) => {
      socket.join(conversation)
    })

    socket.on('leave-conversation', (conversation) => {
      socket.leave(conversation)
    })

    socket.on('send-message', function(message) {
      socket.broadcast.to(message.conversationId).emit('new-message', message)
    })
  })
}
