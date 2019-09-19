const express = require('express')
const app = express()
const data = require('./flow.json')
const mapper = require('./textMapper.json')
const messages = require('./messages.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.send("It works!");
});

app.get("/text/:data", function(req, res) {
    var value = req.params.data
    if (value.includes('*')) {
        splitData = value.split('_')
        var sampleData = {}
        splitData.forEach(func => {
                var val = func.split('*')
                sampleData[val[0]] = val[1]
            })
            // flow = re.split('_')
        res.send(sampleData);
    } else {
        if (value.includes('&')) {
            splitData = data[value.replace('&', '')]
            res.send(splitData)

        } else {
            var state = mapper[value].split('@')
            if (state.length > 1) {
                res.send({
                    [state[0]]: state[1].split(',')
                });
            } else {
                res.send({
                    [value]: mapper[value]
                });
            }
        }
    }

});

app.get("/newFlow/:data", function(req, res) {
    var value = req.params.data
    if (value.includes('_')) {
        splitData = value.split('_')
        var sampleData = {}
        splitData.forEach(func => {
            var val = func.split('*')
            sampleData[val[0]] = val[1]
        })
        res.send(sampleData)
    } else {
        var splitData = {
            data: messages[value],
            options: customFilter(data, value.trim())
        }
        res.send(splitData)
    }
});

app.listen(4000, (err, res) => {
    console.log('Connection Established');
})