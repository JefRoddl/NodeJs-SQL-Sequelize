const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('client', {
        cliente:DataTypes.STRING,
        cnpj: DataTypes.STRING,
        telefone:DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        timesstamps: false
    })
}