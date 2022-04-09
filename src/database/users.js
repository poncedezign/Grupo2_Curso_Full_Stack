const fs = require ('fs');
const productFilePath =path.join (__dirname, '../data/userDataBase.json');

module.exports={
    all: function(){
        const productDataBase = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
        //obtener todos los usuarios de la base de datos
        //leer el archivo json
        //parsear el archivo json
        return productDataBase
    }
}
