const router = require("express").Router();
const { login, tambahUser } = require("../entities/user/controller");
const { genToken } = require("./token");

router.route("/daftar").post((rq, rs) => {
  tambahUser(rq.body)
    .then(() =>
      rs.status(201).json({
        message: "User ditambah",
        data: rq.body
      })
    )
    .catch(err => {
      rs.status(500).json({ message: "User sudah ada" });
    });
});

router.get("/logout", (rq, rs) => {
  rs.clearCookie("usertoken");
  rs.status(200).json({ message: "Logout berhasil" });
});

router.route("/login").post((rq, rs) => {
  login(rq.body.username, rq.body.password).then(val => {
    if (val) {
      let token = genToken(val);
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
