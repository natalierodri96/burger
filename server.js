//variables
var express = require("express");
var bodyParser =("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;
//app 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.engine("handlebars", exphbs ({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//routes
var routes = require("./controllers/burger_controllers.js");
app.use(routes);
app.listen(PORT, function() {

    console.log("server listening on: https://localhost:" + PORT)
})

