const router = require("express").Router();
const { tambahPokja, listPokja, hapusPokja } = require("./controller");
const checkAdmin = require("../../modules/checkAdmin");

router
  .route("/")
  .get((rq, rs) => {
    listPokja().then(res =>
      rs.status(200).json({
        message: "List didapatkan",
        data: res
      })
    );
  })
  .post((rq, rs) => {
    if (checkAdmin(rq.signedCookies.usertoken)) {
      tambahPokja(rq.body.pokja)
        .then(() =>
          rs.status(201).json({
            message: "Pokja ditambah",
            data: rq.body
          })
        )
        .catch(err => {
          rs.status(500).json({ message: "Input salah atau pokja sudah ada" });
        });
    } else {
      rs.status(401);
    }
  });

router.route("/:id").delete((rq, rs) => {
  if (checkAdmin(rq.signedCookies.usertoken)) {
    hapusPokja(rq.params.id).then(val => {
      if (val === 1) {
        rs.status(200).json({
          message: "Pokja dihapus",
          where: rq.params
        });
      } else {
        rs.status(404).json({
          message: "ID pokja tidak ditemukan"
        });
      }
    });
  } else {
    rs.status(401);
  }
});
module.exports = router;
