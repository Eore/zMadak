const router = require("express").Router();
const path = require("path");
const url = path.join(__dirname, "../../../data");

router.get("/:iduser/:idimage", (req, res) => {
  let image = `${url}/${req.params.iduser}/${req.params.idimage}.png`;
  res.sendFile(image);
});

router.post("/", (req, res) => {});

module.exports = router;
