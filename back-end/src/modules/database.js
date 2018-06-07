const Sequelize = require("sequelize");
const {
  host,
  port,
  database,
  username,
  password
} = require("../../config.json").database;

let config = {
  dialect: "mysql",
  host,
  port,
  username,
  password,
  operatorsAliases: false
};

const connection = () => {
  let newCon = new Sequelize({
    ...config,
    database,
    logging: false
  });
  newCon.query("select 1+1 as test").catch(err => {
    console.log("Inisialisasi database...");
    let test = new Sequelize(config);
    test.query("create database if not exists zmadak");
  });
  return newCon;
};

module.exports = connection;
