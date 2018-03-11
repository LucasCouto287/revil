/* dashboard page route */

const express = require("express"),
      router = express.Router();

router.get("/:name", (request, response) => {
  response.render("dashboard", {title: "Dashboard | Revil",
                      author: "Revil",
                      description: "Welcome to your Revil dashboard",
                      name: request.params.name.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())});
});

module.exports = router;
