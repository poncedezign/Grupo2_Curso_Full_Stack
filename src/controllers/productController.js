
const path = require ('path')
const fs = require ('fs')
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const productController = {

product: (req, res) => {
    let id = req.params.id;
    //let descripcion = req.params.descripcion;
    res.render("product", {id});

},
editProducts: (req, res) => {
    let id = req.params.id;
    res.render("editProducts", {id});
},
createProducts: (req, res) => {
    res.render("createProducts");
},
deleteProducts: (req, res) => {
    let id = req.params.id;
    res.render("deleteProducts");

},
postProducts: (req, res) => {
    res.render("home");
},
putProducts: (req, res) => {
    res.render("home");
},
products: (req, res) => {
    res.render("products",{listaDeProducto: product });
}
}

module.exports = productController;