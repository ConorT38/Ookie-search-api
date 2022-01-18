const mysql = require("mysql2/promise");

const getSearchResults = async function (searchTerm) {
  const conn = await mysql.createConnection({
    host: "192.168.0.21",
    user: "root",
    password: "raspberry",
    database: "ookie",
  });
  let [rows, fields] = await conn
    .execute("SELECT * FROM sites WHERE title LIKE ? or url LIKE ?", ["%" + searchTerm + "%", "%" + searchTerm + "%"])
    .finally(conn.end());
  return rows;
};

module.exports = {
  getSearchResults,
};
