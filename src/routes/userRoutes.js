const multer = require('multer');
const path = require ('path')
var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const validaciones = require('../middlewares/validaciones');
const userController = require('../controllers/userController');
const res = require('express/lib/response');



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, '../../public/images/users'));
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img${path.extname(file.originalname)}`);  } 
})

const uploadFile = multer({storage:storage});

router.put('/', userController.putUsers);
router.get('/edit/:id',userController.editUsers);
router.put('/confirmacionUsuario',userController.putUsers);
router.get ('/delete/:id', userController.deleteUsers);

router.get('/createUser', userController.showCreateUser);
router.post(
    '/register',
    body('userName').notEmpty().withMessage('Falta el user name'),
    uploadFile.single('userImage'),
    userController.createUser
);
// router.put('/upDateUser',userController.upDateUser);

module.exports = router;