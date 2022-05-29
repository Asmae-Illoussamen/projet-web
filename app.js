var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var categoriesRouter = require('./routes/categories');
var commentairesRouter= require('./routes/commentaires');
var authRouter = require('./routes/auth');
var AuthU=require('./middlewares/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles',articlesRouter);
app.use('/categories',categoriesRouter);
app.use('/commentaires',commentairesRouter);
app.use('/auth',authRouter);
/*
app.use('/', indexRouter);
app.use('/users',AuthU, usersRouter);
app.use('/articles',AuthU,articlesRouter);
app.use('/categories',AuthU,categoriesRouter);
app.use('/commentaires',AuthU,commentairesRouter);
app.use('/auth',authRouter);

*/
module.exports = app;
