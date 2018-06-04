const mysql = require("mysql");
const { host, port, database, user, password } = require("../config.json");
const fs = require("fs");

mysql
  .createConnection({
    host,
    port,
    user,
    password
  })
  .query(`create database if not exists ${database}`);

const connection = mysql.createPool({
  host,
  port,
  database,
  user,
  password
});

const model = fs.readFileSync("./src/services/model.sql");
const sqlString = new Buffer(model, "utf-8").toString();

connection.query(sqlString);

module.exports = connection;
