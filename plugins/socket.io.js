import io from 'socket.io-client'

export default ({ store, app, env }, inject) => {
  const socket = io(process.env.SOCKET_HOST_URL)
  inject('socket', socket)

  socket.on('new-message', (message) => {
    store.dispatch('pushMessage', message)
  })
}
