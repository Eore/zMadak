const crypto = require("crypto");

module.exports = password =>
  crypto
    .createHash("sha256")
    .update(JSON.stringify({ password, key: "miaw" }))
    .digest("base64");
