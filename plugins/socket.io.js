import io from 'socket.io-client'
const socket = io(process.env.HOST_URL)

export default ({ store, app }, inject) => {
  inject('socket', socket)

  socket.on('new-message', (message) => {
    store.dispatch('pushMessage', message)
  })
}
