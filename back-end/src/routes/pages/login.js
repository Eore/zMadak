const router = require("express").Router();

router
  .route("/")
  .get((req, res) => {
    res.render("login");
  })
  .post();

module.exports = router;
