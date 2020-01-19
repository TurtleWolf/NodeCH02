# Express; third

1. `mkdir`
   - best practice
   - `name wise, don't rush`
2. `cd`
3. add configuration
   - `"console": "integratedTerminal"`
   - `sudo npm install nodemon -g`
   - `sudo npm uninstall nodemon -g`
4. `npm init -y`
   - `"start": "nodemon app.js"`
5. `npm install nodemon --save-dev`
   - developement dependencies
6. `npm install express`
   - production dependencies
7. `npm start`
   - dev server
   - auto refresh (`hotloading`?/live reload)
8. `server`
   - `const express = require('express');`
   - `const app = express();`
   - `app.listen(3000);`
9. `routes`
   - `app.use('/users', (requ, resp, next) => { console.log('middleWare'); next(); });`
   - '/'
   - '/'
   - '/users GET'
   - '/users GET'
   - '/users POST'
   - '/users POST'
   - '404'
10. `static .js or .css`
    - '/'
    - '/'
    - '/users GET'
    - '/users GET'
    - '/users POST'
    - '/users POST'
    - '404'
