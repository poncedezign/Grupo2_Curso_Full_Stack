const mainController = {
    home: (req, res) => {
        return res.render("home");
    },
    login: (req, res) => {
        return res.render("login");
    },
    
    cardPayment: (req, res) => {
        return res.render("cardPayment");    

    },
    carrito: (req,res) =>{
        return res.render('carrito')
    },
    producto: (req,res) =>{
    return res.render('producto')
}
};

module.exports = mainController;