let sequelize = require('./../model/index')
let Cliente = sequelize.import('./../model/client')

module.exports = (req, res) => {
    Cliente
        .findByPk(req.params.id)
        .then((client) => {
            return res.render('client_edit', {
                client: client
            })
        })
}