'use strict';

var app = angular.module('myApp');

app.controller('homeCtrl', function($location, $scope, $http, $state, Cisco) {
  console.log('homeCtrl');

    console.log("params", $state.params);
    var absoluteUrl = $location.absUrl();
    var split = absoluteUrl.split("=")[1].replace(/&state/, "");

    console.log("query strings: ", split )

  var submitHttp = function () {
      console.log("In func")
    Cisco.submitHTTP()
        .then(function(response) {
          var absoluteUrl = $location.absUrl();
          var authorizationCode = absoluteUrl.split("=")[1].replace(/&state/, "");
          return Cisco.getAccessToken(split)
        })
        .then(function(response) {
            console.log("response: ", response)
        })
        .catch(function(error) {
          console.log("Error: ", error);
        })


      submitHttp();
  };
  






});
