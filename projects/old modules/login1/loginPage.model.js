var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    userid : String,
    name : String,
    email : String,
    password : String
});

module.exports = mongoose.model('logins',loginSchema);