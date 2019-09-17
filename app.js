const express = require('express')
const app = express()
const initDB = require('./db')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

var paymentController = require('./payment-controller/payment-controller')
var paymentM = require('./models/payments-schema')

initDB(()=>{
    app.listen(4000, (err, res)=>{
        console.log('server started');
    })
})
