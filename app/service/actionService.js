var actionFacade = require('../facade/actionFacade');
var async = require('async');


module.exports = {
    updateAction,
    findActionByTime,
    addAction,
    deleteAction,
    findActionByIterationName
};

function updateAction(req, res, next) {
    let actions = req.body;
    actionFacade.updateAction(actions, (err, result) => {
        if (err) {
            console.log('update error!');
        } else {
            res.json(result);
        }
    });
}

function findActionByTime(req, res, next) {
    actionFacade.findActionByTime(async (err, result) => {
        if (err) {
            console.log('find actions error!');
        } else {
            res.json(result);
        }
    });
    // new Promise(function (resolve, reject) {
    //     actionFacade.findActionByTime(async (err, result) => {
    //         if (err) {
    //             console.log('find actions error!');
    //             reject();
    //         } else {
    //             resolve(result);
    //         }
    //     });
    // }).then(function (data) {
    //     return new Promise((resolve, reject) => {
    //         let flag = true;
    //             for (let i = 0; i < data.length; i++) {
    //                 if ('Backlog' === data[i].iteration) {
    //                     flag = false;
    //                 }
    //             }
    //             if (flag) {
    //                 actionFacade.findActionByIterationName('Backlog', (err, re) => {
    //                     if (err) {
    //                         console.log('findActionByIterationName error!');
    //                     } else {
    //                         if (re.length > 0) {
    //                             data.push(re[0]);
    //                         }
    //                     }
    //                     resolve(data);
    //                 });
    //             }
    //     });
    // }).then(function (result) {
    //     res.json(result);
    // });

    // async.waterfall([
    //     function (cb) {
    //         actionFacade.findActionByTime((err, result) => {
    //             if (err) {
    //                 console.log('find actions error!');
    //                 cb(null);
    //             } else {
    //                 cb(null, result);
    //             }
    //         });
    //     },
    // ], function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         let flag = true;
    //         for (let i = 0; i < data.length; i++) {
    //             if ('Backlog' === data[i].iteration) {
    //                 flag = false;
    //             }
    //         }
    //         if (flag) {
    //             actionFacade.findActionByIterationName('Backlog', (err, re) => {
    //                 if (err) {
    //                     console.log('findActionByIterationName error!');
    //                 } else {
    //                     if (re.length > 0) {
    //                         data.push(re[0]);
    //                     }
    //                 }
    //                 res.json(data);
    //             });
    //         }
    //     }
    // });
}

function addAction(req, res, next) {
    let action = req.body;
    action.createTime = new Date();
    actionFacade.addAction(action, (err, result) => {
        if (err) {
            console.log('add actions error!');
        } else {
            res.json(result);
        }
    });
}

function deleteAction(req, res, next) {
    let actionId = req.params.actionId;
    actionFacade.deleteAction(actionId, (err, result) => {
        if (err) {
            console.log('delete action error!');
        } else {
            res.json(result);
        }
    });
}

function findActionByIterationName(req, res, next) {
    let iterationName = req.params.iterationName;
    actionFacade.findActionByIterationName(iterationName, (err, result) => {
        if (err) {
            console.log('findActionByIterationName error!');
        } else {
            res.json(result);
        }
    });
}