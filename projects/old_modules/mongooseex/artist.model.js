var mongoose = require('mongoose');
var schema = mongoose.schema;

var artistSchema = new schema({
    buyer : string,
    owner : string,

    size : Number,
    price : Number,
    requestType : string,
    creativeFreedom : Number ,
    bookingFor : Number,
    bookingPeriod : string,
    rushRequests : string,
    referenceOtherArt : string,
    visualReferences : Number,
    draftReviews : string,
     // other/s
    finalInvoiceVariation : Number,
    revisionsOfWork : Number,
    chargersForEdit : Number,
    cancelationCharges48hr : Number,
    billing : Number,
    cancelationCharges : Number,

    string : freeText
});

module.exports = mongoose.model('artist',artistSchema);





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
