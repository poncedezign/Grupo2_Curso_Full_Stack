const mainController = {
    home: (request, response) => {
        response.sendFile("home", {titulo: 'Esta es la pestaña de index.'});
    },
    login: (request, response) => {
        response.render("login", {descripcion: 'Esta es una propiedad de descripción.'});
    },
    register: (request, response) => {
        console.log("Ruta principal");

    },
    cardPayment: (request, response) => {
        console.log("Pago con tarjeta");    
    },
    articulo: (request, response) => {
        let id = request.params.id;
        let descripcion = request.params.descripcion;
        response.render("articulo", {id, descripcion});
    }
};

module.exports = mainController;