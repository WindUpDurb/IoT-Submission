'use strict';

var app = angular.module('myApp');

app.service('Cisco', function($http) {

  this.submitHTTP = function () {
    return $http.get("https://api.ciscospark.com/v1/authorize?client_id=C563bb0df24a693ed32cf9bee766dbc90cf9128efa5b227f50ae67274a269b341&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=spark%3Amessages_write%20spark%3Arooms_read%20spark%3Amessages_read%20spark%3Arooms_write%20spark%3Apeople_read&state=set_state_here")
  };

  this.getAccessToken = function (authorizationCode) {
    console.log("In getAccessToken()")
    var grant_type = "grant_type=authorization_code&";
    var client_id = "client_id=C563bb0df24a693ed32cf9bee766dbc90cf9128efa5b227f50ae67274a269b341&";
    var client_secret = "client_secret=022d76483051eadd19a6aa256602dc12fdb32e9d75cb7be7901a085ce9ba132c&";
    var code = `code=${authorizationCode}&`;
    var redirect_uri = "redirect_uri=http://localhost:3000"
    return $http.post(`https://api.ciscospark.com/v1/access_token?${grant_type}${client_id}${client_secret}${code}${redirect_uri}`)
  }


});

