const { Route } = require('express');
var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/:id', productController.product);
router.get('/', productController.products)

router.get('/:id/edit', productController.editProducts);
router.get ('/create', productController.createProducts)
router.get ('/delete', productController.deleteProducts)
router.post ('/', productController.postProducts)
router.put ('/', productController.putProducts)

module.exports = router;
