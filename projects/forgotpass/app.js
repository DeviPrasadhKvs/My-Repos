var ejs = require('ejs');
var express = require('express');
var BodyParser = require("body-parser");


var mongoose = require('mongoose')


var app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser : true})

app.get('/hey', function(req, res) {

loginController(app);

res.render('login');
})
app.listen('5000', function(req, res){

})
