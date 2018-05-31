const express = require("express");
const app = express();
const fs = require("fs");

const { port } = require("./config.json").server;

let static = require("path").join(__dirname, "../data");
// app.use(express.static(static));
// console.log(static);

// app.get("/", (req, res) => {
//   // if (!fs.existsSync(static + "/id")) fs.mkdir(static + "/id");
//   // res.sendFile(static + "/contoh.png");
//   // res.end();
//   let gambar = fs.readFileSync(static + "/id/contoh.png");
//   // let buff = new Buffer(gambar, "binary").toString("base64");
//   // console.log(buff);
//   res.writeHead(200, { "Content-Type": "image" });
//   res.end(gambar, "binary");
// });

app.get("/image/:filename", (req, res) => {
  // if (req.headers.auth === "true")
  res.sendFile(`${static}/id/${req.params.filename}.png`);
  // else res.send("error");
});

app.get("/getimage", (req, res) => {
  const imageToBase64 = require("./services/imageToBase64").imageToBase64;
  res.send(imageToBase64("id", "contoh.png"));
});

app.listen(port, () => console.log(`Server up di port ${port}`));
