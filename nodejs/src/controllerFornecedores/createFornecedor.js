let sequelize = require('./../model/index')
let Fornecedor = sequelize.import('./../model/fornecedor')

module.exports = (req, res) => {
    Fornecedor
        .create(req.body)
        .then(() => console.log('INSERT OK'))
}