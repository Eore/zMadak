const fs = require("fs");
const url = require("path").join(__dirname, "../../data");

module.exports.imageToBase64 = (idUser, idFile) => {
  let image = fs.readFileSync(`${url}/${idUser}/${idFile}`);
  return new Buffer(image, "binary").toString("base64");
};
