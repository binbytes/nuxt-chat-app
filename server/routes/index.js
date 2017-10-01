import { Router } from 'express'

import users from './users'
import auth from './auth'

const router = Router()

// Add Routes
router.use(users)
router.use(auth)

export default router
