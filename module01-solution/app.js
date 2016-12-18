(function () {
	'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.lunchOptions = "";

	$scope.checkOptions = function () {
		var options = $scope.lunchOptions.split(',');
		var numberOptions = 0;

		options.forEach(function (entry) {
			if (entry != "") numberOptions++;
		}); 

		console.log(numberOptions);
		if (numberOptions == 0) {
			alert("Please enter data first");
		} else if (numberOptions > 0 && numberOptions <= 3) {
			alert("Enjoy!");
		} else if (numberOptions >3) {
			alert("Too much!");
		}

	};

} 



})();