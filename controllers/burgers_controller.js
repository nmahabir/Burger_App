var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data)
// code to generate the index sheet with text box
    })

})

// request to add burgers on the left side

// request to add burgers that have been devoured to go to the right side

// ajax code for the submit button 
$("#add-burger").on("click", function(){
    $.ajax({
        method: Post,
        data: $("#burger-input").val().trim(),
        url: "http://localhost:8080"
    })
// on click of this button - will add to the table if it doesn't exist, 
// and then move this burger option to the left of the side
})

$("#devour").on("click", function(){
    // function to move the burger that was devoured to the right side.
})

module.exports(router);