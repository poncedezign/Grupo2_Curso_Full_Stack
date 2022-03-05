var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController.js');
router.get('/register', userController.register);
module.exports = router;