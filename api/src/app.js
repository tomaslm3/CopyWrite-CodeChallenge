const express = require('express');
const routes = require('./routes/index');

const server = express();

server.use('/', routes);

module.exports = server;