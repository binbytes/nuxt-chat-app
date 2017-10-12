import io from 'socket.io-client'

const socket = io(process.env.SOCKET_HOST_URL)

// socket.on('new-message', (message) => {
//   store.dispatch('pushMessage', message)
// })

// socket.on('online-users', (ids) => {
//   if (ids) {
//     setTimeout(() => {
//       store.dispatch('setOnlineUsers', ids)
//     }, 1000)
//   }
// })

export default socket
