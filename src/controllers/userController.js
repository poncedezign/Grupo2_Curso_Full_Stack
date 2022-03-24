const path = require ('path')
const fs = require ('fs');
const { send } = require('express/lib/response');
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const multer = require ('multer')
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })


const userController = {
    register: (req, res) => {
        return res.render("register");
}}


module.exports = userController;