const model = require("./model");

module.exports = {
  tambahPokja(pokja) {
    return model.create({ pokja });
  },
  listPokja() {
    return model.findAll().map(el => {
      return { id: el.id, pokja: el.pokja };
    });
  },
  hapusPokja(id) {
    return model.destroy({ where: { id } });
  }
};
