const express = require("express");
const app = express();
const hanlebars = require("express-handlebars");

// Config
// Template engine
    app.engine("handlebars", handlebars({defaultLayout: "main"}));
    app.set("view engine", "handlebars");


app.listen(8081, function(){
    console.log("Servidor rodando");
});
