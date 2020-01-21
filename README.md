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
5. **`npm install nodemon --save-dev` [#43 nodemon0](https://nodejs.org/docs/latest-v8.x/api/path.html 'npm nodemon homepage')**
   - `developement` dependencies
   - `nodemon` not for production #45
6. **`npm install express body-parser`**
   - `production` dependencies
7. **`npm start`**
   - dev server
   - auto refresh (`hotloading`?/live reload)
8. **`server` #26 & 59**
   - **`const express = require('express');`**
   - **`const app = express();`**
   - **`app.listen(3000);`** #62
   - #31 & 61 `Headers`
   - `resp.setHeader();`
   - `resp.write();`
   - `resp.send();`
9. **`routes`**
   - #58 search for alternatives `[Adonis(Laravel), Koa, Sails, Gatsby?, Next?]` (deno, typeScript)
   - [app.use() #63 #66](https://expressjs.com/en/4x/api.html#app.use 'app.use("/users", (req,res, next)=>{
console.log("middleWare")
next()
})')
   - **`mkdir routes`**
   - [resp.send(); #64](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290?start=174#notes 'resp.send(<form></form>);')
   - [resp.redirect("/"); #64](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290?start=174#notes 'resp.redirect("/");')
   - **[app.get(exact match) #65](https://expressjs.com/en/4x/api.html#app.get 'app.get(exact match)')**
   - **[app.post(exact match) #65](https://expressjs.com/en/4x/api.html#app.post 'app.post(exact match)')**
   - [app.delete(exact match) #65](https://expressjs.com/en/4x/api.html#app.delete 'app.delete(exact match)')
   - [app.patch(exact match) #65](https://expressjs.com/en/4x/api.html#app.patch 'app.patch(exact match)')
   - [app.put(exact match) #65](https://expressjs.com/en/4x/api.html#app.put 'app.putt(exact match)')
   - **[app.use("/admin", adminRoutes);; #66 & #68](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566296?start=246#notes 'const adminRoutes = require("./routes/admin");')**
   - [const paath = require("path"); #70 & #72](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566314#notes 'module.exports = paath.dirname(process.mainModule.filename);')
   - [res.sendFile() #70 & #72](https://expressjs.com/en/4x/api.html#res.sendFile 'res.sendFile(path.join(__dirname, "..", "views", "shop.html"));')
   - [res.status(404).sendFile() #67 & #71](https://expressjs.com/en/4x/api.html#res.status 'res.sendFile(path.join(__dirname, "..", "views", "404.html"));')
   - **[const router = express.Router(); #66 & #72](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566314#notes '    const express = require ("express");
const router = express.Router;
router.get();
router.post();
module.exports = router;')**
   - '/'
   - '/users GET'
   - '/users GET'
   - '/users POST'
   - '/users POST'
   - '404'
10. **`static routes`**
    - **[app.use(express.static(path.join()));; #74](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566318#notes 'app.use(express.static(path.join(__dirname, "public")));')**
11. **`request`**
    - **[const bodyParser = require ("body-parser"); #64](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290?start=314#notes 'resp.send(<form></form>);')**
    - **[app.use(bodyParser.urlencoded({extended: false}));); #64](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290?start=202#notes 'console.log(req.body);')**
12. **`mkdir views`**
    - **[add-user.html #69](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290?start=314#notes 'resp.send(<form></form>);')**
    - **[lobby.html #69](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290?start=202#notes 'console.log(req.body);')**
13. **`mkdir helpers || util`**
    - **[paath.js #72](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566314#notes 'const paath = require("path");      module.exports = paath.dirname(process.mainModule.filename);')**
    - **[const rootDir = require('./util/paath'); #72](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566314#notes 'res.status(404).sendFile(path.join(rootDir, "view", "404.html"));')**
