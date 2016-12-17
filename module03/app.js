(function () {
	'use strict';

angular.module('MsgApp', [])

.controller('MsgAppController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController ($scope) {
	$scope.name = "Yaakov";

	$scope.sayMessage = function () {
		return "ggg";
	};

} 



})();