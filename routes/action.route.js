var express = require('express');
var ActionController = require('../app/controller/actionController');

module.exports = (app) => {
    const router = express.Router();

    router.route('/')
        .post(ActionController.addAction);

    router.route('/')
        .put(ActionController.updateAction);

    router.route('/time')
        .get(ActionController.findActionByTime);

    router.route('/:actionId')
        .delete(ActionController.deleteAction);

    router.route('/iteration/:iterationName')
        .get(ActionController.findActionByIterationName);


    app.use('/action', router);
};