let orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
        orm.getAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, val, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res)
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res)
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, cb, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;