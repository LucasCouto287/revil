const express = require('express'),
      compression = require('compression'),
      app = express(),
      routes = require('./routes/main');
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

app.listen(port, () => console.log(`Revil site running on port ${port}!`))