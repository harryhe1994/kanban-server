var defectFacade = require('../facade/defectFacade');


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
    let defect = req.body;
    defectFacade.updateDefect(defect, (err, result) => {
        if(err){
            console.log('update error!');
        } else {
            res.json(result);
        }
    });
}

function findDefectByIteration(req, res, next) {
    let iteration = req.params.iteration;
    defectFacade.findDefectByIteration(iteration, (err, result) => {
        if(err){
            console.log('find defect error!');
        } else {
            res.json(result);
        }
    });
}

function getDefectByPage(req, res, next) {
    let page = req.params.page;
    defectFacade.getDefectByPage(page, (err, result) => {
        if(err){
            console.log('find defect by page error!');
        } else {
            res.json(result);
        }
    });
}

function findAll(req, res, next) {
    defectFacade.findAll((err, result) => {
        if(err){
            console.log('find defect error!');
        } else {
            res.json(result);
        }
    });
}

function getDefectCount(req, res, next) {
    defectFacade.getDefectCount((err, result) => {
        if(err){
            console.log('get count error!');
        } else {
            res.json(result);
        }
    });
}

function addDefect(req, res, next) {
    let defect = req.body;
    defect.createTime = new Date();
    defectFacade.addDefect(defect, (err, result) => {
        if(err){
            console.log('add defect error!');
        } else {
            res.json(result);
        }
    });
}

function deleteDefect(req, res, next){
    let defectId = req.params.defectId;
    defectFacade.deleteDefect(defectId, (err, result) => {
        if(err){
            console.log('delete defect error!');
        } else {
            res.json(result);
        }
    });
}