const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const { port } = require("./config.json").server;

app.use(fileUpload());
app.use(bodyParser.json());

app.use(require("./routes/routes"));

app.listen(port, () => console.log(`Server up di port ${port}`));
