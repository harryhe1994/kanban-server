const mongoose = require('mongoose');
const defectModel = mongoose.model('Defect');
const UUID = require('node-uuid');

module.exports = {
    updateDefect,
    findDefectByIteration,
    addDefect,
    deleteDefect,
    findAll,
    getDefectCount,
    getDefectByPage
};

function updateDefect(defect, callback) {
    defectModel.updateMany({_id: defect._id}, defect, function (err, docs) {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function findDefectByIteration(iteration, callback) {
    defectModel.find({iteration: iteration, deleteIndicator: {$ne: 1}}, (err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function getDefectByPage(page, callback) {
    let p = page * 10;
    let query = defectModel.find({deleteIndicator: {$ne: 1}});
    query.sort({'createTime': 1});
    query.skip(p);
    query.limit(10);
    query.exec(function (err, docs) {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
    // defectModel.find().sort({'iteration': 1}).skip(p).limit(10).exec((err, docs) => {
    //     if(err){
    //         return callback(err, null);
    //     } else {
    //         return callback(null, docs);
    //     }
    // });
}


function findAll(callback) {
    defectModel.find({deleteIndicator: {$ne: 1}}).sort({'createTime': 1}).exec((err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function getDefectCount(callback) {
    defectModel.find({deleteIndicator: {$ne: 1}}).countDocuments((err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function addDefect(defect, callback) {
    defect.autoId = UUID.v1();
    defect.deleteIndicator = 0;
    defectModel.find({iteration: defect.iteration}).sort({'createTime': 1}).limit(1).exec((err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            if (docs.length > 0) {
                defect.createTime = docs[0].createTime;
            }
            insertDefect(defect, callback);
        }
    });
}

function insertDefect(defect, callback) {
    defectModel.insertMany(defect, function (err, docs) {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function deleteDefect(id, callback) {
    defectModel.find({_id: id}, (err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            let defect = docs[0];
            defect.deleteIndicator = 1;
            updateDefect(defect, callback);
        }
    });
}