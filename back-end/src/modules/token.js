const jwt = require("jsonwebtoken");

module.exports = {
  genToken({ id, username }) {
    return jwt.sign({ id, username }, "miaw");
  },
  decodeToken(token) {
    return jwt.decode(token);
  }
};
