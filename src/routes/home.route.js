import express from 'express'
import getHomepage from '../controllers/home.controller.js'

const router = express.Router()
router.get('/', getHomepage)

export default router
