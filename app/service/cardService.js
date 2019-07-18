var cardFacade = require('../facade/cardFacade');


module.exports = {
    addCard,
    updateCard,
    deleteCard,
    findAllCard,
    findById,
    findCardByTime
};


function addCard(req, res, next) {
    let card = req.body;
    card.createTime = new Date();
    cardFacade.addCard(card, (err, result) => {
        if(err){
            console.log('add card error!');
        } else {
            res.json(result);
        }
    });
}

function updateCard(req, res, next) {
    let card = req.body;
    cardFacade.updateCard(card, (err, result) => {
        if(err){
            console.log('update error!');
        } else {
            res.json(result);
        }
    });
}

function deleteCard(req, res, next){
    let cardId = req.params.cardId;
    cardFacade.deleteCard(cardId, (err, result) => {
        if(err){
            console.log('delete error!');
        } else {
            res.json(result);
        }
    });
}

function findById(req, res, next) {
    let cardId = req.params.cardId;
    cardFacade.findById(cardId, (err, result) => {
        if(err){
            console.log('find card by id error!');
        } else {
            res.json(result);
        }
    });
}

function findAllCard(req, res, next) {
    cardFacade.findAllCard((err, result) => {
        if(err){
            console.log('find all card error!');
        } else {
            res.json(result);
        }
    });
}

function findCardByTime(req, res, next) {
    cardFacade.findCardByTime((err, result) => {
        if(err){
            console.log('find all card error!');
        } else {
            res.json(result);
        }
    });
}