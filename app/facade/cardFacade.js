const mongoose = require('mongoose');
const cardModel = mongoose.model('Card');

module.exports = {
    addCard,
    updateCard,
    deleteCard,
    findAllCard,
    findById,
    findCardByTime
};

function addCard(cards, callback) {
    cardModel.insertMany(cards, function (err, docs) {
        if (err) {
            console.log(err);
            return callback(err, null);
        } else {
            console.log(docs);
            return callback(null, docs);
        }
    });
}

function updateCard(card, callback) {
    cardModel.updateMany({_id: card._id}, card, function (err, docs) {
        if(err){
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function deleteCard(cardId, callback) {
    cardModel.deleteMany({_id:cardId}, (err, docs) => {
        if(err){
            return callback(err, null);
        } else {
            return callback(null, docs)
        }
    });
}

function findAllCard(callback) {
    cardModel.find((err, docs) => {
        if(err){
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function findCardByTime(callback) {
    let curDate = new Date();
    let preDate = new Date(curDate.getTime() - 3*24*60*60*1000);
    cardModel.find({createTime: {$gte: preDate}},(err, docs) => {
        if(err){
            return callback(err, null);
        } else {
            return callback(null, docs);
        }
    });
}

function findById(cardId, callback) {
    cardModel.findOne({_id: cardId}, (err, docs) => {
       if(err){
           return callback(err, null);
       } else {
           return callback(null, docs);
       }
    });
}