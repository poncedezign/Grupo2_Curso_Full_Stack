const req = require("express/lib/request");
const res = require("express/lib/response");

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
    res.render("products");
}
}

module.exports = productController;