var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "quzxztpvciundcuq",
        password: "hcuy0zs3wn2hzfkj",
        database: "r9qp46djxzdwrll7"
    });
    // connection = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "b!gPh@rma23",
    //     database: "burgers_db"
    // });
    // {
    //     if (err) throw err;
    //     //  ();
    // });
};
connection.connect()

module.exports = connection