const router = require("express").Router();
const { cariUser, editUser } = require("./controller");

router
  .route("/:id?")
  .get((rq, rs) => {
    cariUser(rq.params.id)
      .then(res =>
        rs.status(200).json({
          message: "User didapatkan",
          data: res
        })
      )
      .catch(err =>
        rs.status(500).json({
          message: "Input id user"
        })
      );
  })
  .patch((rq, rs) => {
    editUser(rq.params.id, rq.body).then(val => {
      if (val === 1) {
        rs.status(200).json({
          message: "User diupdate",
          where: rq.params,
          data: rq.body
        });
      } else {
        rs.status(404).json({
          message: "User tidak ditemukan"
        });
      }
    });
  });

module.exports = router;
