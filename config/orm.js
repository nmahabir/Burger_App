var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, colToSearch, valOfCol) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, colToSearch, valOfCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, valToUpdate, colToSearch) {
    var queryString = "UPDATE ?? SET devoured = ? WHERE type = ?";
    console.log(queryString);
    connection.query(queryString, [table, valToUpdate, colToSearch], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports(orm);
