var mongoose = require('mongoose') 
var schema = mongoose.Schema

var login = new Schema({

    id : String,
    name : String,
    email : String,
    password : String

});

module.exports = mongoose.model('logins', login);