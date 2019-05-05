var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var database = require("./modules/database");
var usuariosRouter = require('./routers/usuarios-router');
var principalRouter = require('./routers/principal-router');
var app = express();

app.use(express.static("public"));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/usuarios",usuariosRouter);
app.use("/principal",principalRouter);

app.listen(3333,function(){
    console.log("Servidor en linea");
});