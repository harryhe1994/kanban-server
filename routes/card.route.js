var express = require('express');
var cardController = require('../app/controller/cardController');

module.exports = (app) => {
    const router = express.Router();

    router.route('/')
        .post(cardController.addCard);

    router.route('/')
        .put(cardController.updateCard);

    router.route('/:cardId')
        .delete(cardController.deleteCard);

    router.route('/cards')
        .get(cardController.findAllCard);

    router.route('/time')
        .get(cardController.findCardByTime);

    router.route('/:cardId')
        .get(cardController.findById);


    app.use('/card', router);
};