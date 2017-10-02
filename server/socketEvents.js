export default function(io) {
  // Set socket.io listeners.
  io.on('connection', (socket) => {
    console.log('a socket client connected')

    socket.on('disconnect', () => {
      console.log('socket client disconnected')
    })

    socket.on('send-message', function(message) {
      socket.broadcast.emit('new-message', message)
    })
  })
}
