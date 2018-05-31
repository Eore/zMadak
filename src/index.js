const express = require("express");
const app = express();
const fs = require("fs");

const { port } = require("./config.json").server;

let static = require("path").join(__dirname, "../data");
app.use(express.static(static));
console.log(static);

app.get("/", (req, res) => {
  if (!fs.existsSync(static + "/id")) fs.mkdir(static + "/id");
  res.sendFile(static + "/contoh.png");
  // res.end();
});

app.listen(port, () => console.log(`Server up di port ${port}`));
