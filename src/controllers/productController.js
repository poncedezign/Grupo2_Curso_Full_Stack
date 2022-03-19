const path = require ('path')
const fs = require ('fs')
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const product = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))
let productProto = {
     id: 16,
     name: "Sony Srs-xb12 Parlante Bluetooth Portátil",
     price: 4699,
     discount: 5,
     color: "#000000",
     category: "in-sale",
     description: "Deja que la música dance cobre vida con EXTRA BASS™ Anima el ambiente con EXTRA BASS™1. Un radiador pasivo trabaja con el parlante monoaural para potenciar los tonos bajos y mejorar los graves, a pesar del tamaño compacto. ",
     image: "img-parlante-sony.jpg"
    }
const productController = {

product: (req, res) => {
    let id = req.params.id;
    //let descripcion = req.params.descripcion;
    res.render("product", {id});

},
editProducts: (req, res) => {
    let id = req.params.id;
    let prod = product.forEach((item) => {
        if (item.id == id) {
            res.render("editProducts", {product : item});
        }
    });

    
},
createProducts: (req, res) => {
    let loquesea = req.body;
    res.render("products", {loquesea : loquesea});
},
deleteProducts: (req, res) => {
    let id = req.params.id;
    res.render("deleteProducts");

},
postProducts: (req, res) => {
    productProto.id = product[product.length].id + 1;
    productProto.name = req.body.name;
    productProto.description = req.body.description;
    productProto.category = req.body.category;
    productProto.color = req.body.color;
    productProto.image = req.file.filename;
    productProto.price = parseInt(req.body.price);

    product.push(productProto)

    fs.writeFileSync(productFilePath, JSON.stringify(product), 'utf-8')
    console.log(productProto);
    console.log(req.file);
    res.redirect("/");
},
putProducts: (req, res) => {
    let id = req.body.id;
    console.log("Hola mundo")
    console.log(req.body)
    /* let prod = product[id];
    product[id].name = req.body.name;
    product[id].description = req.body.description;
    product[id].color = req.body.color;
    product[id].image = req.file.filename;
    product[id].price = parseInt(req.body.price);
    fs.writeFileSync(productFilePath, JSON.stringify(product), 'utf-8')
    res.redirect("/"); */
},
products: (req, res) => {
    res.render("products",{listaDeProducto: product });
}
}


module.exports = productController;