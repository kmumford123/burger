var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "b!gPh@rma23",
        database: "burgers_db"
    });
    // {
    //     if (err) throw err;
    //     //  ();
    // });
};
connection.connect()

module.exports = connection