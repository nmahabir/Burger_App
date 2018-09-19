var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll(function(result) {
      callback(result);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(value, callback) {
    orm.insertOne(value, function(result) {
      callback(result);
    });
  },
  updateOne: function(value, column, callback) {
    orm.updateOne(value, column, function(result) {
      callback(result);
    });
  }
};

module.exports(burger);
