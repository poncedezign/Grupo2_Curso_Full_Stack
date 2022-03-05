var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/articulo/:id/:descripcion?', productController.articulo);

module.exports = router;
