import { Router } from 'express'
import User from '../models/user'
import { userTransformer } from '../helpers'

const router = Router()

// Add POST - /api/register
router.post('/register', (req, res, next) => {
  // Check for registration errors
  const username = req.body.username
  const name = req.body.name
  const password = req.body.password

  // Return error if username is not provided
  if (!username) {
    return res.status(422).send({ error: 'You must enter an username.' })
  }

  // Return error if name not provided
  if (!name) {
    return res.status(422).send({ error: 'You must enter name.' })
  }

  // Return error if no password provided
  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' })
  }

  User.findOne({ username }, (err, existingUser) => {
    if (err) { return next(err) }

      // If user is not unique, return error
    if (existingUser) {
      return res.status(422).send({ error: 'That username address is already in use.' })
    }

      // If username is unique and password was provided, create account
    const user = new User({
      username,
      password,
      name: name
    })

    user.save((err, user) => {
      if (err) { return next(err) }

      const userInfo = userTransformer(user)

      req.session.authUser = userInfo

      res.status(201).json(userInfo)
    })
  })
})

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

export default router
