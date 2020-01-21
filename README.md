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
   - #58 search for alternatives `[Adonis(Laravel), Koa, Sails, Gatsby?, Next?]` (deno, typeScript)
   - [app.use() #63 #66](https://expressjs.com/en/4x/api.html#app.use 'app.use("/users", (req,res, next)=>{
console.log("middleWare")
next()
})')
   - **`mkdir routes`**
   - [const path = require(path); #70](https://nodejs.org/docs/latest-v8.x/api/path.html 'require path')
   - [res.sendFile() #70 & #72](https://expressjs.com/en/4x/api.html#res.sendFile 'res.sendFile(path.join(__dirname, .., views, shop.html));')
   - [res.status(404).sendFile() #71](https://expressjs.com/en/4x/api.html#res.status 'res.status().sendFile(path.join(__dirname, views, shop.html));')
   - '/'
   - '/users GET'
   - '/users GET'
   - '/users POST'
   - '/users POST'
   - '404'
10. **`static routes`**
    - '404'
