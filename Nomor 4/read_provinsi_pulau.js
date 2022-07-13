const db = require("./db_config");

const sql = "SELECT * FROM provinsi_tb WHERE pulau='jawa'";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});
