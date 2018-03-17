var connection = require("../config/connection");
var Burger = function(id, name, devoured) {
    this.id = id; // used for update only
    this.burger_name = name;
    this.devoured = devoured;
}

// We don't need an object to search, so we'll 
// add it directly to the function
// gather all records
Burger.getAll = function(cb) {
        // request all records from the database
        connection.query("SELECT * FROM burgers;", cb);
    }
    // We don't need an object to search, so we'll 
    // add it directly to the function
    // criteria = { "name" : "sarah"} or {"id": 1} for example
Burger.find = function(criteria, cb) {
        connection.query("SELECT * FROM burgers WHERE ?", criteria, cb);
    }
    // We add the method to the prototype
    // since we are having an object to save
    // create a record
Burger.prototype.create = function(cb) {
        var burgerData = {
            burger_name: this.burger_name,
            devoured: this.devoured
        };
        connection.query("INSERT INTO burgers SET ?", burgerData, cb);
    }
    // TODO update a record
Burger.update = function(criteria, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", )
    }
    // TODO delete a record
Burger.delete = function(criteria, cb) {
    var BurgerId = `id =  ${this.id}`;
    connection.query("DELETE FROM burgers WHERE ?", BurgerId, cb)
}
module.exports = Burger;