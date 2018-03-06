var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "b!gPh@rma23",
    database: "burgers_db"
});

module.exports = connection

// connect.connect(function(err) {
//     if (err) throw err;
//      ();
// });