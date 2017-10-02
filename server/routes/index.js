import { Router } from 'express'

import users from './users'
import auth from './auth'
import conversation from './conversation'

const router = Router()

// Add Routes
router.use(users)
router.use(auth)
router.use(conversation)

export default router
