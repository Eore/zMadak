const router = require("express").Router();
const { login } = require("../entities/user/controller");
const { genToken } = require("./token");

router.get("/logout", (rq, rs) => {
  rs.clearCookie("usertoken");
  rs.status(200).json({ message: "Logout berhasil" });
});

router.route("/login").post((rq, rs) => {
  login(rq.body.username, rq.body.password).then(val => {
    if (val) {
      let token = genToken({ id: val.id, username: val.username });
      rs.cookie("usertoken", token, { httpOnly: true, signed: true });
      rs.status(201).json({
        message: "Login berhasil",
        data: { token }
      });
    } else {
      rs.status(500).json({ message: "Login gagal" });
    }
  });
});

module.exports = router;
