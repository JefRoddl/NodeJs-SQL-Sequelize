let sequelize = require('./../model/index')
let Fornecedor = sequelize.import('./../model/fornecedor')

module.exports = (req, res) => {
    Fornecedor
        .findAll()
        .then((fornecedores) => {
            console.log(fornecedores);
        })
        .catch((err) => {
            console.log(err);
        });
};