var connection = require('./connection')

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM burgers;"
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} SET ? ?`;
        connection.query(queryString, function(err, result) {
            {
                cols: vals
            }
            console.log(`${cols} ${vals}`);
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;