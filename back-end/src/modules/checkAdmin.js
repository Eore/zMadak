let { decodeToken } = require("./token");

module.exports = usertoken =>
  decodeToken(usertoken) === "admin" ? true : false;
