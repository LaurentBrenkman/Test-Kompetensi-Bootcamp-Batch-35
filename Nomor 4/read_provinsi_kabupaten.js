const db = require("./db_config");

const sql = "SELECT * FROM provinsi_tb join kabupaten_tb on provinsi_tb.id = kabupaten_tb.provinsi_id";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});