const express = require("express");
const app = express();
const middleware = require("./modules/middleware")(app);
const routeAPI = require("./modules/routes").API(middleware);

module.exports = routeAPI;
