const { json, urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = app => {
  app.use(cookieParser("miawmiaw"));
  app.use(json());
  app.use(urlencoded({ extended: false }));

  return app;
};
