const fs = require("fs");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var replace = require("replace");
var uniqid = require('uniqid');
const port = 4000;

app.use(express.static(__dirname + '/public'));
app.listen(port);
app.use(express.json({extended : true}));
app.use(express.urlencoded({extended : true}));

const db = 'mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(db, {useNewUrlParser : true});
let mydb = mongoose.connection;
mydb.once('open', (data)=>{
    console.log('connected');
}) 

mydb.on('error',console.error.bind(console, 'Error with Mongo connection'));

app.get('/:t1/:t2/:t3',function(req, res){ 
    function replaceChar(){
        fs.readFile('/projects/demoData/test.sol', 'utf8', function(err, data) { 
            console.log(data);
            var id = uniqid();
            console.log(id);
            fs.mkdir('public/'+req.params.t1+'_'+id, function(){
                var result = data.replace(/t1/g, req.params.t1);
                var result = result.replace(/t2/g, req.params.t2);
                var result = result.replace(/t3/g, req.params.t3);

                fs.writeFile('/projects/public/'+req.params.t1+'_'+id+'/'+'test.sol', result, (err) => {
                if (err) 
                    console.log(err);
                    console.log("Successfully Written to File.");
                });
            });
        });
    }   
    replaceChar();
});

