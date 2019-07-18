var express = require('express');
var carFacade = require('../app/facade/cardFacade');

module.exports = (app) => {
    const router = express.Router();
    router.route('/test').get(function(req, res, next) {
        var card = {
            cardType: 'test',
            comments: 'hello',
        };
        carFacade.addCard(card, (err, result) => {
            if (err) {
                console.log("add food error !");
            } else {
                res.json(result);
            }
        });
    });
    app.use('/users', router);
};
