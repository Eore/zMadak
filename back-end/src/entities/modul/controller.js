const model = require("./model");
const { unlinkSync } = require("fs");
const { join } = require("path");

module.exports = {
  tambahModul(data = { nama_modul, nama_file, deskripsi, id_pokja }) {
    return model.create(data);
  },
  editModul(id, data = { nama_modul, nama_file, deskripsi, id_pokja }) {
    return model.update(data, { where: { id } });
  },
  listModul(id_pokja) {
    return model.findAll({ where: { id_pokja } }).then(list => {
      return list.map(el => {
        let { id_pokja, pokja, ...newReturn } = el.dataValues;
        return newReturn;
      });
    });
  },
  listModulPublik(pokja) {
    return model
      .findAll({
        include: [{ model: require("../pokja/model"), where: { pokja } }],
        where: { publik: true }
      })
      .then(list => {
        return list.map(el => {
          let { id_pokja, pokja, ...newReturn } = el.dataValues;
          return newReturn;
        });
      });
  },
  hapusModul(id) {
    return model.find({ where: { id } }).then(val => {
      if (val) {
        unlinkSync(join(__dirname, `../../../storage/${val.nama_file}`));
        return model.destroy({ where: { id } });
      } else {
        return val;
      }
    });
  },
  cariFileModul(id) {
    return model.find({ where: { id } }).then(val => val.nama_file);
  }
};
