const sql = require("../../modules/database");
const S = sql.Sequelize;

const pokja = sql.define(
  "pokja",
  {
    id: {
      type: S.UUID,
      primaryKey: true,
      defaultValue: S.UUIDV4()
    },
    pokja: {
      type: S.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    freezeTableName: true
  }
);

pokja.sync({ force: false });

// pokja.hasMany(require("../user/model"), {
//   sourceKey: "id",
//   foreignKey: "id_pokja",
//   constraints: false
// });

module.exports = pokja;
