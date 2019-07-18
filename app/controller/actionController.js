var actionService = require('../service/actionService');


module.exports = {
    updateAction,
    findActionByTime,
    addAction,
    deleteAction,
    findActionByIterationName
};


function updateAction(req, res, next) {
    console.log('update action');
    actionService.updateAction(req, res, next);
}

function addAction(req, res, next) {
    console.log('add action');
    actionService.addAction(req, res, next);
}

function findActionByTime(req, res, next) {
    console.log('find action');
    actionService.findActionByTime(req, res, next);
}

function deleteAction(req, res, next) {
    console.log('delete action');
    actionService.deleteAction(req, res, next);
}

function findActionByIterationName(req, res, next) {
    console.log('findActionByIterationName');
    actionService.findActionByIterationName(req, res, next);
}