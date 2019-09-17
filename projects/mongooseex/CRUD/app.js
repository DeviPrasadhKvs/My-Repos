var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
var db = require('./db');
var collection = "todo";

 