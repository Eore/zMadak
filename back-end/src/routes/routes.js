const router = require("express").Router();
const fs = require("fs");

let api = fs.readdirSync("./src/routes/api");

api
  .map(file => file.split(".")[0])
  .forEach(file => router.use(`/api/${file}`, require(`./api/${file}`)));

let pages = fs.readdirSync("./src/routes/pages");

pages
  .map(file => file.split(".")[0])
  .forEach(file => router.use(`/${file}`, require(`./pages/${file}`)));

module.exports = router;
