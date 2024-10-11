import express from 'express'
import getCartpage from '../controllers/cart.controller.js'

const router = express.Router()
router.get('/', getCartpage)

export default router
