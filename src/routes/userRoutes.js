const multer = require('multer');
const path = require ('path')
const { Route } = require('express');
const { body } = require("express-validator")
var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { dirname } = require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, '../../public/images/users'));
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img${path.extname(file.originalname)}`);  } 
})

const uploadFile = multer({storage:storage});


router.get('/edit/:id',userController.editUsers);
router.get ('/delete/:id', userController.deleteUsers);

router.get('/createUser', userController.showCreateUser);
router.post(
    '/register',
    [
        body('userName').notEmpty().withMessage('Debes completar el nombre'),
        body('userLastName').notEmpty().withMessage('Debes completar el apellido'),
        body('userPassword').isLength({min: 6}).withMessage('Contraseña segura'),
        body('userEmail').notEmpty().withMessage('Correo electrónico').bail().isEmail().withMessage('El correo tiene que ser valido'),
        body('userImage').custom((value, {req})=>{
            let file =req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname)
    
            if (!file){
                throw new Error ('Tienes que subir una imagen');
            }else{
                let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ('Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}');
    }
            }       
            return true;
        }).withMessage('Debes subir una imagen')
    ],
    uploadFile.single('userImage'),
    userController.createUser
    

    
);

router.get('/', userController.editUsers);
router.put('/', userController.putUsers);
router.get('/:id', userController.user);
// router.put('/upDateUser',userController.upDateUser);

module.exports = router;