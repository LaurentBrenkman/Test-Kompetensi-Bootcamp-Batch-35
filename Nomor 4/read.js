const db = require("./db_config");

const sql = "SELECT * FROM provinsi_tb";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});
