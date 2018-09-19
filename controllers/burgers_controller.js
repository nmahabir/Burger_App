var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
// code to generate the index sheet with text box
    })

})

// request to add burgers on the left side

// request to add burgers that have been devoured to go to the right side

// ajax code for the submit button 




module.exports(router);