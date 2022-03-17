
const path = require ('path')
const fs = require ('fs');
const { send } = require('express/lib/response');
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const multer = require ('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '../../public/data/productDataBase.json'))
    }
})
const productController = {

product: (req, res) => {
    let id = req.params.id;
    const products = products.find (p =s> p.id == id)
    res.render("products", {products});

},
editProducts: (req, res) => {
    let id = req.params.id
    const product = products.find (p => p.id == id)
    res.render ('product-edit-form', {product})

},
update: (req, res) => {
    const id = req.params.id
    const idx = products.find(p => p.od == id)
    editProducts [idx] = {
        id,
        ...req.body,
        image: ""
    }
},
createProducts: (req, res) => {
    res.render("createProducts");
},
deleteProducts: (req, res) => {
    let id = req.params.id;
    const idx = products.finIndex(p=> p.id == id)
    products.splice(idx, 1)

},
store: (req, res) => {
const newProduct = {
    id: this.products [this.products.length -1].id +1,
    ...req.body,
    image: ""
}
products.push(newProduct)
res.redirect("/products")
fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''))
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