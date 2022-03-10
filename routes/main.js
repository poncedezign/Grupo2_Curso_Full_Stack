var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

// Sistema de ruteo
router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/cardPayment', mainController.cardPayment);
router.get('/carrito', mainController.carrito);
//router.get('/product', mainController.producto);




module.exports = router;