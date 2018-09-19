var connection = require("./connection.js");
// Update ORM to include the call back functions
// Remove the table option from ORM, we only have one table

var table = "all_burgers"
var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function(valOfCol, callback) {
    var queryString = "INSERT INTO "+ table + " (type) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(valToUpdate, colToSearch) {
    var queryString = "UPDATE " + table + " SET devoured = ? WHERE type = ?";
    console.log(queryString);
    connection.query(queryString, [valToUpdate, colToSearch], function(
      err,
      result
    ) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports(orm);
