const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('fornecedor', {
        fornecedor:DataTypes.STRING,
        cnpj: DataTypes.STRING,
        telefone:DataTypes.STRING,
        email: DataTypes.STRING,
        contato:DataTypes.STRING
    }, {
        timesstamps: false
    })
    
}