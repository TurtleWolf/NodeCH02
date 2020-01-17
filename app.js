const http = require('http');

const express = require('express');

const app = express;
// const routes = require('./routes');
// 1 server (port3000)
const server = http.createServer();
server.listen(3000);
