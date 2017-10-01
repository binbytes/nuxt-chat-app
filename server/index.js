import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import routes from './routes'
import bodyParser from 'body-parser'
import session from 'express-session'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

app.use(bodyParser.json())

app.use(session({
  secret: process.env.secretKey || '7CigmgctzNfojD5D3eJ7tY62axBuFICn',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// Import API Routes
app.use('/api', routes)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
