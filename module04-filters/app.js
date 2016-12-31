(function () {
	'use strict';

angular.module('MsgApp', [])

.controller('MsgAppController', MsgAppController);

MsgAppController.$inject = ['$scope', '$filter'];
function MsgAppController ($scope, $filter) {
	$scope.name = "David";
	$scope.stateOfBeing = "hungry";

	$scope.cookieCost = .45;

	$scope.sayMessage = function () {
		var msg = "I am hungry";
		var output = $filter('uppercase')(msg);
		$scope.name += output;
		return output;
	};



} 



})();