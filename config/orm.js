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
        connection.query("SELECT * FROM BURGER;", cb);
    }
    // We don't need an object to search, so we'll 
    // add it directly to the function
    // criteria = { "name" : "sarah"} or {"id": 1} for example
Burger.find = function(criteria, cb) {
        connection.query("SELECT * FROM BURGER WHERE ?", criteria, cb);
    }
    // We add the method to the prototype something
    // since we are having an object to save
    // create a record
Burger.prototype.create = function(cb) {
        var burgerData = {
            name: this.name,
            devoured: this.devoured
        };
        connection.query("INSERT INTO BURGER SET ?", burgerData, cb);
    }
    // TODO update a record
    // TODO delete a record
module.exports = Burger;