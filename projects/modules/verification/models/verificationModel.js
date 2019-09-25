const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkDbModel = new Schema({

    profileID: {
        type: String
    },
    profilePhoto: {
        type: String
    },
    email: {
        type: String
    },
    contactNumber: {
        type: Number
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    address: {
        type: String
    },
    website: {
        type: String
    }
});

module.exports = mongoose.model('checkDb', checkDbModel);