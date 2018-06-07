const { json, urlencoded } = require("body-parser");
const multer = require("multer");

module.exports = app => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  return app;
};
