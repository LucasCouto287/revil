/* main homepage route */

const express = require("express"),
      router = express.Router();

router.get("/", (request, response) => {
  response.render("home", {title: "Revil",
                      author: "Revil",
                      description: "Revil is a..."});
});

module.exports = router;
