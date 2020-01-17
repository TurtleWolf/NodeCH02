const express = require('express');

const app = express();
// const routes = require('./routes');
// 1 server (port3000)
app.use((requ, resp, next) => {
    console.log('MiddleWare');
    // resp.send('<h1>MiddleWare</h1>');
    next();
});
app.use((requ, resp, next) => {
    console.log('MidWife');
    resp.send('<h1>WifeMid</h1>');
});
app.listen(3000);
