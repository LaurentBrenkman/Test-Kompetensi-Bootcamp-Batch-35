const db = require("./db_config");

const sql = `CREATE TABLE kabupaten_tb 
    (
        id int NOT NULL AUTO_INCREMENT,
        nama VARCHAR(255),
        diresmikan VARCHAR(255), 
        photo VARCHAR(255),
        PRIMARY KEY (id)
    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});