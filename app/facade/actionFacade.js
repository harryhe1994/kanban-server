const mongoose = require('mongoose');
const actionModel = mongoose.model('Action');

module.exports = {
    updateAction,
    findActionByTime,
    addAction,
    deleteAction,
    findActionByIterationName
};

function updateAction(actions, callback) {
    let response = {ok: 1};
    let updatedActionName = ['Backlog', 'Common Action', 'Support Tool'];
    for (let i = 0; i < actions.length; i++) {
        if (updatedActionName.indexOf(actions[i].iteration) > -1) {
            actions[i].createTime = new Date();
        }
        actionModel.updateMany({_id: actions[i]._id}, actions[i], function (err, docs) {
            if (err) {
                response.ok = 0;
                return callback(err, response);
            }
        });
    }
    return callback(null, response);
}

function findActionByTime(callback) {
    let curDate = new Date();
    let preDate = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 63);
    let query = actionModel.find({createTime: {$gte: preDate}});
    query.sort({'createTime': -1});
    query.exec(function (err, docs) {
        if (err) {
            return callback(err, null);
        } else {
            let sortAction = [];
            let backlog = null, commonAction = null;
            docs.forEach(function (doc) {
                if (doc.iteration !== 'Backlog' && doc.iteration !== 'Common Action') {
                    sortAction.push(doc);
                } else if (doc.iteration === 'Backlog') {
                    backlog = doc;
                } else if (doc.iteration === 'Common Action') {
                    commonAction = doc;
                }
            });
            // sortAction.reverse();
            if (!!backlog) {
                sortAction.push(backlog);
            }
            if (!!commonAction) {
                sortAction.push(commonAction);
            }
            return callback(null, sortAction);
        }
    });
}

function addAction(actions, callback) {
    actionModel.insertMany(actions, function (err, docs) {
        if (err) {
            console.log(err);
            return callback(err, null);
        } else {
            console.log(docs);
            return callback(null, docs);
        }
    });
}

function deleteAction(actionId, callback) {
    actionModel.deleteMany({_id: actionId}, (err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs)
        }
    });
}

function findActionByIterationName(iterationName, callback) {
    actionModel.find({iteration: iterationName}, (err, docs) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}