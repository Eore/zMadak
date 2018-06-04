const connection = require("./dbConnection");

module.exports = table => {
  return {
    insert(data) {
      connection.query(`insert into ${table} set ?`, data);
    },
    update(where, data) {
      connection.query(`update ${table} set ? where ?`, [data, where]);
    },
    delete(where) {
      connection.query(`delete from ${table} where ?`, where);
    },
    selectAll() {
      return new Promise((res, rej) => {
        connection.query(`select * from ${table}`, (err, res) => res(res));
      });
    },
    selectWhere(where) {
      return new Promise((res, rej) => {
        connection.query(`select * from ${table} where ?`, where, (err, res) =>
          res(res)
        );
      });
    }
  };
};
