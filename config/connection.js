var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "b!gPh@rma23",
        database: "burgers_db"
    });
    connect.connect(function(err) {
        if (err) throw err;
        //  ();
    });
};

module.exports = connection