/* 
const { body } = require("express-validator")
module.exports = [
    body('name').notEmpty().withMessage('Debes completar el nombre'),
    body('lastName').notEmpty().withMessage('Debes completar el apellido'),
    body('pasword').isLength({min: 6}).withMessage('Debes completar el apellido'),
    body('email').notEmpty.withMessage('Correo electrónico').bail().isEmail().withMessage('El correo tiene que ser valido'),
    body('country').notEmpty().withMessage('Elige un país'),
    body('user').custom((value, {req})=>{
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
    })
] */