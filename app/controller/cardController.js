var cardService = require('../service/cardService');


module.exports = {
    addCard,
    updateCard,
    deleteCard,
    findAllCard,
    findById,
    findCardByTime
};


function addCard(req, res, next) {
    console.log('add card');
    cardService.addCard(req, res, next);
}

function updateCard(req, res, next) {
    console.log('update card');
    cardService.updateCard(req, res, next);
}

function deleteCard(req, res, next) {
    console.log('delete card');
    cardService.deleteCard(req, res, next);
}

function findAllCard(req, res, next) {
    console.log('find all card');
    cardService.findAllCard(req, res, next);
}

function findCardByTime(req, res, next) {
    console.log('find all card');
    cardService.findCardByTime(req, res, next);
}

function findById(req, res, next) {
    console.log('find by card id');
    cardService.findById(req, res, next);
}
