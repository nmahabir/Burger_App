var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {

    })

})




module.exports(router)