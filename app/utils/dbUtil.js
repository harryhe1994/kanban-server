const mongoose = require('mongoose');
// const config = require('../../config/config_dev_db');
const config = require('../../config/config_pro_db');

const pathInfo = "mongodb://" + config.MongoDB.context + ":" + config.MongoDB.port + "/" + config.MongoDB.actionDB;

module.exports = {
  connectMongoDB: connectMongoDB,
  createModel: createModel
};

const options = {
    // useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

function connectMongoDB() {
    mongoose.set('debug', true);
    mongoose.connect(pathInfo, options)
        .then(function (db) {
            console.log('DB connected');
        })
        .catch(function (err) {
            console.log('DB connect failed');
            console.log(err.stack);
        });
}

function createModel() {
    require('../models/card');
    require('../models/action');
    require('../models/defect');
}