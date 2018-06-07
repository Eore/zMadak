const { createServer } = require("http");
const { port } = require("./config.json").server;
const app = require("./src/app");

createServer(app).listen(port, () => console.log(`Server up di port ${port}`));
