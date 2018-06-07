const sql = require("../../modules/database")();
const S = sql.Sequelize;

const user = sql.define(
  "user",
  {
    id: {
      type: S.UUID,
      primaryKey: true,
      defaultValue: S.UUIDV4()
    },
    username: {
      type: S.STRING(30),
      allowNull: false,
      unique: true
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    nama: {
      type: S.STRING(30),
      allowNull: false
    },
    email: {
      type: S.STRING(30),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    id_pokja: {
      type: S.UUID,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

user.sync({ force: false });

user.belongsTo(require("../pokja/model"), {
  targetKey: "id",
  foreignKey: "id_pokja",
  constraints: false
});

module.exports = user;
