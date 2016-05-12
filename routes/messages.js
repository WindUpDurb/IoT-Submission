"use strict";

var express = require("express");
var router = express.Router();
var requestNPM = require("request");

router.route("/")
    .get(function (request, response) {

        requestNPM.get({
           url : `https://api.ciscospark.com/v1/messages?roomId=Y2lzY29zcGFyazovL3VzL1JPT00vMTM5NmJiMDAtMTgwNC0xMWU2LWIxYTQtZDFhMWJmZmNlNDFl`,
            headers : {
                "Content-Type": `application/json; charset=utf-8`,
                "Authorization": `Bearer ${process.env.GET_CISCO_AUTHORIZATION}`
            }
        }, function (error, responseR, body) {
            if (error) response.status(400).send(error);
            response.send(body)
        });

    })
    .post(function (request, response) {
        var textToPost = request.body.text;
        var authorizationCode = request.body.authorizationCode;
        var data = {
            "roomId": "Y2lzY29zcGFyazovL3VzL1JPT00vMTM5NmJiMDAtMTgwNC0xMWU2LWIxYTQtZDFhMWJmZmNlNDFl",
            "text": `${textToPost}`
        };

        requestNPM.post({
            url: "https://api.ciscospark.com/v1/messages",
            headers: {
                "Content-Type": `application/json; charset=utf-8`,
                "Authorization": `Bearer ${authorizationCode}`
            },
            body: JSON.stringify(data)
        }, function (error, responseR, body) {
            if (error) response.status(400).send(error);
            response.send("The post was successful")
        })

    })


module.exports = router;