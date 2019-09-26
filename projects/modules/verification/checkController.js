const mongoose = require('mongoose');

module.exports = (app, checkDb) => {

    app.get('/getProfile/', (req, res) => {
        // console.log(req.params)
        console.log(req.query);
        var profileId = req.query.profileId
        checkDb.find().then((data, err) => {
            if (data != null) {
                res.send(data)
            } else {
                res.send('null')
            }
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                code: 'failure'
            })
        })
    });

    app.get('/approve/:id', (req, res) => {
        console.log(req.body);
        checkDb.findOneAndUpdate({ profileId: req.params.id }, { profileStatus: true })
            .then((data, err) => {
                if (data === null) {
                    console.log(err);
                    res.status(400).json({
                        code: 'failure'
                    })
                } else {
                    res.status(200).json({
                        code: 'success',
                    });
                }
            }).catch(err => {
                res.status(400).json({
                    code: 'failure'
                })
            })
    })

    app.get('/disapprove/:id', (req, res) => {
        console.log(req.body);
        checkDb.findOneAndUpdate({ profileId: req.params.id }, { profileStatus: false })
            .then((data, err) => {
                if (data === null) {
                    console.log(err);
                    res.status(400).json({
                        code: 'failure'
                    })
                } else {
                    res.status(200).json({
                        code: 'success',
                    });
                }
            }).catch(err => {
                res.status(400).json({
                    code: 'failure'
                })
            })
    })

    app.post('/new', (req, res) => {
        console.log(req.params);
        var verification = new checkDb();
        verification.profileId = req.body.profileId;
        verification.profileImage = req.body.profileImage;
        verification.profileStatus = req.body.profileStatus;
        verification.save().then((data) => {
            res.status(200).json({
                code: 'success',
                data: data
            });
        }).catch(err => {
            res.status(400).json({
                code: 'failure'
            })
        })
    })
}