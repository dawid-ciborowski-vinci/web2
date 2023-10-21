var express = require("express");
var logger = require("morgan");

var pizzaRouter = require("./routes/pizzas");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pizzas", pizzaRouter);

module.exports = app;
