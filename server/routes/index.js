const {Router} = require('express')
const users = require('./users')
const auth = require('./auth')
const router = Router()

// Add Routes
router.use(users)
router.use(auth)

module.exports = router
