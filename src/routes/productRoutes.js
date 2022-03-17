const { Route } = require('express');
var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/product/:id', productController.products);
router.get('/', productController.products)

router.get('/edit/:id/', productController.editProducts);
router.put('/', productController.update)
router.get ('/create/', productController.createProducts)
router.delete ('delete/id', productController.deleteProducts)
router.post ('/', productController.postProducts)
router.put ('/', productController.putProducts)
router.post(('/', productController.store))

module.exports = router;
