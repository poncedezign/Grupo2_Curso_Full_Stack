const express = require('express');
const app = express();
const path = require('path')

let main = require('./routes/main.js');

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', main);

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