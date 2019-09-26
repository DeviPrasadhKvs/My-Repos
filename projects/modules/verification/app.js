const express = require('express')
const app = express();
const initDB = require('./db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var checkController = require('./checkController')
var checkDb = require('./models/verificationModel')
checkController(app, checkDb);

app.get('/', (req, res) => {
    res.send('Server Connected')
})

initDB(() => {
    app.listen(4050, (err, res) => {
        console.log('Connected');
    })
});