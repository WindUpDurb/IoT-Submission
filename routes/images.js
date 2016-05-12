'use strict';

var express = require('express');
var router = express.Router();
var Images = require("../models/images");

// TODO: start work on the API here
// /api/
router.route("/")
    .get(function (request, response) {
        response.send(Images);
    })

module.exports = router;
