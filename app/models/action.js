const mongoose = require('mongoose');

const actionSchema = mongoose.Schema(
    {
        comment: String,
        iteration: String,
        createTime: Date

    },
    {
        collection: 'action'
    }
);

let Action = mongoose.model('Action', actionSchema);

exports = module.exports = Action;