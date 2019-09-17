var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var register = require('./register.model');
var logins = require('./login.model');
var port = 8080;

app.use(bodyParser.urlencoded({extended: true}))
var db = 'mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/users?retryWrites=true';

mongoose.connect(db, {useNewUrlParser : true});

let mydb = mongoose.connection;
mydb.once('open', (data)=>{
    console.log('connected');
    
})

mydb.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
mydb.on('open', ()=>{
  console.log('connected to DB');
}).on('error', (err)=>{
  console.log(err);
})*/

app.get('/',function(req, res){
    res.render('register')
});

app.post('/insert',function(req, res){
    var regdata = new register()
    regdata.userid = req.body.id
    regdata.name = req.body.name;
    regdata.email = req.body.email;
    regdata.password= req.body.password;
    regdata.save().then(function(data, err){
        if(err){
            console.log(err)
        }
        else{
         console.log(data)
         res.send(data);
        }
    })
    res.render('login')
});

app.get('/login',function(req, res){
    res.render('login')
});

app.post('/login',function(req, res){
    
    var email = req.body.email;
    var password= req.body.password;
    console.log(email);
    console.log(password);
    logins.findOne({email : email, password : password}).then(function(data,err) {
            if(err){
            console.log(err)
            console.log('Login failure as the email already exists')
        }
        else{
            console.log('Login success');
        }
    });
        //logindata.then(function(data, err){
        // if(err){
        //     console.log(err)
        // }
        // else{
        //  console.log(data)
        //  res.send(data);
        // }
    //})
    res.render('login')
});

/* For Books Model
app.get('/books', function(req, res){
    //console.log('Retreiving the data of available books')
    register.find().then((result)=>{
        console.log(result);
        
    })
});
*/


// app.get('/post', (req, res)=>{
//     logindata = new login()
//     logindata.userid = "test"
//     logindata.name = "estname"
//     logindata.email = "email"
//     logindata.password = "pass"

//     logindata.save().then((usr,err)=>{
//         console.log(usr);
        
//     })

// }) 
   
app.listen(port, function(){
    console.log('Port responded:'+ port)
})
