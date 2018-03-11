/* login page route */

const express = require("express"),
      router = express.Router();

router.get("/", (request, response) => {
  response.render("login", {title: "Login | Revil",
                      author: "Revil",
                      description: "Login to Revil"});
});

module.exports = router;
