const router = require("express").Router();
const fs = require("fs");

let api = fs.readdirSync("./src/routes/api");

api
  .map(file => file.split(".")[0])
  .forEach(file => router.use(`/api/${file}`, require(`./api/${file}`)));

module.exports = router;
