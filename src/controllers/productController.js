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
//cons    productDataBase = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

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
    const detailproduct = productDataBase.find (p => p.id == id)
    res.render("product", {product: detailproduct});

    //let descripcion = req.params.descripcion;
  /*     productDataBase.forEach((item, i) => {
        if (id == item.id) {
            console.log("Hola Perro")
            res.render("product", {product : item});
        }
    }) */
    
},

editProducts: (req, res) => {
    let id = req.params.id
    const item = productDataBase.find (p => p.id == id)
    res.render ("editProducts", {product: item})

    /*     let id = req.params.id;
    let prod     productDataBase.forEach((item) => {
        if (item.id == id) {
            res.render("editProducts", {product : item});
        }
    }); */

},

createProducts: (req, res) => {
    
    res.render("createProducts");
},
deleteProducts: (req, res) => {
    let id = req.params.id;
    const idx = productDataBase.findIndex(p => p.id == id)
    productDataBase.splice(idx, 1)
    fs.writeFileSync(productFilePath, JSON.stringify(productDataBase, 'utf-8'))
    res.render("products", {listaDeProducto: productDataBase})

},

postProducts: (req, res) => {
    productProto.id = productDataBase[productDataBase.length-1].id + 1;
    productProto.name = req.body.name;
    productProto.description = req.body.description;
    productProto.category = req.body.category;
    productProto.color = req.body.color;
    productProto.image = req.file.filename;
    productProto.price = parseInt(req.body.price);

    productDataBase.push(productProto)

    fs.writeFileSync(productFilePath, JSON.stringify(productDataBase), 'utf-8')
    res.redirect("/");
},
putProducts: (req, res) => {
    let id = parseInt(req.body.id);
    console.log(req.body)
    console.log("Hola mundo" + id)
    let index = 0;
    productDataBase.forEach((item, i) => {
        if (id == item.id) {
            console.log("Hola Perro")
            index = i;
        }
    })
    console.log(index)
    productDataBase[index].name = req.body.name;
    productDataBase[index].description = req.body.description;
    productDataBase[index].category = req.body.category;
    productDataBase[index].color = req.body.color;
    productDataBase[index].price = parseInt(req.body.price);
    fs.writeFileSync(productFilePath, JSON.stringify(productDataBase), 'utf-8')
    res.redirect("/");
},
products: (req, res) => {
    res.render("products", {listaDeProducto: productDataBase });
}
}


module.exports = productController;