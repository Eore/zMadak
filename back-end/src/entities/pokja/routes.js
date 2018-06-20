const router = require("express").Router();
const { tambahPokja, listPokja, hapusPokja } = require("./controller");

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
  });

router.route("/:id").delete((rq, rs) => {
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
});
module.exports = router;
