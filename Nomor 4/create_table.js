const db = require("./db_config");

const sql = `CREATE TABLE kabupaten_tb 
    (
        id int NOT NULL AUTO_INCREMENT,
        provinsi_id int(11) NOT NULL,
        nama VARCHAR(255),
        diresmikan VARCHAR(255), 
        photo VARCHAR(255),
        PRIMARY KEY (id),
        FOREIGN KEY (provinsi_id) REFERENCES provinsi_tb(id) 
    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});