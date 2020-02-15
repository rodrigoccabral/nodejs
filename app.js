const express = require("express");
const app = express();
const hanlebars = require("express-handlebars");
const Sequelize = require("sequelize");


// Config
// Template engine
    app.engine("handlebars", handlebars({defaultLayout: "main"}));
    app.set("view engine", "handlebars");
// Conexão com o banco de dados
const sequelize = new Sequelize('test', 'root', 'Janaynn@123456', {
    host: "localhost",
    dialect: 'mysql'
});

app.listen(8081, function(){
    console.log("Servidor rodando");
});
