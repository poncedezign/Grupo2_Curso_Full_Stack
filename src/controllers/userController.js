const { validationResult } = require("express-validator")
const path = require ('path')
const fs = require ('fs');
const userFilePath =path.join (__dirname, '../data/userDataBase.json');
const userDataBase = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

let userProto = {
   
            "id": 1,
            "name": "Karina",
            "lastName": "Ponce",
            "email": "karinaponce.pyt@gmail.com",
            "password": "1234",
            "category": "Premium",
            "image" : "avatar"

    }
const userController = {
    showCreateUser:(req, res) => {
        res.render('../views/createUsers.ejs');
    },

    createUser: (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            const alert = errors.array();
            return res.render("createUsers", { alert });
        }
        
        return res.render("createUsers");
    },

user: (req, res) => {
    let id = req.params.id;
    const detailuser = userDataBase.find (p => p.id == id)
    res.render("createUser");

    //let descripcion = req.params.descripcion;
  /*     productDataBase.forEach((item, i) => {
        if (id == item.id) {
            console.log("Hola Perro")
            res.render("product", {product : item});
        }
    }) */
    
},

   editUsers: (req, res) => {
    let id = req.params.id
    const item = userDataBase.find (p => p.id == id)
    console.log (validationResult(req))
    res.render ("editUsers", {user: item})

    /*     let id = req.params.id;
    let prod     productDataBase.forEach((item) => {
        if (item.id == id) {
            res.render("editProducts", {product : item});
        }
    }); */

},

deleteUsers: (req, res) => {
    let id = req.params.id;
    const idx = userDataBase.findIndex(p => p.id == id)
    userDataBase.splice(idx, 1)
    fs.writeFileSync(userFilePath, JSON.stringify(usarDataBase, 'utf-8'))


},
postUsers: (req, res) => {
    const resultValidation = validationResult(req)
    
    if (resultValidation.errors.length > 0){
    userProto.id = userDataBase[userDataBase.length-1].id + 1;
    userProto.name = req.body.name;
    userProto.lastName = req.body.lastName;
    userProto.category = req.body.category;
    userProto.email = req.body.email;
    userProto.image = req.file.filename;
    userProto.password = req.body.password;
    userDataBase.push(userProto)
    fs.writeFileSync(userFilePath, JSON.stringify(userDataBase), 'utf-8')
    res.redirect ("register")
    }else{
        res.render("createUsers", {
            errors: resultValidation.mapped(),
            oldData: req.body}
            )};
    return res.send('validaciones correctas')
},
putUsers: (req, res) => {
    let id = parseInt(req.body.id);
    console.log(req.body)
    console.log("Entro al método put users" + id)
    let index = 0;
    userDataBase.forEach((item, i) => {
        if (id == item.id) {
            console.log("No sé que estoy haciendo")
            index = i;
        }
    })
    console.log(index)
    userDataBase[index].name = req.body.name;
    userDataBase[index].lastName = req.body.lastName;
    userDataBase[index].category = req.body.category;
    userDataBase[index].email = req.body.email;
    userDataBase[index].password = req.body.password;
    fs.writeFileSync(userFilePath, JSON.stringify(userDataBase), 'utf-8')
    res.redirect("/");
},
products: (req, res) => {
    res.render("users", {listaDeUsuarios: userDataBase });
},

}


module.exports = userController;