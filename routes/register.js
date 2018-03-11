/* register page route */

const express = require("express"),
      router = express.Router();

router.get("/", (request, response) => {
  response.render("register", {title: "Register | Revil",
                      author: "Revil",
                      description: "Register a Revil account!"});
});

module.exports = router;
