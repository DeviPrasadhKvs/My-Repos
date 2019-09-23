const express = require('express')
const app = express();
const ejs = require('ejs')
let cors = require('cors')


// const initDB = require('./db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


var chatController = require('./chatController')

app.get('/', function(req, res) {

    chatController(app)
    res.render('index');
})

// initDB(() => {
app.listen(4000, (err, res) => {
        console.log('Connected');
    })
    // });