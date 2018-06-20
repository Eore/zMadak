const router = require("express").Router();
const {
  tambahModul,
  listModul,
  hapusModul,
  cariFileModul,
  editModul,
  listModulPublik
} = require("./controller");
const multer = require("multer");
const upload = multer({ dest: "storage/" });
const { join } = require("path");
const { decodeToken } = require("../../modules/token");

router
  .route("/")
  .get((rq, rs) => {
    let id_pokja = decodeToken(rq.signedCookies.usertoken).pokja.id;
    listModul(id_pokja).then(res =>
      rs.status(200).json({
        message: "List didapatkan",
        data: res
      })
    );
  })
  .post(upload.single("modul"), (rq, rs) => {
    let nama_file = rq.file === undefined ? null : rq.file.filename;
    let id_pokja = decodeToken(rq.signedCookies.usertoken).pokja.id;
    tambahModul({ ...rq.body, id_pokja, nama_file })
      .then(() =>
        rs.status(201).json({
          message: "Modul ditambah",
          data: { ...rq.body, id_pokja, nama_file }
        })
      )
      .catch(err => {
        rs.status(500).json({ message: "Input salah atau modul sudah ada" });
      });
  });

router.route("/public/:pokja").get((rq, rs) => {
  listModulPublik(rq.params.pokja).then(res =>
    rs.status(200).json({
      message: "List didapatkan",
      data: res
    })
  );
});

router
  .route("/:idmodul")
  .get((rq, rs) => {
    cariFileModul(rq.params.idmodul).then(val => {
      rs.setHeader("Content-Type", "application/pdf");
      rs.sendFile(join(__dirname, `../../../storage/${val}`));
    });
  })
  .delete((rq, rs) => {
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
  })
  .patch((rq, rs) => {
    let nama_file = rq.file === undefined ? null : rq.file.filename;
    editModul(rq.params.idmodul, { ...rq.body, nama_file }).then(() =>
      rs.status(201).json({
        message: "Modul diupdate",
        where: rq.params,
        data: { ...rq.body, nama_file }
      })
    );
  });

module.exports = router;
