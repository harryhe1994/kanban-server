var express = require('express');
var DefectController = require('../app/controller/defectController');

module.exports = (app) => {
    const router = express.Router();

    router.route('/')
        .post(DefectController.addDefect);

    router.route('/')
        .put(DefectController.updateDefect);

    router.route('/iteration/:iteration')
        .get(DefectController.findDefectByIteration);

    router.route('/')
        .get(DefectController.findAll);

    router.route('/:defectId')
        .delete(DefectController.deleteDefect);

    router.route('/count')
        .get(DefectController.getDefectCount);

    router.route('/page/:page')
        .get(DefectController.getDefectByPage);

    app.use('/defect', router);
};