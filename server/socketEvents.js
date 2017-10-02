export default function(io) {
  // Set socket.io listeners.
  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })

    socket.on('send-message', function(message) {
      socket.broadcast.emit('new-message', message)
    })
  })
}
