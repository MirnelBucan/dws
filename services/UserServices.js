const { Users} = require('../models');
const { sanitizeUser, password } = require('../utils');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport.cred');
const joi = require('@hapi/joi');

module.exports = {
  register: async (req, res, next) => {
    try {
      let hash = await password.hash(req.body.password);
      const newUser = await Users.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hash,
        email: req.body.email,
      });
      res.status(200).json({status: 'success'});
    }catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
  login: (req, res, next) => {
    const usr = sanitizeUser(req.user);
    // generate jwt token, set expiration in 24h
    const token = jwt.sign(usr,config.secret, { expiresIn: '24h'});
    //set cookie expiration in 24h
    const expires= new Date(Date.now()+(1000*60*60*24));
    //set token in cookie, and respond to client
    // res.cookie('Bearer',token,{httpOnly:true,expires:expires}).json({ succes: true});
    res.status(200).json({token, succes: true});
  },
};