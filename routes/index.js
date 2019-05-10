var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');

router.route('/').get(IndexController.index);
router.route('/register').get(IndexController.register);
router.route('/login').get(IndexController.login);

module.exports = router;
