const model = require("./model");
const ecnrypt = require("../../modules/encrypt");

module.exports = {
  tambahUser(data = { username, password, nama, email, id_pokja }) {
    return model.create({
      ...data,
      password: ecnrypt(data.password)
    });
  },
  editUser(id, data = { password, nama, email, id_pokja }) {
    return model.update(
      {
        ...data,
        password: ecnrypt(data.password)
      },
      { where: { id } }
    );
  },
  cariUser(id) {
    return model
      .find({ where: { id }, include: [require("../pokja/model")] })
      .then(el => {
        return {
          id: el.id,
          username: el.username,
          nama: el.nama,
          email: el.email,
          pokja: el.pokja.pokja
        };
      });
  }
};
