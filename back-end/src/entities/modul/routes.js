const router = require("express").Router();
const {} = require("./controller");
const multer = require("multer");
const upload = multer({ dest: "storage/" });
const { join } = require("path");

router
  .route("/")
  .get((rq, rs) => {
    rs.setHeader("Content-Type", "application/pdf");
    rs.sendFile(
      join(__dirname, "../../../storage/0227dcd598897c71bdbed5d63952f157")
    );
  })
  .post(upload.single("modul"), (rq, rs) => {
    console.log(rq.file);
  });

router
  .route("/")
  .get((rq, rs) => {
    rs.setHeader("Content-Type", "application/pdf");
    rs.sendFile(
      join(__dirname, "../../../storage/0227dcd598897c71bdbed5d63952f157")
    );
  })
  .post(upload.single("modul"), (rq, rs) => {
    console.log(rq.file);
  });

module.exports = router;
