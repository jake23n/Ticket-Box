'use strict'

import { CreatedResponse, OkResponse } from "../../core/success.response.js"
import accessService from "../../services/access.service.js"

class AccessController {
  async getLogin(req, res){
    res.render('login', { errorMessage: null })
  }
  async getSignUp(req, res){
    res.render('signup', { errorMessage: null })
  }
  // TODO: API login
  async login(req, res, next) {
    // try {
      const metadata = await accessService.login(req.body);
      // if(metadata && metadata.customer && metadata.tokens){
        req.session.customer = metadata.customer; // Store user in session
        req.session.tokens = metadata.tokens;
        res.redirect('/');
      // }
    // } catch (error) {
    //   res.render('login', { errorMessage: null });
    // }
  }

  // TODO: API signup
  async signUp(req, res, next) {
    try {
      const metadata = await accessService.signUp(req.body);

      if (metadata && metadata.customer && metadata.tokens) {
        req.session.error = 'Sign up successfully! Please log in.';
        return res.redirect('/login');
      }

      res.render('signup', { error: 'Registration failed. Please try again.' });
    } catch (error) {
      res.render('signup', { error: error.message });
    }

  }

  // TODO: API logout
  async logout(req, res, next) {
    new OkResponse({
      message: 'Logout successfully',
      metadata: await accessService.logout(req.keyStore) // keyStore is from middleware authentication
    }).send(res)
  }

  // TODO: API refresh token
  async refreshToken(req, res, next) {
    // new OkResponse({
    //   message: 'Refresh token successfully',
    //   metadata: await accessService.refreshToken(req.body)
    // }).send(res)

    // TODO: v2 optimize
    new OkResponse({
      message: 'Refresh token successfully',
      metadata: await accessService.refreshTokenV2({
        refreshToken: req.refreshToken,
        user: req.user,
        keyStore: req.keyStore
      }) // middleware authenticationV2
    }).send(res)
  }
}

export default new AccessController()