const mongoose = require('mongoose');

module.exports = (app, checkDb) => {

    app.get('/get', (req, res) => {
        console.log(req.params);
    })

}