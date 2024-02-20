let sequelize = require('../model/index')
let Fornecedor = sequelize.import('../model/fornecedor')

module.exports = (req, res) => {
    Fornecedor
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("DELETE OK"))
        .catch((err) => {
            console.log(err)
        })
}