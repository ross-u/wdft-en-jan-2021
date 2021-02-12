var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res
    .status(200)
    .render("index", {
      data: "When you say you are fine, you are not totally fine",
    });
});

module.exports = router;
