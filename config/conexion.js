var mysql= require ("mysql");
var con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'bmol'
});

con.connect(
    (err)=>{
    if(!err){
        console.log('Conexion estabkecida');
    }else{
        console.log('Error de conexión');
    }
    }
),
module.exports=con;