const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', 'Janaynn@123456', {
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Teteu",
    sobrenome: "nascimento",
    idade: "44",
    email: "teteu@gmail.com"
})

//Usuario.sync({force: true});