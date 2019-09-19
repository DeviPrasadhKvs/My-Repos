const express = require('express');
const app = express();
app.express('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fet = require('./artist.model')
const port = 5005;

app.listen(port);
app.use(express.json({extended : true}));
app.use(express.urlencoded({extended : true}));

var db = 'mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(db, {useNewUrlParser})