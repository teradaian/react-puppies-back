import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

// GET localhost:3000/users
router.get('/', puppiesCtrl.index)
router.get('/:id', puppiesCtrl.show)
router.post('/', puppiesCtrl.create)
router.get('/:id', puppiesCtrl.update)
router.get('/:id', puppiesCtrl.delete)

export { router }
