const {Router} = require('express')
const router = Router()

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    // Use static name for now
    const authUser = {
      id: 8,
      name: req.body.username,
      username: req.body.username,
      avatar: 'http://lorempixel.com/55/55/people/8/'
    }

    req.session.authUser = authUser
    return res.json(authUser)
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

module.exports = router
