import { Router } from 'express'

const router = Router()

// Mock Users
const users = [
  { id: 1, name: 'Joan Pearson', username: 'john', avatar: 'http://lorempixel.com/55/55/people/1/' },
  { id: 2, name: 'Ruth Kelly', username: 'ruth', avatar: 'http://lorempixel.com/55/55/people/2/' },
  { id: 3, name: 'Dennis Bennett', username: 'dennis', avatar: 'http://lorempixel.com/55/55/people/3/' },
  { id: 4, name: 'Julia Munoz', username: 'julia', avatar: 'http://lorempixel.com/55/55/people/4/' },
  { id: 5, name: 'David Walker', username: 'david', avatar: 'http://lorempixel.com/55/55/people/5/' },
  { id: 6, name: 'Aaron Gutierrez', username: 'aaron', avatar: 'http://lorempixel.com/55/55/people/6/' },
  { id: 7, name: 'Margaret Pearson', username: 'margaret', avatar: 'http://lorempixel.com/55/55/people/7/' }
]

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
