const multer = require ('multer')
const path = require ('path')
const fs = require ('fs');
const { send } = require('express/lib/response');
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const mainController = {
    home: (req, res) => {
     res.render("home");
    },
    login: (req, res) => {
        return res.render("login");
    },
    
    cardPayment: (req, res) => {
        return res.render("cardPayment");    

    },
    carrito: (req,res) =>{
        return res.render('carrito')
    },
    producto: (req,res) =>{
    return res.render('producto')
}
}

module.exports = mainController;