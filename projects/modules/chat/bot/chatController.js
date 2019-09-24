let flow = require('./flow.json')
let messageLinker = require('./messageFlow.json')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.status(200).send('Server is up and running')
    });

    app.get('/chat/:data', (req, res) => {
        console.log(req.params);

        var value = req.params.data
        if (value.includes('*')) {
            var data = value.split('*')
            var splitData = flow[data[0]].replace('{{data}}', data[1])
            res.send({ status: 2, data: splitData })
                // res.send()
        } else {
            if (value === 'init') {
                var splitData = []
                flow['A00'].forEach(element => {
                    splitData.push(messageLinker[element])
                });
                res.send({ status: 1, data: splitData })
            } else {
                var splitData = []
                flow[value].forEach(element => {
                    splitData.push(messageLinker[element])
                });
                res.send({ status: 1, data: splitData })
            }
        }
    })
}