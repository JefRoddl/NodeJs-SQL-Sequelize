let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req,res) => {
    let msg = 0
    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clients,
                msg: req.query.msg
            })
        })
        .catch((err) => {
            console.log(err)
        })
}