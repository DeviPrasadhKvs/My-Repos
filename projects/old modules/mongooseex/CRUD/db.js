const MongoClient = require('mongodb');
const ObjectId = require('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url = 'mongodb+srv://devi:qwerty12345@cluster0-i8xqe.gcp.mongodb.net/users?retryWrites=true';
const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null
};

const connect = (cb) => {
    if(state.db) {
        cb();
    }
    else {
        MongoClient.connect(url,mongoOptions,(err,client)=>{
            if(err){
                cb(err);
            }
            else{
                state.db = client(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

const getDB = () => {
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};