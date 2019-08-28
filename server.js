require('babel-register');
import Socket from './server-src/socket';
import Routes from './server-src/routes';
const express = require('express');

const PORT = process.env.PORT || 6001;
const app = express();
const server = require('http').createServer(app);

server.listen(PORT);

Routes.init(app);
Socket.init(server);