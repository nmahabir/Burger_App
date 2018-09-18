var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(whatToInsert, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};