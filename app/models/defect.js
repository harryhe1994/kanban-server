const mongoose = require('mongoose');

const defectSchema = mongoose.Schema(
    {
        number: String,
        iteration: String,
        createTime: Date,
        autoId: String,
        deleteIndicator: Number,
        total: String
    },
    {
        collection: 'defect'
    }
);

let Defect = mongoose.model('Defect', defectSchema);

exports = module.exports = Defect;