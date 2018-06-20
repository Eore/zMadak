const model = require("./model");
const encrypt = require("../../modules/encrypt");

module.exports = {
  tambahUser(data = { username, password, nama, email, id_pokja }) {
    return model.create({
      ...data,
      password: encrypt(data.password)
    });
  },
  editUser(id, data = { password, nama, email, id_pokja }) {
    return model.update(
      {
        ...data,
        password: encrypt(data.password)
      },
      { where: { id } }
    );
  },
  cariUser(id) {
    return model
      .find({ where: { id }, include: [require("../pokja/model")] })
      .then(el => {
        return {
          username: el.username,
          nama: el.nama,
          email: el.email,
          pokja: el.pokja.pokja
        };
      });
  },
  login(username, password) {
    return model
      .find({
        where: { username, password: encrypt(password) },
        include: [require("../pokja/model")]
      })
      .then(el => {
        return {
          id: el.id,
          username: el.username,
          nama: el.nama,
          pokja: { id: el.pokja.id, pokja: el.pokja.pokja }
        };
      });
  }
};
