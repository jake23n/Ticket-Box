'use strict'

// TODO: External modules
import express from 'express'
const router = express.Router();

// TODO: Internal modules
import accessController from '../../controllers/access.controller.js'
import forwardError from '../../../utils/forwardError.js'
import {authenticationV2} from '../../../middlewares/auth.js'



// GET
router.get('/login',accessController.getLogin)
router.get('/signup',accessController.getSignUp)

// POST
// TODO: route sign up
router.post('/signup', forwardError(accessController.signUp));

// TODO: route login
router.post('/login', forwardError(accessController.login));

// TODO: route logout
router.post('/logout', authenticationV2, forwardError(accessController.logout));

// // TODO: route refresh token
// router.post('/refreshToken',authenticationV2,  forwardError(accessController.refreshToken));

export default router