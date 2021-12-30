const mainController = {
    home: (req, res) => {
        return res.render("home");
    },
    login: (req, res) => {
        return res.render("login");
    },
    register: (req, res) => {
        return res.render("register");

    },
    cardPayment: (req, res) => {
        return res.render("cardPayment");    
    },
    articulo: (req, res) => {
        let id = request.params.id;
        let descripcion = request.params.descripcion;
        response.render("articulo", {id, descripcion});
    },
    carrito: (req,res) =>{
        return res.render('carrito')
    }
};

module.exports = mainController;