const Sequelize = require("sequelize");

// Conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', 'Janaynn@123456', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};