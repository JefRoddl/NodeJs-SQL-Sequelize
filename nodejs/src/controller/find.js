let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req,res) => {
    let msg = 0
    if(req.query.msg == 1) {
        msg = 1;
    }
    Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clients,
                msg: msg
            })
        })
        .catch((err) => {
            console.log(err)
        })
}