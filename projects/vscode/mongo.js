const express = require('express')

var app = express()

var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser : true})

mongoose.connection.once('open', ()=>{
  console.log('conencted to DB');
}).on('error', (err)=>{
  console.log(err);
})