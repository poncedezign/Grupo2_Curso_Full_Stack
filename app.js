const express = require('express');
const app = express();
const path = require('path')

let rutasGenerales = require('./routes/main');
app.use('/', rutasGenerales);

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

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