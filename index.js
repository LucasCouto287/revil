const express = require('express'),
      compression = require('compression'),
      app = express(),
      routes = require('./routes/main'),
      cacheTime = 30 * 24 * 60 * 60 * 1000,
      port = 7000

// compress all app responses (before sending to client)
app.use(compression());
// use the 'public' directory to serve static files (and set cache time)
app.use(express.static(__dirname + "/public", {maxAge: cacheTime}));
// set express view engine to render Pug
app.set("view engine", "pug");

// create all routes using individual pages
for (let pages in routes){
  app.use(pages, routes[pages]);
}

// run the site on loclahost:7000 (using nodemon/node on terminal)
app.listen(port, () => console.log(`Revil site running on port ${port}!`))