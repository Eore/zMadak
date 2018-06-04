const { insert } = require("../../services/dbOperation")("user");
const encryption = require("../../services/encryption");

module.exports = {
  tambahUser(username, password) {
    insert({
      username,
      password: encryption(password)
    });
  }
};
