import socket from '~/plugins/socket.io.js'

export default function ({ app }) {
  if (!app.$auth.loggedIn) {
    return
  }

  socket.emit('online-ping', app.$auth.user.id)
}