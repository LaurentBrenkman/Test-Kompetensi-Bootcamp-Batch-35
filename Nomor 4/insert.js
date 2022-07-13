const db = require("./db_config");

const sql = `INSERT INTO provinsi_tb (nama, diresmikan, photo, pulau) 
            VALUES ('Aceh', '7 Desember 1959', 'Aceh.jpg', 'Aceh')`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});