var defectService = require('../service/defectService');


module.exports = {
    updateDefect,
    findDefectByIteration,
    addDefect,
    deleteDefect,
    findAll,
    getDefectCount,
    getDefectByPage
};

function updateDefect(req, res, next) {
    console.log('update defect');
    defectService.updateDefect(req, res, next);
}

function addDefect(req, res, next) {
    console.log('add defect');
    defectService.addDefect(req, res, next);
}

function findDefectByIteration(req, res, next) {
    console.log('find defect');
    defectService.findDefectByIteration(req, res, next);
}

function getDefectByPage(req, res, next) {
    console.log('find defect by page');
    defectService.getDefectByPage(req, res, next);
}

function findAll(req, res, next) {
    console.log('find all defects');
    defectService.findAll(req, res, next);
}

function getDefectCount(req, res, next) {
    console.log('get defect count');
    defectService.getDefectCount(req, res, next);
}

function deleteDefect(req, res, next) {
    console.log('delete defect');
    defectService.deleteDefect(req, res, next);
}