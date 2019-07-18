var express = require('express');

module.exports = (app) => {
    const router = express.Router();
    router.route('').get(function(req, res, next) {
        res.render('index', {title: 'Express'});
    });
    app.use('/', router);
};
