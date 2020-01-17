const express = require('express');

const app = express();
//runs with every request
app.use((requ, resp, next) => {
    console.log('always run MiddleWare');
    next();
});
//runs on user request only
app.use('/users', (requ, resp, next) => {
    console.log('only runs with users');
    next();
});
//runs on user request only
app.use('/users', (requ, resp, next) => {
    console.log('users');
    resp.send('<h1>users</h1>');
});
//runs on slash request only
app.use('/', (requ, resp, next) => {
    console.log('only runs with slash');
    next();
});
//runs on slash request only
app.use('/', (requ, resp, next) => {
    console.log('slash');
    resp.send('<h1>slash</h1>');
});
app.listen(3000);
