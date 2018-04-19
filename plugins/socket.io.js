import io from 'socket.io-client'

const socket = io(process.env.SOCKET_HOST_URL || 'http://localhost:3002')

export default socket
