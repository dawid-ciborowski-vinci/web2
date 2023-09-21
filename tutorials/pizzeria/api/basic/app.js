var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pizzaRouter = require('./routes/pizzas');

var app = express();

app.use(logger('dev')); // HTTP request logger
app.use(express.json()); // Parse requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parse requests with URL-encoded payload
app.use(cookieParser()); // Parse cookie header (req.cookies)
//app.use(express.static(path.join(__dirname, 'public'))); // Serve static assets

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pizzas', pizzaRouter);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});  

module.exports = app;
