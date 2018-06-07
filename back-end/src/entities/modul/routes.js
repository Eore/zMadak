const router = require("express").Router();
const { tambahModul, listModul, hapusModul } = require("./controller");
const multer = require("multer");
const upload = multer({ dest: "storage/" });
const { join } = require("path");

router
  .route("/:namapokja")
  .get((rq, rs) => {
    listModul(rq.params.namapokja).then(res =>
      rs.status(200).json({
        message: "List didapatkan",
        data: res
      })
    );
  })
  .post(upload.single("modul"), (rq, rs) => {
    tambahModul({
      ...rq.body,
      nama_file: rq.file.filename
    })
      .then(() =>
        rs.status(201).json({
          message: "Modul ditambah",
          data: rq.body
        })
      )
      .catch(err => {
        rs.status(500).json({ message: "Modul sudah ada" });
      });
  });

router.route("/:idmodul").delete((rq, rs) => {
  hapusModul(rq.params.idmodul).then(val => {
    if (val === 1) {
      rs.status(200).json({
        message: "Modul dihapus",
        where: rq.params
      });
    } else {
      rs.status(404).json({
        message: "ID modul tidak ditemukan"
      });
    }
  });
});

module.exports = router;
