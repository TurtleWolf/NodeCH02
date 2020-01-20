# Express; third

1. **`mkdir`**
   - best practice
   - `name wisely, don't rush`
2. **`cd`**
3. **add configuration #52**
   - `"restart": true,`
   - `"runtimeExecutable": "nodemon",`
   - `"console": "integratedTerminal"`
   - **see #43 for restarting debugger**
   - `sudo npm install nodemon -g`
   - `sudo npm uninstall nodemon -g`
4. **`npm init -y`**
   - `"start": "nodemon app.js"`
5. **`npm install nodemon --save-dev`**
   - `developement` dependencies
   - `nodemon` not for production #45
6. **`npm install express`**
   - `production` dependencies
7. **`npm start`**
   - dev server
   - auto refresh (`hotloading`?/live reload)
8. **`server` #26 & 59**
   - `const express = require('express');`
   - `const app = express();`
   - `app.listen(3000);` #62
   - #31 & 61 `Headers`
   - `resp.setHeader();`
   - `resp.write();`
   - `resp.send();`
9. **`routes` #43 homepage npm node/mon?**
   - #58 search for alternatives `[Adonis(Laravel), Koa, Sails, Gatsby?, Next?]`
   - [app.use() #63](https://expressjs.com/en/4x/api.html#app.use 'app.use("/users", (req,res, next)=>{
console.log("middleWare")
next()
})')
   - '404'
   - '/'
   - '/users GET'
   - '/users GET'
   - '/users POST'
   - '/users POST'
   - '404'
10. **`static routes`**
    - [app.use()](https://expressjs.com/en/4x/api.html#app.use 'app.use("/users", (req,res, next)=>{
      console.log("middleWare")
      next()
      })')
    - '404'
