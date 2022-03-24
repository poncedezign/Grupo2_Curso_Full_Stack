const multer = require ('multer')
const path = require ('path')
const fs = require ('fs');
const { send } = require('express/lib/response');
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const productDataBase = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
const productController = {

product: (req, res) => {
    let id = req.params.id;
    const detailproduct = productDataBase.find (p => p.id == id)
    res.render("products", {products: detailproduct});

},
editProducts: (req, res) => {
    let id = req.params.id
    const product = productDataBase.find (p => p.id == id)
    res.render ("products", {listaDeProducto: productDataBase})

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
    const idx = productDataBase.findIndex(p => p.id == id)
    productDataBase.splice(idx, 1)
    fs.writeFileSync(productFilePath, JSON.stringify(productDataBase, null, ' '))
    res.render("products", {listaDeProducto: productDataBase})

},
store: (req, res) => {
const newProduct = {
    id: products [products.length -1].id +1,
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