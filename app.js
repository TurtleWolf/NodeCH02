const express = require('express');

const app = express();
// const routes = require('./routes');
// 1 server (port3000)
// 2 / & /users
app.use((requ, resp, next) => {
    console.log('always run MiddleWare');
    // resp.send('<h1>MiddleWare</h1>');
    next();
});

app.use('/users', (requ, resp, next) => {
    console.log('users');
    resp.send('<h1>users</h1>');
});

app.use('/', (requ, resp, next) => {
    console.log('slash');
    resp.send('<h1>slash</h1>');
});
app.listen(3000);
