'use strict'
import express from 'express'
import accessController from '../controllers/access.controller.js'
import forwardError from '../utils/forwardError.js'
import { authenticationV2 } from '../middlewares/auth.js'

const router = express.Router()
// GET
router.get('/login', accessController.getLogin)
router.get('/signup', accessController.getSignUp)

// POST
// TODO: route sign up
router.post('/api/v1/auth/signup', forwardError(accessController.signUp))

// TODO: route login
router.post('/login', forwardError(accessController.login))

// TODO: route logout
// TODO: middleware authentication
router.post('/api/v1/auth/logout', authenticationV2, forwardError(accessController.logout))

// TODO: route refresh token
router.post('/api/v1/auth/refreshToken', authenticationV2, forwardError(accessController.refreshToken))

export default router
