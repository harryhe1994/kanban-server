var http = require('http');
var app = require('../app');
var server = http.createServer(app);
var sio = require('socket.io');
var constant = require('../config/common.constans');

var socketConfig = {
    path: '/api/socketio'
};
var io = sio(server, socketConfig);

var socketClients = [];
io.on('connection', function (socket) {
    socketClients.push(socket);
    socket.emit(constant.SOCKET_CARD_CHANGE, {message: 'hello client'});

    socket.on(constant.SOCKET_CARD_CHANGE, function (msg) {
        console.log('From client:' + msg.message);
        if ('cardChange' === msg.message) {
            socket.broadcast.emit(constant.SOCKET_CARD_CHANGE, {message: 'cardLoad'});
        }
    });

    socket.on("disconnect", function () {
        console.log("info: user sign out from socket");
        socketClients = socketClients.filter(function (item) {
            return item.id != socket.id;
        });
        console.log('disconnect', socketClients.length);
    });
    console.log('length', socketClients.length);
});

module.exports = {
    server: server,
    app: app
};