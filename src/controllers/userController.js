const multer = require ('multer')
const path = require ('path')
const fs = require ('fs');
const {validationResult} = require('express-validator')
const { send } = require('express/lib/response');
const userFilePath =path.join (__dirname, '../data/userDataBase.json');
const userDataBase = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

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
        console.log('porque')
        res.render('createUsers');
    },

    createUser: (req, res) => {
        const errors = validationResult(req);
        console.log("AYUDA")
        if(!errors.isEmpty()){
            const alert = errors.array();
             res.render("../views/createUsers.ejs", { alert });
        }else{res.render("../views/createUsers.ejs");
    }
    
    },
   user: (req, res) => {
    let id = req.params.id;
    const detailuser = userDataBase.find (p => p.id == id)
    res.render("user", {user: detailuser});
   
},

   editUsers: (req, res) => {
    let id = req.params.id
    const item = userDataBase.find (p => p.id == id)
    console.log (validationResult(req))
    res.render ("editUsers", {user: item})
   
  },

    deleteUsers: (req, res) => {
        let id = req.params.id;
        const idx = userDataBase.findIndex(p => p.id == id)
        userDataBase.splice(idx, 1)
        fs.writeFileSync(productFilePath, JSON.stringify(userDataBase, 'utf-8'))
        res.render("users", {listaDeUsuarios: userDataBase})
    
    },
    
    postUser: (req, res) => {
        userProto.id = userDataBase[userDataBase.length-1].id + 1;
        userProto.name = req.body.name;
        userProto.email = req.body.email;
        userProto.password = req.body.password;
        userProto.category = req.body.category;
        userProto.image = req.file.filename;
    
        userDataBase.push(userProto)

        fs.writeFileSync(userFilePath, JSON.stringify(userDataBase), 'utf-8')
        res.redirect("/");
    },
    putUsers: (req, res) => {
        let id = parseInt(req.body.id);
        console.log(req.body)
        console.log("Hola mundo" + id)
        let index = 0;
        userDataBase.forEach((item, i) => {
            if (id == item.id) {
                console.log("Hola kary")
                index = i;
            }
        })
        console.log(index)
        userDataBase[index].name = req.body.name;
        userDataBase[index].email = req.body.email;
        userDataBase[index].password = req.body.password;
        userDataBase[index].category = req.body.category;
        fs.writeFileSync(userFilePath, JSON.stringify(userDataBase), 'utf-8')
        res.redirect("/");
    },
    users: (req, res) => {
        res.render("users", {listaDeUsuario: userDataBase });
    }
    }
    
    
    module.exports = userController;