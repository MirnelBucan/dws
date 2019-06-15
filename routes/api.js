var express = require('express');
var router = express.Router();
const userServices = require('../services/UserServices');
const userValidation = require('../validations/user.validate');
const passport = require('passport');

router.route('/register')
  .post(userValidation.register, userServices.register);

router.route('/login')
  .post(userValidation.login, passport.authenticate('login', {session: false}),userServices.login );

module.exports = router;
