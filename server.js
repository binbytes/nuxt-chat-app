const {Nuxt, Builder} = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

const apiRoutes = require('./server/routes')

app.use(express.static(path.join( __dirname, './assets')))
app.use('/api', apiRoutes)

const isProd = process.env.NODE_ENV === 'production'

let config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)
const promise = (isProd ? Promise.resolve() : new Builder(nuxt).build())

promise.then(() => {
  app.use(nuxt.render)
  app.listen(port)
  console.log(`Server is listening on ${port}`)
})
.catch((error) => {
  console.error(error)
  process.exit(1)
})
