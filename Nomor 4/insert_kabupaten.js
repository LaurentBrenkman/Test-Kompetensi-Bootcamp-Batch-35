const db = require("./db_config");

const sql = `INSERT INTO kabupaten_tb (nama,provinsi_id, diresmikan, photo) 
            VALUES ('Kab Aceh Besar',6, '27 Februari 1992', 'AcehBesar.jpg'),('Kab Aceh Jaya',6, '27 Februari 1933', 'AcehJaya.jpg')`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});