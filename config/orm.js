var connection = require("./connection.js");
// Update ORM to include the call back functions
// Remove the table option from ORM, we only have one table
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
