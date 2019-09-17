var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 5050;

app.use(bodyParser.urlencoded({extended : true}));
var db = 'mongodb+srv://devi:<password>@cluster0-i8xqe.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(db, {useNewUrlParser : true});

let mydb = mongoose.connection;
mydb.once('open', (data)=>{
    console.log('connected');
})

mydb.on('error',console.error.bind(console, 'Error with Mongo connection'));
