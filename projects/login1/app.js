var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get(express.static(__dirname + '/public'));
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var register = require('./registerPage.model');
var login = require('./loginPage.model');
var port = 5050;

app.use(bodyParser.urlencoded({extended : true}));

var db = 'mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/users?retryWrites=true';
mongoose.connect(dbase, {useNewUrlParser : true};

var mydb