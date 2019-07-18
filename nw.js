let Service = require('node-windows').Service;

let svc = new Service({
    name: 'node_kanban',
    description: 'node kanban server',
    script: 'D:/team/backen/kanban-server/bin/server.start.js'
});

svc.on('install', () => {
    svc.start();
});

svc.install();