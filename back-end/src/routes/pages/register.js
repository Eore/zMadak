const router = require("express").Router();
const { tambahUser } = require("../../entities/user/controller");

router
  .route("/")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    tambahUser(req.body);
  });

module.exports = router;
