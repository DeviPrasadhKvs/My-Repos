const express = require('express')
const app = express();
let cors = require('cors')


// const initDB = require('./db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));


var chatController = require('./chatController')

// app.get('/', function(req, res) {

    chatController(app)
// })

// initDB(() => {
app.listen(4000, (err, res) => {
        console.log('Connected');
    })
    // });