const sql = require("../../modules/database");
const S = sql.Sequelize;

const modul = sql.define(
  "modul",
  {
    id: {
      type: S.UUID,
      primaryKey: true,
      defaultValue: S.UUIDV4()
    },
    nama_modul: {
      type: S.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    nama_file: {
      type: S.STRING(50),
      allowNull: true,
      validate: {
        notEmpty: true
      }
    },
    deskripsi: {
      type: S.TEXT,
      allowNull: false
    },
    id_pokja: {
      type: S.UUID,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    freezeTableName: true
  }
);

modul.sync({ force: false });

modul.belongsTo(require("../pokja/model"), {
  targetKey: "id",
  foreignKey: "id_pokja",
  constraints: false,
  onDelete: "cascade"
});

module.exports = modul;
