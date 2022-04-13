const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override')
var bodyParser = require('body-parser')

let main = require('./src/routes/main.js');
let product = require('./src/routes/productRoutes.js');
let user = require('./src/routes/userRoutes.js');
const { register } = require('./src/controllers/userController.js');

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));

app.use('/', main);
app.use('/users', user);
app.use('/products', product);
// app.use((req, res, next) => {
//     res.status(404).render('./error')
// })


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

/*app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/cardPayment', (req,res)=>{
    res.sendFile(__dirname + '/views/cardPayment.html');
}); */