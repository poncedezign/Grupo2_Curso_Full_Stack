const multer = require('multer');
const path = require ('path')
const { Route } = require('express');
var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const { dirname } = require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        console.log(__dirname);
       cb(null, path.join(__dirname, '../../public/images'));
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})

const uploadFile = multer({storage});


router.get('/:id', productController.product);
router.get('/', productController.products)

router.get ('/create', productController.createProducts);
router.get('/:id/edit', productController.editProducts);

router.get ('/delete', productController.deleteProducts)
router.post ('/', uploadFile.single('image'),  productController.postProducts)
router.put('/', productController.putProducts)

module.exports = router;
