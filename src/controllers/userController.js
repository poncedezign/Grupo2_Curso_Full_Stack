const path = require ('path')
const fs = require ('fs');
const { send } = require('express/lib/response');
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const multer = require ('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '../../public/data/productDataBase.json'))


const userController = {
    register: (req, res) => {
        return res.render("register");
}},

filename: function (req, file, cb){
 cb(null, file.filename + '-' + Date.now())}


module.exports = userController;