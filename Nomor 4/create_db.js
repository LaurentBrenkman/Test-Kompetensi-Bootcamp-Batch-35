const db = require("./db_config");

const sql = "CREATE DATABASE tugas4_dumbways";
db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
});