var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

// Sistema de ruteo
router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);
router.get('/cardPayment', mainController.cardPayment);

router.get('/articulo/:id/:descripcion?', mainController.articulo);

module.exports = router;