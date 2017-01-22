(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])
.config(config).
constant('ApiPath', 'https://davrodort-course5.herokuapp.com/');

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}

})();
