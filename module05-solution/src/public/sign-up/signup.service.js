(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  var user = {};
  var infoSaved = false;

  service.getCategories = function (category) {
    var urlService = ApiPath + 'menu_items/' + category + '.json';
    return $http.get(urlService).then(function (response) {
      return response.data;
    });
  };

  service.setUser = function (user) {
    service.user = user;
    service.infoSaved = true;

  }

  service.getUser = function () {
    return service.user;
  }

  service.getInfoSaved = function () {
    return service.infoSaved;
  }



}



})();
