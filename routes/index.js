var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');
const userServices = require('../services/UserServices');
const userValidation = require('../validations/user.validate');
const passport = require('passport');

router.route('/').get(IndexController.index);
router.route('/onama').get(IndexController.aboutus);

router.route('/register')
  .get(IndexController.register);

router.route('/login')
  .get(IndexController.login);

router.route('/ostalo').get(IndexController.ostalo);
router.route('/places').get(IndexController.places);
router.route('/home').get((req, res, next) => {
    res.render('home');
});
router.route('/groblje/:id').get((req, res, next) => {
    res.render('groblje');
});
router.route('/vjera').get((req, res, next) => {
    res.render('vjera');
})

module.exports = router;
