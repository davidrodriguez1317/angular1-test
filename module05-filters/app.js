(function () {
	'use strict';

angular.module('MsgApp', [])

.controller('MsgAppController', MsgAppController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);


MsgAppController.$inject = ['$scope', '$filter', 'lovesFilter'];
function MsgAppController ($scope, $filter, lovesFilter) {
	$scope.name = "David";
	$scope.stateOfBeing = "hungry";
	$scope.textoCambio = "He likes cookies";

	$scope.cookieCost = .45;

	$scope.sayMessage = function () {
		var msg = "He likes cookies very much";
		var output = $filter('uppercase')(msg);
		$scope.name += output;
		return output;
	};

	$scope.sayLovesMessage = function () {
		
		var msg = "He likes cookies very much";
		return lovesFilter(msg);
	};


} 

function LovesFilter () {
	return function (input) {
		input = input || "";
		input = input.replace("likes", "loves");
		return input;
	}
}

function TruthFilter () {
	return function (input, target, replace) {
		input = input || "";
		input = input.replace(target, replace);
		return input;
	}
}


})();