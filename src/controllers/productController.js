const path = require ('path')
const fs = require ('fs')
const productFilePath =path.join (__dirname, '../data/productDataBase.json');
const productArray = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

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
    productArray.forEach((item, i) => {
        if (id == item.id) {
            console.log("Hola Perro")
            res.render("product", {product : item});
        }
    })
    
},

editProducts: (req, res) => {
    let id = req.params.id;
    let prod = productArray.forEach((item) => {
        if (item.id == id) {
            res.render("editProducts", {product : item});
        }
    });
},
createProducts: (req, res) => {
    
    res.render("createProducts");
},
deleteProducts: (req, res) => {
    let id = req.params.id;
    res.render("deleteProducts");

},
postProducts: (req, res) => {
    productProto.id = productArray[productArray.length-1].id + 1;
    productProto.name = req.body.name;
    productProto.description = req.body.description;
    productProto.category = req.body.category;
    productProto.color = req.body.color;
    productProto.image = req.file.filename;
    productProto.price = parseInt(req.body.price);

    productArray.push(productProto)

    fs.writeFileSync(productFilePath, JSON.stringify(productArray), 'utf-8')
    res.redirect("/");
},
putProducts: (req, res) => {
    let id = parseInt(req.body.id);
    console.log(req.body)
    console.log("Hola mundo" + id)
    console.log(typeof(id) +"  "+ typeof(productArray[0].id))
    let index = 0;
    productArray.forEach((item, i) => {
        if (id == item.id) {
            console.log("Hola Perro")
            index = i;
        }
    })
    console.log(index)
    productArray[index].name = req.body.name;
    productArray[index].description = req.body.description;
    productArray[index].category = req.body.category;
    productArray[index].color = req.body.color;
    productArray[index].price = parseInt(req.body.price);
    fs.writeFileSync(productFilePath, JSON.stringify(productArray), 'utf-8')
    res.redirect("/");
},
products: (req, res) => {
    res.render("products",{listaDeProducto: productArray });
}
}


module.exports = productController;