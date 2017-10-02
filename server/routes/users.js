import { Router } from 'express'
import User from '../models/user'

const router = Router()

/* GET users listing. */
router.get('/users', function(req, res, next) {
  User.find({ _id: { $ne: req.session.authUser.id } })
  .then(users => {
    res.json(users)
  })
  .catch(error => {
    // Place error handler here
    res.status(500).send('Something went wrong')
  })
})

/* GET user by ID. */
router.get('/users/:id', function(req, res, next) {
  User.find({ _id: req.query.id })
  .then(user => {
    res.json(user)
  })
  .catch(error => {
    // Place error handler here
    res.status(500).send('Something went wrong')
  })
})

export default router
