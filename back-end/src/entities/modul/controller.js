const model = require("./model");

module.exports = {
  tambahModul(data = { nama_modul, nama_file, deskripsi, id_pokja }) {
    return model.create(data);
  },
  editModul(id, data = { nama_modul, nama_file, deskripsi, id_pokja }) {
    return model.update(data, { where: { id } });
  },
  cariModul(id) {
    return model.find({ where: { id }, include: [require("../pokja/model")] });
  },
  hapusModul(id) {
    return model.destroy({ where: { id } });
  }
};
