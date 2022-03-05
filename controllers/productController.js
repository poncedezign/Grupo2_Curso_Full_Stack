const productController = {

articulo: (req, res) => {
    let id = request.params.id;
    let descripcion = request.params.descripcion;
    response.render("articulo", {id, descripcion});
}}

module.exports = productController;