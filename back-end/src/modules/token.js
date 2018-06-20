const jwt = require("jsonwebtoken");

module.exports = {
  genToken(data = { id, username, nama, pokja }) {
    return jwt.sign(data, "miaw");
  },
  decodeToken(token) {
    return jwt.decode(token);
  }
};
