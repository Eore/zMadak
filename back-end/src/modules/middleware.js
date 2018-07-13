const { json, urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = app => {
  app.use(cors());
  app.use(cookieParser("miawmiaw"));
  app.use(json());
  app.use(urlencoded({ extended: false }));

  return app;
};
